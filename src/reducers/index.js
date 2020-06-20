import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import lessonReducer from "./lessonReducer";

export default combineReducers({
  courseReducer,
  lessonReducer,
});
