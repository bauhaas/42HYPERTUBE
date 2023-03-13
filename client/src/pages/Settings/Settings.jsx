import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { BsCheck as CheckIcon, BsX as CloseIcon } from 'react-icons/bs';

import { AccountTab } from './Account';
import { ApparenceTab } from './Apparences';
import { ConnectionTab } from './Connections';
import { LanguageTab } from './Languages';

const TabPanel = ({ id, selectedTab, tabToDisplay, children }) => {
  return (
    <div
      role="tabpanel"
      id={id}
      className={`${
        selectedTab === tabToDisplay ? '' : 'hidden'
      } grow px-10 pt-16 pb-20`}
    >
      {children}
    </div>
  );
};

export const Settings = () => {
  const [selectedTab, setSelectedTab] = useState('account');
  const { t } = useTranslation();

  const [tabs, setTabs] = useState({
    account: {
      'aria-controls': 'my-account-tab',
      description: 'accountTab',
    },
    connection: {
      'aria-controls': 'connections-tab',
      description: 'connectionsTab',
    },
  });

  const [tabs2, setTabs2] = useState({
    language: {
      'aria-controls': 'languages-tab',
      description: 'languagesTab',
    },
    apparence: {
      'aria-controls': 'apparences-tab',
      description: 'apparencesTab',
    },
  });

  const test = () => {
    alert('should close settings and redirect to previous page');
  };
  return (
    <>
      <div className="min-h-screen">
        <div className="flex" id="sidebarview">
          <div className="flex min-h-screen bg-brand dark:bg-dark" id="sidebar">
            <nav className="w-52 pt-14 pr-1.5 pb-14 pl-5" id="navside">
              <div
                className="flex flex-col"
                role="tablist"
                aria-orientation="vertical"
              >
                <div className="px-2.5 py-1.5 text-xs font-bold uppercase tracking-tight dark:text-light">
                  <Trans i18nKey="settings.userSettingsLabel" />
                </div>
                {Object.entries(tabs).map(([tabName, tabData], index) => (
                  <div
                    key={index + tabName}
                    className="mb-0.5 rounded-lg py-1.5 px-2.5 text-left hover:bg-brand-hover focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-blue-500 dark:text-light dark:hover:bg-dark-hover"
                    role="tab"
                    tabIndex={0}
                    aria-controls={tabData['aria-controls']}
                    onKeyDown={(e) => {
                      if (e.key === ' ') setSelectedTab(tabName);
                    }}
                    onClick={() => setSelectedTab(tabName)}
                  >
                    <Trans i18nKey={`settings.${tabData.description}`} />
                  </div>
                ))}
                <div className="px-2.5 py-1.5 text-xs font-bold uppercase tracking-tight dark:text-light">
                  <Trans i18nKey="settings.appSettingsLabel" />
                </div>
                {Object.entries(tabs2).map(([tabName, tabData], index) => (
                  <div
                    key={index + tabName}
                    className="mb-0.5 rounded-lg py-1.5 px-2.5 text-left hover:bg-brand-hover focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-blue-500 dark:text-light dark:hover:bg-dark-hover"
                    role="tab"
                    tabIndex={0}
                    aria-controls={tabData['aria-controls']}
                    onKeyDown={(e) => {
                      if (e.key === ' ') setSelectedTab(tabName);
                    }}
                    onClick={() => setSelectedTab(tabName)}
                  >
                    <Trans i18nKey={`settings.${tabData.description}`} />
                  </div>
                ))}
              </div>
              <div
                className="mb-0.5 rounded-lg py-1.5 px-2.5 text-left hover:bg-brand-hover focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-blue-500 dark:text-light dark:hover:bg-dark-hover"
                role="tab"
                tabIndex={0}
              >
                <Trans i18nKey="settings.logout" />
              </div>
            </nav>
          </div>
          <div className="flex grow bg-light dark:bg-dark-focus" id="content">
            <TabPanel
              id="my-account-tab"
              selectedTab={selectedTab}
              tabToDisplay="account"
            >
              <AccountTab />
            </TabPanel>
            <TabPanel
              id="connections-tab"
              selectedTab={selectedTab}
              tabToDisplay="connection"
            >
              <ConnectionTab />
            </TabPanel>
            <TabPanel
              id="languages-tab"
              selectedTab={selectedTab}
              tabToDisplay="language"
            >
              <LanguageTab />
            </TabPanel>
            <TabPanel
              id="apparences-tab"
              selectedTab={selectedTab}
              tabToDisplay="apparence"
            >
              <ApparenceTab />
            </TabPanel>
          </div>
          <div className="flex flex-col items-center bg-light p-2 dark:bg-dark-focus">
            <CloseIcon
              role="button"
              tabIndex="0"
              className="ml-auto h-8 w-8 cursor-pointer rounded-full border-2 border-dark focus:outline-none focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-blue-500 dark:border-light dark:text-light"
              onClick={() => test()}
            />
            <div className="text-sm dark:text-light">ESC</div>
          </div>
        </div>
      </div>
    </>
  );
};
