import json
import sys
import urllib.error

import requests
from imdb import Cinemagoer
from imdb.Character import Character
from imdb.Company import Company
from imdb.Movie import Movie
from imdb.Person import Person


class MyJsonEncoder(json.JSONEncoder):
	def default(self, obj):
		if isinstance(obj, (Person, Company, Character, Movie)):
			return obj['name'] if 'name' in obj.keys() else ''
		return json.JSONEncoder.default(self, obj)


def get_imdb_info(link: str) -> dict:
	*_, movie_id = link.strip('/').split('/')
	movie_id = movie_id.replace('tt', '')
	ia = Cinemagoer()
	movie = ia.get_movie(movie_id)
	information = {
		key: movie[key] for key in movie.infoset2keys['main'] + movie.infoset2keys['plot']
	}
	return information


def scrape_publicdomaintorrents(url: str):
	req = requests.get(url)
	torrent_links = []
	for line in req.text.splitlines():
		if 'btdownload' in line:
			link = line[len('href='):line.index('>')]
			torrent_links.append(link)
	return torrent_links


def main() -> None:
	filename = 'free-movies-publicdomaintorrents.json'
	results = {}
	with open(filename, 'r') as pickle_handle:
		file = json.load(pickle_handle)
	for i, (url, obj) in enumerate(file.items()):
		print(f'{i}: {url=}, {obj=}', file=sys.stderr)
		freenessurl, status, title = obj['freenessurl'], obj['status'], obj['title']
		information = {
			'torrents': scrape_publicdomaintorrents(freenessurl)
		}
		if 'imdb' in url:
			while True:
				try:
					# This while loop is to retry in case an error pops up.
					# I encountered some HTTP 500 errors occasionally
					# And this is how I chose to circumvent those.
					information.update(get_imdb_info(url))
				except urllib.error.HTTPError:
					print(f'Encountered an exception querying imdb for {title} ({url=})', file=sys.stderr)
					continue
				else:
					break
		results[title] = information
	with open('results.json', 'w') as json_handle:
		# Using my own JsonEncoder to serialize non-serializable classes
		# like Person, Movie and others as just their name.
		json.dump(results, json_handle, cls=MyJsonEncoder)


if __name__ == '__main__':
	main()
