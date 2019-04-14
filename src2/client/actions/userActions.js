export const FETCH_USER_DATA = 'users:fetchUserData';
export const fetchUserData = (data) => async (dispatch, getState, api) => {
  const res = await api.post('/login', { ...data });
  if(res.data) {
    dispatch({
      type: FETCH_USER_DATA,
      payload: res
    })
  } else {
    dispatch({
      type: 'LOGIN_FAILED',
      payload: {message:'Username or Password Invalid'}
    })
  }
};

export const RELEASE_USER_DATA = 'users:releaseUserData';
export const releaseUserData = () => async (dispatch, getState, api) => {
  const res = { user: null }
  dispatch({
    type: RELEASE_USER_DATA,
    payload: res
  })
};