import { Trans, useTranslation } from 'react-i18next';

export const AccountTab = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="font-bold dark:text-light">
        <Trans i18nKey="settings.accountTab" />
      </h2>
      <h3 className="dark:text-light">Mot de passe</h3>

      <div class="border-t-2 border-gray-500"></div>
      <div id="section">
        <h3 className="mb-2 text-xs font-bold uppercase tracking-tight dark:text-light">
          Suppresion du compte
        </h3>
        <div className="flex flex-col">
          <div className="mb-4 text-sm dark:text-light">
            desactiver ton compte signifie que tu pourras le recuperer a tout
            moment apres sa desactivation
          </div>
          <div className="flex gap-4">
            <button className="rounded-lg bg-red-500 p-2 dark:text-light">
              desactiver le compte
            </button>
            <button className="rounded-lg border-2 border-red-500 p-2 dark:text-light">
              supprimer le compte
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
