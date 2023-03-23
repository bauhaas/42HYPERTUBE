import { Trans, useTranslation } from 'react-i18next';

export const TabHeader = ({ i18nKey }) => {
  return (
    <h2 className="mb-5 text-2xl font-bold dark:text-light">
      <Trans i18nKey={i18nKey} />
    </h2>
  );
};
