import { useState } from 'react';

import Movie from '../../components/Movie';
import Navbar from '../../components/NavBar';

const movies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    rating: 9.3,
    coverImage:
      'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
  },
  {
    id: 2,
    title: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    rating: 9.2,
    coverImage:
      'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
  },
  {
    id: 3,
    title: 'The Shawshank Redemption',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    rating: 9.3,
    coverImage:
      'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
  },
  {
    id: 4,
    title: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    rating: 9.2,
    coverImage:
      'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
  },
  {
    id: 5,
    title: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    rating: 9.2,
    coverImage:
      'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
  },
  {
    id: 6,
    title: 'The Shawshank Redemption',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    rating: 9.3,
    coverImage:
      'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
  },
  {
    id: 7,
    title: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    rating: 9.2,
    coverImage:
      'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
  },
  {
    id: 8,
    title: 'The Shawshank Redemption',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    rating: 9.3,
    coverImage:
      'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
  },
  {
    id: 9,
    title: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    rating: 9.2,
    coverImage:
      'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
  },
  {
    id: 10,
    title: 'The Shawshank Redemption',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    rating: 9.3,
    coverImage:
      'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
  },
  {
    id: 11,
    title: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    rating: 9.2,
    coverImage:
      'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
  },
  {
    id: 12,
    title: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    rating: 9.2,
    coverImage:
      'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
  },
  {
    id: 13,
    title: 'The Shawshank Redemption',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    rating: 9.3,
    coverImage:
      'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
  },
  {
    id: 14,
    title: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    rating: 9.2,
    coverImage:
      'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
  },
];
export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  // Ajout de la section "Recently Added" avec 4 films au hasard
  const recentlyAdded = movies
    .slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Recently Added
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {recentlyAdded.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                description={movie.description}
                rating={movie.rating}
                coverImage={movie.coverImage}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Tous les films
            </h2>
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            {currentMovies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                description={movie.description}
                rating={movie.rating}
                coverImage={movie.coverImage}
              />
            ))}
          </div>
          <div className="mt-4 flex flex-row justify-center space-x-4">
            {pageNumbers.map((pageNum) => (
              <button
                key={pageNum}
                className={`rounded-lg px-4 py-2 ${
                  pageNum === currentPage
                    ? 'bg-brand text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-300'
                }`}
                onClick={() => handlePageClick(pageNum)}
              >
                {pageNum}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
