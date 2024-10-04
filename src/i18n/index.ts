import { use } from "i18next";
import { initReactI18next } from "react-i18next";

import resources from "./resources.json";

const i18next = use(initReactI18next);

i18next.init({
  resources,
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
