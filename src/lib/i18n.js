import * as Localization from "expo-localization";
import i18n from "i18n-js";
// Set the key-value pairs for the different languages you want to support.
// i18n.locale = Localization.locale;
i18n.locale = "vi"; // change to vi if need to use Vietnamese

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
    "Sign in": "Sign in",
    "Sign up": "Sign up",
    "Language & Regions": "Language & Regions",
    "Download settings": '"Download settings',
    "Up next": "Up next",
    "Mastery Points": "Mastery Points",
  },
  vi: {
    Cancel: "Huỷ",
    Edit: "Sửa",
    Home: "Trang chủ",
    Search: "Tìm kiếm",
    Bookmarks: "Đánh dấu",
    Settings: "Cài đặt",
    "My courses": "Khoá học của tôi",
    "Recent lessons": "Khoá học gần đây",
    "Browse Khan Academy": "Lựa chọn chủ đề",
    "Sign in": "Đăng nhập",
    "Sign up": "Đăng ký",
    "Language & Regions": "Ngôn ngữ & khu vực",
    "Download settings": "Cài đặt tải xuống",
    "Up next": "Tiếp theo",
    "Mastery Points": "Điểm thành thạo",
  },
};

export default i18n;
