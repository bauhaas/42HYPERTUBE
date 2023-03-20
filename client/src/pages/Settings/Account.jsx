import { Trans, useTranslation } from 'react-i18next';

export const AccountTab = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="font-bold">
        <Trans i18nKey="settings.accountTab" />
      </h2>
    </>
  );
};
