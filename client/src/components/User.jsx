import React from 'react';

function User(props) {
  const { username, bio, avatarUrl, movies } = props;
  const totalRating = movies.reduce((acc, movie) => acc + movie.rating, 0);
  const averageRating = (totalRating / movies.length).toFixed(2);

  return (
    <div className="flex h-full flex-col">
      <div className="flex  h-2/3 w-full  flex-col items-center   bg-white py-12  md:h-1/3 md:flex-row md:justify-around">
        <img
          className="  h-32 rounded-full border-4 border-brand md:h-48"
          src={avatarUrl}
          alt={`Avatar de ${username}`}
        />
        <div className="p-2 text-center">
          <h2 className="font-bold">{username}</h2>
          <p className="">{bio}</p>
          <div> note moyenne = {averageRating}</div>
          <div> sur {movies.length} notes</div>
        </div>
      </div>
    </div>
  );
}
export default User;
