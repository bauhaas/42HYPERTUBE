import { AiFillGithub as GithubIcon } from 'react-icons/ai';
import { FaFacebook as FacebookIcon } from 'react-icons/fa';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';
import { GrClose as CloseIcon } from 'react-icons/gr';

import { FortyTwoIcon } from '../../assets/FortyTwoIcon';
import { Toggle } from '../../components/Toggle';

export const ConnectionTab = () => {
  return (
    <>
      <h2 className="mb-5 text-2xl font-bold">Connections</h2>
      <div className="flex flex-col">
        <div className="mb-4 rounded-lg bg-gray-600 p-4">
          <h3 className="mb-2 text-sm font-bold">
            Add account to your profile
          </h3>
          <div className="text-xs">
            This information will not be shared outside of Hypertube without
            your permission.
          </div>
          <div className="mt-4 flex gap-2">
            <button className="flex h-12 w-12 items-center justify-center  rounded-lg bg-gray-500 hover:bg-gray-400">
              <GoogleIcon className={`h-8 w-8`} />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-500 hover:bg-gray-400">
              <GithubIcon className={`h-8 w-8`} />
            </button>
            <button className=" flex h-12 w-12 items-center justify-center  rounded-lg bg-gray-500 hover:bg-gray-400">
              <FacebookIcon className={`h-8 w-8`} />
            </button>
            <button className=" flex h-12 w-12 items-center  justify-center rounded-lg bg-gray-500 hover:bg-gray-400">
              <FortyTwoIcon className={`h-8 w-8`} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div id="connection" className="mb-2 rounded-lg bg-gray-400">
            <div id="connectionHeader" className="flex items-center gap-3 p-4">
              <GithubIcon className={`h-8 w-8`} />
              <div>
                <div className="font-bold">Korkrane</div>
                <div className="text-xs">Github</div>
              </div>
              <CloseIcon className="ml-auto cursor-pointer" />
            </div>
            <div
              id="connectionOption"
              className="flex rounded-b-lg bg-gray-600 py-5 px-2.5"
            >
              <div className="grow text-sm font-bold">
                Afficher sur mon profil
              </div>
              <Toggle />
            </div>
          </div>

          <div id="connection" className="mb-2 rounded-lg bg-gray-400">
            <div id="connectionHeader" className="flex items-center gap-3 p-4">
              <GoogleIcon className={`h-8 w-8`} />
              <div>
                <div className="font-bold">Baudoin Haas</div>
                <div className="text-xs">Google</div>
              </div>
              <CloseIcon className="ml-auto cursor-pointer" />
            </div>
            <div
              id="connectionOption"
              className="flex rounded-b-lg bg-gray-600 py-5 px-2.5"
            >
              <div className="grow text-sm font-bold">
                Afficher sur mon profil
              </div>
              <Toggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
