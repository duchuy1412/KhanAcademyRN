import * as UserActions from "../actions/userActions";

const initState = {
  bookmarks: [],
  recentLessons: [],
};

export default function updateBookmark(state = initState, action) {
  switch (action.type) {
    case UserActions.UPDATE_BOOKMARK:
      return {
        ...state,
        bookmarks: action.data,
      };
    default:
      return state;
  }
}
