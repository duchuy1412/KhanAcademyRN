import * as Localization from "expo-localization";
import i18n from "i18n-js";
// Set the key-value pairs for the different languages you want to support.
i18n.locale = Localization.locale;
i18n.fallbacks = true;

i18n.translations = {
  en: { cancel: "Cancle" },
  vi: { cancel: "Huỷ" },
};

export default i18n;
