import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Movie from '../../components/Movie';
import NavBar from '../../components/NavBar';
import User from '../../components/User';

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
];

export const UserPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/')
      .then((response) => {
        setUserData(response.data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!userData) {
    return <div>Chargement des données d'utilisateur...</div>;
  }
  const { name, email, picture } = userData;
  const { first, last } = name;
  return (
    <div className="flex-col bg-brand">
      <NavBar avatarUrl={picture.large} />
      <User
        username={`${first} ${last}`}
        bio={email}
        avatarUrl={picture.large}
        movies={movies}
      />
      <div className="flex flex-row flex-wrap  justify-center bg-brand ">
        {movies.map((movie) => (
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
  );
};
