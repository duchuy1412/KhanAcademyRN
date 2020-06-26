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
    "Sign in": "Sign in",
    "Sign up": "Sign up",
    "Sign out": "Sign out",
    "Language & Regions": "Language & Regions",
    "Download settings": "Download settings",
    titleWelcome1: "A world class education for anyone, anywhere. 100% free.",
    titleWelcome2:
      "We'll keep your progress in sync no matter \n what phone, device, or computer you're using.",
    "Continue with Google": "Continue with Google",
    "Continue with Facebook": "Continue with Facebook",
    "Sign up with email": "Sign up with email",
    "Already a user?": "Already a user?",
    OR: "OR",
    "Enter an email address": "Enter an email address",
    Password: "Password",
    titleSignUp: "Tell us a little bit about yourself to create your account.",
    "Full name": "Full name",
    "Confirm Password": "Confirm password",
    "Create new account": "Create new account",
    "Download settings": "Download settings",
    "Up next": "Up next",
    "Mastery Points": "Mastery Points",
    points: "points",
    "Email or password is incorrect": "Email or password is invalid format",
    Share: "Share",
    Transcript: "Transcript",
    "Part of lesson": "Part of lesson",
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
    "Sign out": "Đăng xuất",
    "Language & Regions": "Ngôn ngữ & khu vực",
    "Download settings": "Cài đặt tải xuống",
    titleWelcome1: "A world class education for anyone, anywhere. 100% free",
    titleWelcome2:
      "We'll keep your progress in sync no matter what phone, device, or computer you're using.",
    "Continue with Google": "Tiếp tục với Google",
    "Continue with Facebook": "Tiếp tục với Facebook",
    "Sign up with email": "Đăng ký với email",
    OR: "HOẶC",
    "Enter an email address": "Nhập địa chỉ email",
    Password: "Mật khẩu",
    titleSignUp: "Giới thiệu một số thông tin về bạn để tạo một tài khoản mới.",
    "Full name": "Họ và tên",
    "Confirm Password": "Confirm password",
    "Up next": "Tiếp theo",
    "Mastery Points": "Điểm thành thạo",
    points: "điểm",
    "Email or password is incorrect":
      "Email hoặc mật khẩu không đúng định dạng",
    Share: "Chia sẻ",
    Transcript: "Lời thoại",
    "Part of lesson": "Part of lesson",
  },
};

export default i18n;
