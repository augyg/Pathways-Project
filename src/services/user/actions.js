export const SET_USER_SESSION = "auth:setUserSession";
export const setUserSession = (token, user) => ({
  type: SET_USER_SESSION,
  payload: {token, user}
});

export const END_USER_SESSION = 'auth:endUserSession';
export const endUserSession = () => ({
  type: END_USER_SESSION
})