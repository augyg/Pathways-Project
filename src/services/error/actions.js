export const LOGIN_FAILED = 'error:loginFailed';
export const loginFailed = () => ({
  type: LOGIN_FAILED,
  payload: { message: 'Username or Password Invalid' }
})
