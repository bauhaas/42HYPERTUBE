import { Trans, useTranslation } from 'react-i18next';

export const LanguageOption = ({
  language,
  selectedLanguage,
  handleLanguageChange,
}) => {
  return (
    <label key={language.i18n}>
      <div
        id={language.i18n}
        className=" mb-2 flex cursor-pointer items-center gap-2 rounded-md bg-mid p-2.5 hover:bg-mid-hover dark:bg-dark dark:hover:bg-dark-hover"
      >
        <input
          type="radio"
          id={language.i18n}
          name="language"
          value={language.i18n}
          checked={selectedLanguage === language.i18n}
          onChange={handleLanguageChange}
          className="cursor-pointer accent-black"
        />
        <div className="font-bold dark:text-light">{language.name}</div>
        <div className="ml-auto flex items-center gap-2">
          <div className="text-xs dark:text-light">
            <Trans i18nKey={`settings.languages.${language.value}`} />
          </div>
          <img src={language.flagUrl} alt={language.name} />
        </div>
      </div>
    </label>
  );
};
