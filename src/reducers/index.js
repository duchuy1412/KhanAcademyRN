import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import lessonReducer from "./lessonReducer";
import authReducer from "./authReducer";
export default combineReducers({
  courseReducer,
  lessonReducer,
  authReducer,
});
