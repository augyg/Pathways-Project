export const SET_USER_SESSION = "user:setUserSession";
export const setUserSession = (user) => ({
  type: SET_USER_SESSION,
  payload: {user}
});

export const END_USER_SESSION = 'user:endUserSession';
export const endUserSession = () => ({
  type: END_USER_SESSION
})