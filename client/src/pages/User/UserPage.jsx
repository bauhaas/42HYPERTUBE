import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Avatar from '../../components/Avatar';
import { Movie } from './Components/movie';

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
    title: 'The Dark Knight',
    description:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    rating: 9.0,
    coverImage:
      'https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg',
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
    <div className="h-screen">
      <div className="flex h-full flex-col md:h-1/3 md:flex-row ">
        <div className="flex h-full w-full items-center  justify-center bg-gray-500 md:w-1/3">
          <Avatar
            imageAttribute={'h-48  rounded-full min-h-[20%]'}
            imagePath={picture.medium}
          />
        </div>
        <div className=" flex h-full  w-full  flex-col items-center justify-center bg-gray-300 md:w-2/3 ">
          <h2 className="my-16 mb-2 text-4xl font-bold">
            {first} {last}
          </h2>
          <p className="text-2xl leading-relaxed"></p>
          <div> note moyenne</div>
          <div> sur x notes</div>
          <div className="mt-6 mb-6 text-center italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            voluptatum nesciunt labore? Inventore at a minus, sit architecto
            expedita est! Tempore voluptatem ipsa commodi sit laudantium,
            reprehenderit dicta? Similique, reprehenderit?
          </div>
        </div>
      </div>
      <div className="mx-12 mt-6 flex flex-col gap-4 md:mx-24">
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
