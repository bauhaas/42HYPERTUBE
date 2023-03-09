import { useState } from 'react';

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

  const [tabs, setTabs] = useState({
    account: {
      'aria-controls': 'my-account-tab',
      description: 'My account',
    },
    connection: {
      'aria-controls': 'connections-tab',
      description: 'Connections',
    },
  });

  const [tabs2, setTabs2] = useState({
    language: {
      'aria-controls': 'languages-tab',
      description: 'Languages',
    },
    apparence: {
      'aria-controls': 'apparences-tab',
      description: 'Apparences',
    },
  });

  return (
    <>
      <div className="min-h-screen">
        <div className="flex" id="sidebarview">
          <div className="flex min-h-screen bg-gray-600" id="sidebar">
            <nav className="w-52 pt-14 pr-1.5 pb-14 pl-5" id="navside">
              <div
                className="flex flex-col"
                role="tablist"
                aria-orientation="vertical"
              >
                <div
                  className="px-2.5 py-1.5 font-bold uppercase"
                  role="button"
                  tabIndex={-1}
                >
                  user settings
                </div>
                {Object.entries(tabs).map(([tabName, tabData], index) => (
                  <div
                    key={index + tabName}
                    className="mb-0.5 rounded-lg py-1.5 px-2.5 text-left  hover:bg-gray-500  focus:bg-gray-500 focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-blue-500"
                    role="tab"
                    tabIndex={0}
                    aria-controls={tabData['aria-controls']}
                    onKeyDown={(e) => {
                      if (e.key === ' ') setSelectedTab(tabName);
                    }}
                    onClick={() => setSelectedTab(tabName)}
                  >
                    {tabData.description}
                  </div>
                ))}
                <div className="px-2.5 py-1.5 font-bold uppercase">
                  app settings
                </div>
                {Object.entries(tabs2).map(([tabName, tabData], index) => (
                  <div
                    key={index + tabName}
                    className="mb-0.5 rounded-lg py-1.5 px-2.5 text-left hover:bg-gray-500  focus:bg-gray-500 focus:outline-none focus:outline-offset-0 focus:outline-blue-500"
                    role="tab"
                    tabIndex={0}
                    aria-controls={tabData['aria-controls']}
                    onKeyDown={(e) => {
                      if (e.key === ' ') setSelectedTab(tabName);
                    }}
                    onClick={() => setSelectedTab(tabName)}
                  >
                    {tabData.description}
                  </div>
                ))}
              </div>
              <div
                className="mb-0.5 rounded-lg py-1.5 px-2.5 text-left hover:bg-gray-500  focus:bg-gray-500 focus:outline-none focus:outline-offset-0 focus:outline-blue-500"
                role="tab"
                tabIndex={0}
              >
                Logout
              </div>
            </nav>
          </div>
          <div className="flex grow bg-gray-300" id="content">
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
        </div>
      </div>
    </>
  );
};
