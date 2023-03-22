import React from 'react';

function User(props) {
  const { username, bio, avatarUrl, movies } = props;

  return (
    <div className="flex h-full flex-col bg-brand">
      <div className="flex  h-2/3 w-full flex-col items-center  justify-between bg-white py-12  md:h-1/3 md:flex-row md:justify-around">
        <img
          className="  h-32 rounded-full  md:h-48"
          src={avatarUrl}
          alt={`Avatar de ${username}`}
        />
        <div className="p-2 text-center">
          <h2 className="font-bold">{username}</h2>
          <p className="">{bio}</p>
          <div> note moyenne</div>
          <div> sur x notes</div>
        </div>
      </div>
    </div>
  );
}
//   <div key={movie.id} className="my-4 flex flex-col md:flex-row">
//     <img
//       className="mx-auto mr-4 h-32  w-32 rounded-md md:mx-0 md:mr-4"
//       src={movie.coverImage}
//       alt={`Cover for ${movie.title}`}
//     />
//     <div className="flex flex-col">
//       <h3 className="mb-2 text-lg font-bold">{movie.title}</h3>
//       <p className="text-md mb-2 leading-relaxed">
//         {movie.description}
//       </p>
//       <p className="text-sm font-semibold">Note: {movie.rating}</p>
//     </div>
//   </div>
// ))}
export default User;
