import React from 'react';

function User(props) {
  const { username, bio, avatarUrl, movies } = props;

  return (
    <div class="m-4 h-screen">
      <div class="flex h-1/2 flex-col md:flex-row">
        <div class="flex h-full w-full items-center  justify-center bg-gray-500 md:w-1/3">
          <img
            className="h-48  rounded-full"
            src={avatarUrl}
            alt={`Avatar de ${username}`}
          />
        </div>
        <div class="flex h-full  w-full  flex-col items-center bg-gray-300 md:w-2/3 ">
          <h2 className="my-16 mb-2 text-4xl font-bold">{username}</h2>
          <p className="text-2xl leading-relaxed">{bio}</p>
          <div> note moyenne</div>
          <div> sur x notes</div>
        </div>
      </div>
      <div className="flex flex-col">
        {movies.map((movie) => (
          <div key={movie.id} className="my-4 flex flex-col md:flex-row">
            <img
              className="mx-auto mr-4 h-32  w-32 rounded-md md:mx-0 md:mr-4"
              src={movie.coverImage}
              alt={`Cover for ${movie.title}`}
            />
            <div className="flex flex-col">
              <h3 className="mb-2 text-lg font-bold">{movie.title}</h3>
              <p className="text-md mb-2 leading-relaxed">
                {movie.description}
              </p>
              <p className="text-sm font-semibold">Note: {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;
