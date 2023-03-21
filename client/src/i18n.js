import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          settings: {
            appSettingsLabel: 'app settings',
            userSettingsLabel: 'user settings',
            accountTab: 'My account',
            connectionsTab: 'Connections',
            languagesTab: 'Languages',
            apparencesTab: 'Appearences',
            logout: 'Logout',
            connections: {
              addAccountLabel: 'Add account to your profile',
              addAccountDesc:
                'This information will not be shared outside of Hypertube without your permission.',
              displayToProfileLabel: 'Display to my profile',
            },
            languages: {
              selectLabel: 'Select a language',
              english: 'English',
              french: 'French',
            },
            account: {
              passwordButton: 'Change password',
              passwordLabel: 'password',
              deleteAccountLabel: 'account deletion',
              deleteAccountDesc:
                "Desactivate your account means that you will be able to take it back after it's desactivation.",
              deleteButton: 'Delete account',
              desactivateButton: 'Desactivate account',
              firstNameLabel: 'first name',
              lastNameLabel: 'last name',
              emailLabel: 'e-mail',
              modify: 'Modify',
            },
            apparences: {
              accentColorLabel: 'choose your accent color',
              themeLabel: 'choose your theme',
              darkModeLabel: 'Dark mode',
              lightModeLabel: 'Light mode',
            },
          },
        },
      },
      fr: {
        translation: {
          settings: {
            appSettingsLabel: "parametres de l'appli",
            userSettingsLabel: 'parametres utilisateur',
            accountTab: 'Mon compte',
            connectionsTab: 'Connexions',
            languagesTab: 'Langues',
            apparencesTab: 'Apparences',
            logout: 'Deconnexion',
            connections: {
              addAccountLabel: 'Ajouter des comptes au profil',
              addAccountDesc:
                "Cette inforation ne sera pas partagee en dehors d'Hypertube sans ta permission",
              displayToProfileLabel: 'Afficher sur mon profil',
            },
            languages: {
              selectLabel: 'Selectionne une langue',
              english: 'Anglais',
              french: 'Français',
            },
            account: {
              passwordButton: 'Changer le mot de passe',
              passwordLabel: 'mot de passe',
              deleteAccountLabel: 'Supprimer le compte',
              deleteAccountDesc:
                'Desactiver ton compte signifie que tu pourras le recuperer a tout moment apres sa desactivation.',
              deleteButton: 'Supprimer le compte',
              desactivateButton: 'Desactiver le compte',
              firstNameLabel: 'Prenom',
              lastNameLabel: 'Nom',
              emailLabel: 'e-mail',
              modify: 'Modifier',
            },
            apparences: {
              accentColorLabel: 'Selectionne ta couleur secondaire',
              themeLabel: 'Selectionne ton theme',
              darkModeLabel: 'Mode sombre',
              lightModeLabel: 'Mode clair',
            },

            // here we will place our translations...
          },
        },
      },
    },
  });

export default i18n;
