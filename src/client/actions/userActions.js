export const FETCH_USER_DATA = 'users:fetchUserData';
export const fetchUserData = () => async (dispatch, getState, api) => {
  //const res = await api.get('/fetch_user_info');
  const res = { user: {authID: 'abcd', name: 'Kyle'}}
  dispatch({
    type: FETCH_USER_DATA,
    payload: res
  })
};

export const RELEASE_USER_DATA = 'users:releaseUserData';
export const releaseUserData = () => async (dispatch, getState, api) => {
  const res = { user: null }
  dispatch({
    type: RELEASE_USER_DATA,
    payload: res
  })
}