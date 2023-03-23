import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ id, coverImage, title, description, rating }) => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
  };

  const style = {
    backgroundImage: `url(${coverImage})`,
    transform: hovered ? 'scale(1.15)' : 'scale(1)',
    transition: 'transform 0.5s ease',
  };

  return (
    <Link to={`/movie/${id}`}>
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
          <div className="px-4 py-2">
            <h3 className="text-lg font-bold ">{title}</h3>
            <p className="text-sm ">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
