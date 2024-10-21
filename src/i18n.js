import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend'; // Importez le backend HTTP

// Initialisation d'i18next
i18n
  .use(HttpBackend) // Utilisez le backend pour charger les traductions
  .use(LanguageDetector) // Détection automatique de la langue
  .use(initReactI18next) // Passer i18n dans React
  .init({
    fallbackLng: 'en', // Langue par défaut si la langue détectée n'est pas disponible
    interpolation: {
      escapeValue: false, // React gère déjà l'échappement
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Chemin d'accès aux fichiers de traduction
    },
  });

export default i18n;
