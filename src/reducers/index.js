import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import lessonReducer from "./lessonReducer";
import authReducer from "./authReducer";
import questionReducer from "./questionReducer";
import userReducer from "./userReducer";

export default combineReducers({
  courseReducer,
  lessonReducer,
  authReducer,
  questionReducer,
  userReducer,
});
