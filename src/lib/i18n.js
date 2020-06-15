import * as Localization from "expo-localization";
import i18n from "i18n-js";
// Set the key-value pairs for the different languages you want to support.
// i18n.locale = Localization.locale;
i18n.locale = "en"; // change to vi if need to use Vietnamese

i18n.fallbacks = true;

i18n.translations = {
  en: {
    Cancel: "Cancel",
    Edit: "Edit",
    Home: "Home",
    Search: "Search",
    Bookmarks: "Bookmarks",
    Settings: "Settings",
    "My courses": "My courses",
    "Recent lessons": "Recent lessons",
    "Browse Khan Academy": "Browse Khan Academy",
  },
  vi: {
    Cancel: "Huỷ",
    Edit: "Sửa",
    Home: "Trang chủ",
    Search: "Tìm kiếm",
    Bookmarks: "Đánh dấu",
    Settings: "Cài đặt",
    "My courses": "Khoá học của tôi",
    "Browse Khan Academy": "Lựa chọn chủ đề",
  },
};

export default i18n;
