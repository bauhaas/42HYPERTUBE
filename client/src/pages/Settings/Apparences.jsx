import { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { BsCheck as CheckIcon, BsX as CloseIcon } from 'react-icons/bs';

import Avatar from '../../components/Avatar';

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

  console.log(theme);
  return (
    <>
      <h2 className="mb-5 text-2xl font-bold dark:text-white">
        <Trans i18nKey="settings.apparencesTab" />
      </h2>
      <h3 className="mb-2 text-xs font-bold uppercase tracking-tight dark:text-white">
        Choose your accent color
      </h3>
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
      <div className="my-4 flex gap-10 rounded-lg bg-gray-600 p-4">
        <div className="flex flex-col gap-2">
          <div>Avatar</div>
          <Avatar
            imageAttribute={'h-10 w-10 rounded-full ring-2 ring-blue-500'}
            imagePath="https://randomuser.me/api/portraits/men/75.jpg"
          />
        </div>
        <div className="flex flex-col">
          <div>Menu</div>
          <label className="accent-blue-500">
            <input type="radio" />
            {'  '}radio
          </label>
        </div>
        <div className="flex flex-col">
          <div>Text highlight</div>
          <div>
            <span className="bg-blue-500 text-white">Ship stuff</span> people
            need.
          </div>
        </div>
      </div>
      <h3 className="mb-2 text-xs font-bold uppercase tracking-tight dark:text-white">
        Choose your theme
      </h3>
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
          <div className="relative flex flex-col items-center justify-center rounded-lg bg-gray-500 text-black peer-checked:bg-black peer-checked:text-white">
            <div
              className={`flex h-24 w-32 rounded-lg ${
                theme === 'light' ? 'border-2 border-blue-500' : ''
              } m-1`}
            >
              {theme === 'light' ? (
                <div
                  className={`m-1 ml-auto flex h-6 w-6 place-items-center self-end rounded-full bg-blue-500`}
                >
                  <CheckIcon className={`h-8 w-8`} />
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
          <div className="relative flex flex-col items-center justify-center rounded-lg bg-gray-500 text-black peer-checked:bg-black peer-checked:text-white ">
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
