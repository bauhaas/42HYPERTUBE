import { Trans, useTranslation } from 'react-i18next';

import Avatar from '../../components/Avatar';
import { ActionHeader } from './Components/ActionHeader';
import { TabHeader } from './Components/TabHeader';

export const AccountTab = () => {
  const { t } = useTranslation();

  return (
    <>
      <TabHeader i18nKey="settings.accountTab" />
      <div className="mt-4 mb-4 flex flex-col rounded-md bg-slate-300">
        <div className="h-24 rounded-t-md bg-light-focus"></div>
        <div className="relative  flex flex-col gap-4 rounded-b-md bg-mid p-4 pt-24 dark:bg-dark">
          <div className="absolute -top-10 flex flex-row">
            <button className=" w-fit rounded-full border-8 border-mid dark:border-dark">
              <Avatar
                imageAttribute={'h-24 w-24 rounded-full'}
                imagePath="https://randomuser.me/api/portraits/men/75.jpg"
              />
            </button>
            <div className="self-center p-1 font-bold dark:text-light">
              John Doe
            </div>
          </div>

          <div className="flex pl-4">
            <div className="grow">
              <div className="text-xs font-bold uppercase tracking-tight dark:text-light">
                <Trans i18nKey="settings.account.firstNameLabel" />
              </div>
              <div className="dark:text-light">John</div>
            </div>
            <button className="my-1 rounded-md bg-light-hover py-0.5 px-4 hover:bg-light dark:bg-mid dark:text-light dark:hover:bg-mid-hover">
              <Trans i18nKey="settings.account.modify" />
            </button>
          </div>
          <div className="flex pl-4">
            <div className="grow">
              <div className="text-xs font-bold uppercase tracking-tight dark:text-light">
                <Trans i18nKey="settings.account.lastNameLabel" />
              </div>
              <div className="dark:text-light">Doe</div>
            </div>
            <button className="my-1 rounded-md bg-light-hover py-0.5 px-4 hover:bg-light dark:bg-mid dark:text-light dark:hover:bg-mid-hover">
              <Trans i18nKey="settings.account.modify" />
            </button>
          </div>
          <div className="flex pl-4">
            <div className="grow">
              <div className="text-xs font-bold uppercase tracking-tight dark:text-light">
                <Trans i18nKey="settings.account.emailLabel" />
              </div>
              <div className="dark:text-light">john.doe@example.com</div>
            </div>
            <button className="my-1 rounded-md bg-light-hover py-0.5 px-4 hover:bg-light dark:bg-mid dark:text-light dark:hover:bg-mid-hover">
              <Trans i18nKey="settings.account.modify" />
            </button>
          </div>
        </div>
      </div>

      <div class="my-2 border-t-2 border-mid dark:border-light"></div>
      <ActionHeader i18nKey="settings.account.passwordLabel" />
      <button className="mt-4 mb-7 rounded-md bg-brand px-4 py-2 hover:bg-brand-hover">
        <div className="dark:text-light">
          {' '}
          <Trans i18nKey="settings.account.passwordButton" />
        </div>
      </button>
      <div class="my-2 border-t-2 border-mid dark:border-light"></div>
      <div id="section">
        <ActionHeader i18nKey="settings.account.deleteAccountLabel" />
        <div className="flex flex-col">
          <div className="mb-4 text-sm dark:text-light">
            <Trans i18nKey="settings.account.deleteAccountDesc" />
          </div>
          <div className="flex gap-4">
            <button className="rounded-lg bg-red-500 py-2 px-4 hover:bg-red-600 dark:text-light">
              <Trans i18nKey="settings.account.desactivateButton" />
            </button>
            <button className="rounded-lg border-2 border-red-500 py-2 px-4 transition delay-150 ease-in-out hover:bg-red-500 dark:text-light ">
              <Trans i18nKey="settings.account.deleteButton" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
