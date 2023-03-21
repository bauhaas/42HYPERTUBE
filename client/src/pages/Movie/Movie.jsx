export const Movie = () => {
  return (
    <>
      <Navbar />
      <div className="bg-light flex h-screen pt-16">
        <div className=" w-1/2 bg-blue-300">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className="w-1/2 bg-red-300">
          <h3 className="font-bold">Comments</h3>
          <ul>
            {movie.comments.map((comment, index) => {
              return (
                <li key={comment} className="pt-2">
                  <Link
                    to={`/user/${comment.userId}`}
                    className="bg-mid hover:bg-mid-hover flex items-center gap-2"
                  >
                    <Avatar
                      imageAttribute={'h-10 w-10 rounded-full'}
                      imagePath={comment.profilePath}
                    />
                    <div className="flex flex-col">
                      <div className="flex gap-2">
                        <div className="font-bold">{comment.userName}</div>
                        <div>{comment.date}</div>
                      </div>
                      <div>{comment.content}</div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
