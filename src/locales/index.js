// vendors
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// locals
import en from './en.json';
import es from './es.json';

const resources = {
  en: { translation: en },
  es: { translation: es },
};

const config = {
  resources,
  lng: 'en',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(initReactI18next).init(config);

export default i18n;
