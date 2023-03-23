import { Trans, useTranslation } from 'react-i18next';

export const ThirdPartyButton = ({
  provider,
  syncWith3rdParty,
  IconComponent,
  disabled,
}) => {
  return (
    <button
      key={provider}
      disabled={disabled}
      className="flex h-12 w-12 items-center justify-center rounded-lg bg-light-hover hover:bg-light focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-blue-500 disabled:pointer-events-none disabled:opacity-25 dark:bg-mid-hover dark:hover:bg-mid"
      onClick={() => syncWith3rdParty(provider)}
    >
      <IconComponent className={`h-8 w-8 dark:text-light`} />
    </button>
  );
};
