import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import videojs from 'video.js';

import 'video.js/dist/video-js.css';

import Avatar from '../../components/Avatar';
import Navbar from '../../components/NavBar';

export const VideoJS = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement('video-js');

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      }));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export const Movie = () => {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  const [movie, setMovie] = useState({
    comments: [
      {
        userName: 'John Doe',
        content: 'This is a good clip',
        profilePath: 'https://randomuser.me/api/portraits/men/75.jpg',
        date: '19/03/2023 23:35',
        userId: 1,
      },
      {
        userName: 'Jane Doe',
        content: 'This is a bad clip',
        profilePath: 'https://randomuser.me/api/portraits/women/75.jpg',
        date: '19/03/2023 23:35',
        userId: 2,
      },
    ],
  });
  return (
    <>
      <Navbar />
      <div className="flex h-screen bg-light pt-16">
        <div className=" w-1/2 bg-blue-300">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className="w-1/2 bg-red-300">
          <h3 className="font-bold">Comments</h3>
          <ul>
            {movie.comments.map((comment, index) => {
              return (
                <li className="pt-2">
                  <Link
                    to={`/user/${comment.userId}`}
                    className="flex items-center gap-2 bg-mid hover:bg-mid-hover"
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
