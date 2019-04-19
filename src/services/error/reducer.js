import { 
  LOGIN_FAILED,
  REGISTER_FAILED,
  ACCOUNT_EXISTS,
  CLEAR_ERROR
} from './actions';

export default (state = null, {type, payload}) => {
  switch(type) {
    case LOGIN_FAILED:
    case REGISTER_FAILED:
    case ACCOUNT_EXISTS:
      return payload;
    case CLEAR_ERROR:
      return null;
    default:
      return state;
  }
}