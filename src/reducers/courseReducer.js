import {
  FETCH_COURSES_BEGIN,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
} from "../actions/courseActions";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSES_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_COURSES_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        items: action.payload.courses,
      };

    case FETCH_COURSES_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
