export const AUTH_SIGNIN = "AUTH_SIGNIN";
export const AUTH_SIGNOUT = "AUTH_SIGNOUT";

export const handleSignIn = (user) => ({
  type: AUTH_SIGNIN,
  user,
});

export const handleSignOut = () => ({
  type: AUTH_SIGNOUT,
});
