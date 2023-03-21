import { useState } from 'react';

import Navbar from '../../components/NavBar';

export const Home = () => {
  const [movies, setMovies] = useState([
    {
      title: 'The Shawshank Redemption',
      year: '1994',
      rated: 'R',
      released: '14 Oct 1994',
      runtime: '142 min',
      genre: 'Drama',
      director: 'Frank Darabont',
      writer:
        'Stephen King (short story "Rita Hayworth and Shawshank Redemption"), Frank Darabont (screenplay)',
      actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
      plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      language: 'English',
      country: 'USA',
      awards: 'Nominated for 7 Oscars. Another 21 wins & 36 nominations.',
      poster:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FShawshank-Redemption-Poster-Regular-POSTER%2Fdp%2FB0016D6TEQ&psig=AOvVaw3zp3DoGFvbHR32bEORKgQ0&ust=1678816192422000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLCY2-e72f0CFQAAAAAdAAAAABAE',
      ratings: [
        {
          source: 'Internet Movie Database',
          value: '9.2/10',
        },
        {
          source: 'Rotten Tomatoes',
          value: '91%',
        },
        {
          source: 'Metacritic',
          value: '80/100',
        },
      ],
      metascore: '80',
      imdbRating: '9.2',
      imdbVotes: '2,414,429',
      imdbID: 'tt0111161',
      type: 'movie',
      dvd: '27 Jan 1998',
      boxOffice: 'N/A',
      production: 'Columbia Pictures',
      website: 'N/A',
      response: 'True',
    },
  ]);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4 bg-light pt-14">
        {movies.map((movie) => {
          return (
            <>
              <div>{movie.title}</div>
              <img src=""></img>
            </>
          );
        })}
      </div>
    </>
  );
};
