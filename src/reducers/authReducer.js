import * as AuthActions from "../actions/authActions";

const initState = {
  user: {},
  signedIn: false,
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case AuthActions.AUTH_SIGNIN:
      return {
        ...state,
        user: {
          displayName: action.user.displayName,
          email: action.user.email,
          photoURL: action.user.photoURL,
          refreshToken: action.user.refreshToken,
          uid: action.user.uid,
        },
        signedIn: true,
      };
    case AuthActions.AUTH_SIGNOUT:
      return {
        ...state,
        user: {},
        signedIn: false,
      };

    default:
      return state;
  }
}
