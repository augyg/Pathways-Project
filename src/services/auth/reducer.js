import { 
  SET_USER_SESSION,
  END_USER_SESSION
} from '../user/actions';

import {
  SET_AUTH_STATE,
  CLEAR_AUTH_STATE
} from './actions';

export default (state = null, {type, payload}) => {
  switch(type) {
    case SET_AUTH_STATE:
      return {token: payload.token};
    case SET_USER_SESSION:
      return {state: payload.accountType};
    case END_USER_SESSION:
    case CLEAR_AUTH_STATE:
      return null;
    default:
      return state;
  }
}