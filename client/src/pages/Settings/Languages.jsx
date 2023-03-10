import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

export const LanguageTab = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('french');
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  const languages = [
    {
      id: 'french',
      i18n: 'fr',
      name: 'Français',
      value: 'french',
      translation: 'Français',
      flagUrl: '../../../public/france.png',
    },
    {
      id: 'english',
      i18n: 'en',
      name: 'English',
      value: 'english',
      translation: 'Anglais',
      flagUrl: '../../../public/united-kingdom.png',
    },
  ];

  console.log(selectedLanguage);
  return (
    <>
      <h2 className="mb-5 text-2xl font-bold">
        <Trans i18nKey="settings.languagesTab" />
      </h2>
      <div className="">
        <h3 className="mb-2 text-xs font-bold uppercase tracking-tight">
          <Trans i18nKey="settings.languages.selectLabel" />
        </h3>

        <div role="radiogroup" aria-orientation="vertical">
          {languages.map((language) => (
            <label key={language.id}>
              <div
                id={language.id}
                className="mb-2 flex cursor-pointer items-center gap-2 rounded-md bg-slate-500  p-2.5 hover:bg-slate-400"
              >
                <input
                  type="radio"
                  id={language.id}
                  name="language"
                  value={language.i18n}
                  checked={selectedLanguage === language.i18n}
                  onChange={handleLanguageChange}
                  className="cursor-pointer checked:bg-red-500"
                />
                <div className="font-bold">{language.name}</div>
                <div className="ml-auto flex items-center gap-2">
                  <div className="text-xs">
                    <Trans i18nKey={`settings.languages.${language.value}`} />
                  </div>
                  <img src={language.flagUrl} alt={language.name} />
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};
