import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import { useEffect, useState } from "react";

const ko = require("./lang/lang.ko.json");
const en = require("./lang/lang.en.json");
const ja = require("./lang/lang.ja.json");
const zh = require("./lang/lang.zh.json");

// Set the key-value pairs for the different languages you want to support.
const i18n = new I18n({
  ko,
  en,
  ja,
  zh,
});

const deviceLanguage = getLocales()[0].languageCode;

export const useTranslation = () => {
  const [locale, setLocale] = useState(null);

  useEffect(() => {
    setLocale(deviceLanguage);
  }, []);

  return {
    setLocale,
    locale,
    t: (scope) => i18n.t(scope, { locale }),
  };
};
