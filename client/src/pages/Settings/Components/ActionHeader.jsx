import { Trans, useTranslation } from 'react-i18next';

export const ActionHeader = ({ i18nKey }) => {
  return (
    <h3 className="mb-2 text-xs font-bold uppercase tracking-tight dark:text-light">
      <Trans i18nKey={i18nKey} />
    </h3>
  );
};
