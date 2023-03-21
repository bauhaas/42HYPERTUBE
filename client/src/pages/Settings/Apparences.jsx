import { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { BsCheck as CheckIcon, BsX as CloseIcon } from 'react-icons/bs';

import Avatar from '../../components/Avatar';
import { ActionHeader } from './Components/ActionHeader';
import { TabHeader } from './Components/TabHeader';

export const ApparenceTab = () => {
  const { t } = useTranslation();

  const [theme, setTheme] = useState(localStorage.theme || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [theme]);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const COLORS = ['blue-500', 'green-500', 'red-500'];

  const [selectedColor, setSelectedColor] = useState(COLORS[0]);

  function handleColorChange(color) {
    setSelectedColor(color);
  }

  return (
    <>
      <TabHeader i18nKey="settings.apparencesTab" />
      <ActionHeader i18nKey="settings.apparences.accentColorLabel" />
      <div className="flex gap-2">
        {COLORS.map((color) => (
          <div
            key={color}
            className={`flex h-6 w-6 place-items-center rounded-full bg-${color}`}
            onClick={() => handleColorChange(color)}
          >
            {selectedColor === color && <CheckIcon className="h-8 w-8" />}
          </div>
        ))}
      </div>
      <div className="my-4 flex gap-10 rounded-lg bg-mid  p-4 dark:bg-dark">
        <div className="flex flex-col gap-2 ">
          <div className="dark:text-light">Avatar</div>
          <Avatar
            imageAttribute={'h-10 w-10 rounded-full ring-2 ring-blue-500'}
            imagePath="https://randomuser.me/api/portraits/men/75.jpg"
          />
        </div>
        <div className="flex flex-col">
          <div className="dark:text-light">Menu</div>
          <label className="accent-blue-500 dark:text-light">
            <input type="radio" />
            {'  '}radio
          </label>
        </div>
        <div className="flex flex-col">
          <div className="dark:text-light">Text highlight</div>
          <div className="dark:text-light">
            <span className="bg-blue-500 text-light dark:text-black">
              Ship stuff
            </span>{' '}
            people need.
          </div>
        </div>
      </div>
      <ActionHeader i18nKey="settings.apparences.themeLabel" />
      <div className="flex gap-2 ">
        <label>
          <input
            className="group peer sr-only"
            name="size"
            type="radio"
            value="light"
            checked={theme === 'light'}
            onChange={handleThemeChange}
          />
          <div className="relative flex flex-col items-center justify-center rounded-lg bg-mid dark:bg-dark dark:text-light dark:hover:bg-dark-hover">
            <div
              className={`flex h-24 w-32 rounded-lg ${
                theme === 'light' ? 'border-2 border-blue-500' : ''
              } m-1`}
            >
              {theme === 'light' ? (
                <div
                  className={`m-1 ml-auto flex h-6 w-6 place-items-center self-end rounded-full bg-blue-500`}
                >
                  <CheckIcon className={`h-8 w-8 text-light`} />
                </div>
              ) : null}
            </div>
            <div>Light mode</div>
          </div>
        </label>
        <label className="">
          <input
            className="peer sr-only"
            name="size"
            type="radio"
            value="dark"
            checked={theme === 'dark'}
            onChange={handleThemeChange}
          />
          <div className="relative flex flex-col items-center justify-center rounded-lg bg-mid dark:bg-dark dark:text-light dark:hover:bg-dark-hover ">
            <div
              className={`flex h-24 w-32 rounded-lg ${
                theme === 'dark' ? 'border-2 border-blue-500' : ''
              } m-1`}
            >
              {theme === 'dark' ? (
                <div
                  className={`m-1 ml-auto flex h-6 w-6 place-items-center self-end rounded-full bg-blue-500`}
                >
                  <CheckIcon className={`h-8 w-8`} />
                </div>
              ) : null}
            </div>
            <div>Dark mode</div>
          </div>
        </label>
      </div>
    </>
  );
};
