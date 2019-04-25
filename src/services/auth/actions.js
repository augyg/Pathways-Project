export const SET_AUTH_STATE = 'auth:setAuthState';
export const setAuthState = (auth) => ({
  type: SET_AUTH_STATE,
  payload: {auth}
})

export const CLEAR_AUTH_STATE = 'auth:clearAuthState';
export const clearAuthState = () => ({
  type: CLEAR_AUTH_STATE
})