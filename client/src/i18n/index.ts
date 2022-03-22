import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { hu } from "./locales";
// the translations
const resources = {
  hu: {
    translation: hu,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "hu",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
