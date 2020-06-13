import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
// Logger with default options
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
