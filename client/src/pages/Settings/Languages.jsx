import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ActionHeader } from './Components/ActionHeader';
import { LanguageOption } from './Components/LanguageOption';
import { TabHeader } from './Components/TabHeader';

export const LanguageTab = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('french');
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  const languages = [
    {
      i18n: 'fr',
      name: 'Français',
      value: 'french',
      flagUrl: '../../../public/france.png',
    },
    {
      i18n: 'en',
      name: 'English',
      value: 'english',
      flagUrl: '../../../public/united-kingdom.png',
    },
  ];

  return (
    <>
      <TabHeader i18nKey="settings.languagesTab" />
      <ActionHeader i18nKey="settings.languages.selectLabel" />
      <div role="radiogroup" aria-orientation="vertical">
        {languages.map((language) => (
          <LanguageOption
            language={language}
            selectedLanguage={selectedLanguage}
            handleLanguageChange={handleLanguageChange}
          />
        ))}
      </div>
    </>
  );
};
