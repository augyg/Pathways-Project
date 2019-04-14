import {
  setUserSession,
  endUserSession
} from './actions';

import {loginFailed} from '../error/actions';
import cookie from 'react-cookies'

export const login = (data = null) => async (dispatch, getState, api) => { 
  let authToken = data.authToken;
  if(!authToken) {
    let response = await api.post('/login', { ...data });
    if(response.data.token) {
      authToken = response.data.token;
      cookie.save('authToken', authToken);
    } else {
      dispatch(loginFailed());
    }
  }

  let response = await api.post('/getUser', {token: authToken});
  if(response.data) {
    console.log(response.data);
    dispatch(setUserSession(authToken, response.data.user));
  } else {
    dispatch(loginFailed());
  }
};

export const logout = () => async (dispatch) => {
  cookie.remove('authToken');
  dispatch(endUserSession());
};