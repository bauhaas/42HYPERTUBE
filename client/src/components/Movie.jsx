import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ id, coverImage, title, description, rating }) => {
  const [hovered, setHovered] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
  };

  const style = {
    backgroundImage: `url(${coverImage})`,
    transform: hovered ? 'scale(1.15)' : 'scale(1)',
    transition: 'transform 0.5s ease',
  };

  const handleAddToWishList = () => {
    setAddedToWishlist(!addedToWishlist);
  };

  return (
    <div
      className="relative mx-2 my-12 h-80 w-56 overflow-hidden rounded-lg border-2 border-gray-300 bg-cover bg-center md:h-96 md:w-64"
      style={style}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div
        className={`absolute bottom-0 left-0 right-0 h-1/2 transform bg-white bg-opacity-80 transition-all duration-500 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="m-4 flex flex-row justify-between">
          <Link to={`/movie/${id}`}>
            <img
              className="h-10 w-10 hover:scale-110"
              src="../../svg/play-circle.svg"
              alt="Play Button"
            />
          </Link>
          {addedToWishlist ? (
            <img
              className="h-10 w-10 cursor-pointer rounded-full border-2 border-brand hover:scale-110"
              src="../../svg/icons8-done.svg"
              alt="Wish List Added"
              onClick={handleAddToWishList}
            />
          ) : (
            <img
              className="h-10 w-10 cursor-pointer rounded-full border-2 border-brand hover:scale-110"
              src="../../svg/plus.svg"
              alt="Add to Wish List"
              onClick={handleAddToWishList}
            />
          )}
        </div>
        <hr className="mx-4 h-px border-2 border-brand" />

        <div className="px-4 ">
          <h3 className="text-lg font-bold ">{title}</h3>
          <p className="text-sm ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
