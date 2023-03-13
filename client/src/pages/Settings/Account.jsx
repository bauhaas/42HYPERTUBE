import { Trans, useTranslation } from 'react-i18next';

import Avatar from '../../components/Avatar';

export const AccountTab = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="font-bold dark:text-light">
        <Trans i18nKey="settings.accountTab" />
      </h2>
      <div className="relative mb-4 mt-16 flex flex-col gap-4 rounded-md bg-mid p-4 pt-24 dark:bg-dark">
        <button className="absolute -top-10 w-fit rounded-full border-8 border-mid dark:border-dark">
          <Avatar
            imageAttribute={'h-24 w-24 rounded-full'}
            imagePath="https://randomuser.me/api/portraits/men/75.jpg"
          />
        </button>

        <div className="flex pl-4">
          <div className="grow">
            <div className="text-xs font-bold uppercase tracking-tight dark:text-light">
              First name
            </div>
            <div className="dark:text-light">John</div>
          </div>
          <button className="my-1 rounded-md bg-light-hover py-0.5 px-4 hover:bg-light dark:bg-mid dark:hover:bg-mid-hover">
            Modifier
          </button>
        </div>
        <div className="flex pl-4">
          <div className="grow">
            <div className="text-xs font-bold uppercase tracking-tight dark:text-light">
              last name
            </div>
            <div className="dark:text-light">Doe</div>
          </div>
          <button className="my-1 rounded-md bg-light-hover py-0.5 px-4 hover:bg-light dark:bg-mid dark:hover:bg-mid-hover">
            Modifier
          </button>
        </div>
        <div className="flex pl-4">
          <div className="grow">
            <div className="text-xs font-bold uppercase tracking-tight dark:text-light">
              e-mail
            </div>
            <div className="dark:text-light">john.doe@example.com</div>
          </div>
          <button className="my-1 rounded-md bg-light-hover py-0.5 px-4 hover:bg-light dark:bg-mid dark:hover:bg-mid-hover">
            Modifier
          </button>
        </div>
      </div>
      <div class="my-2 border-t-2 border-mid dark:border-light"></div>
      <h3 className="text-xs font-bold uppercase tracking-tight dark:text-light">
        Mot de passe
      </h3>
      <button className="mt-4 mb-7 rounded-md bg-brand px-4 py-1 hover:bg-brand-hover">
        <div className="dark:text-light">Changer le mot de passe</div>
      </button>
      <div class="my-2 border-t-2 border-mid dark:border-light"></div>
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
