import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { AiFillGithub as GithubIcon } from 'react-icons/ai';
import { BsCheck as CheckIcon, BsX as CloseIcon } from 'react-icons/bs';
import { FaFacebook as FacebookIcon } from 'react-icons/fa';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';

import { FortyTwoIcon } from '../../assets/FortyTwoIcon';
import { Toggle } from '../../components/Toggle';

export const ConnectionTab = () => {
  const { t } = useTranslation();

  const [connections, setConnections] = useState([
    {
      provider: 'Github',
      displayName: 'Korkrane',
    },
    {
      provider: 'Google',
      displayName: 'Baudoin Haas',
    },
  ]);

  const providerIconMap = {
    Github: GithubIcon,
    Google: GoogleIcon,
    Facebook: FacebookIcon,
    42: FortyTwoIcon,
  };

  const syncWith3rdParty = (provider) => {
    // later on, it will redirect to 3rd party authentication

    const newConnection = {
      provider: provider,
      displayName: '3rdParty displayName',
    };

    setConnections((prevConnections) => [...prevConnections, newConnection]);
  };

  const delete3rdParty = (provider) => {
    // later on, it will revoke access with 3rd party

    setConnections((prevConnections) =>
      prevConnections.filter((connection) => connection.provider !== provider),
    );
  };

  return (
    <>
      <h2 className="mb-5 text-2xl font-bold dark:text-light">
        <Trans i18nKey="settings.connectionsTab" />
      </h2>
      <div className="flex flex-col">
        <div className="mb-4 rounded-lg bg-mid p-4 dark:bg-dark">
          <h3 className="mb-2 text-sm font-bold dark:text-light">
            <Trans i18nKey="settings.connections.addAccountLabel" />
          </h3>
          <div className="text-xs dark:text-light">
            <Trans i18nKey="settings.connections.addAccountDesc" />
          </div>
          <div className="mt-4 flex gap-2">
            {Object.entries(providerIconMap).map(
              ([provider, IconComponent]) => (
                <button
                  key={provider}
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-light-hover hover:bg-light focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-blue-500 dark:bg-mid-hover dark:hover:bg-mid"
                  onClick={() => syncWith3rdParty(provider)}
                >
                  <IconComponent className={`h-8 w-8 dark:text-light`} />
                </button>
              ),
            )}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {connections.map((connection, index) => {
            const ProviderIcon = providerIconMap[connection.provider];
            return (
              <div
                key={index}
                id="connection"
                className="mb-2 rounded-lg bg-mid dark:bg-dark"
              >
                <div
                  id="connectionHeader"
                  className="flex items-center gap-3 p-4"
                >
                  <ProviderIcon className={`h-8 w-8 dark:text-light`} />
                  <div>
                    <div className="font-bold dark:text-light">
                      {connection.displayName}
                    </div>
                    <div className="text-xs dark:text-light">
                      {connection.provider}
                    </div>
                  </div>
                  <CloseIcon
                    role="button"
                    tabIndex="0"
                    className="ml-auto h-8 w-8 cursor-pointer rounded-lg focus:outline-none focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-blue-500 dark:text-light"
                    onClick={() => delete3rdParty(connection.provider)}
                  />
                </div>
                <div
                  id="connectionOption"
                  className="flex rounded-b-lg bg-light-hover py-5 px-2.5 dark:bg-mid-hover"
                >
                  <div className="grow text-sm font-bold dark:text-light">
                    <Trans i18nKey="settings.connections.displayToProfileLabel" />
                  </div>
                  <Toggle />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
