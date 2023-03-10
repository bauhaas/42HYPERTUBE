import { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

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

  console.log(theme);
  return (
    <>
      <h2 className="mb-5 text-2xl font-bold dark:text-white">
        <Trans i18nKey="settings.apparencesTab" />
      </h2>
      <div className="flex flex-col">
        <div>
          <label className="dark:text-white">
            <input
              type="radio"
              value="light"
              checked={theme === 'light'}
              onChange={handleThemeChange}
            />
            Light mode
          </label>
          <label className="dark:text-white">
            <input
              type="radio"
              value="dark"
              checked={theme === 'dark'}
              onChange={handleThemeChange}
            />
            Dark mode
          </label>
        </div>
      </div>
    </>
  );
};
