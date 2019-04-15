import { 
  LOGIN_FAILED,
  REGISTER_FAILED,
  ACCOUNT_EXISTS
} from './actions';

export default (state = null, {type, payload}) => {
  switch(type) {
    case LOGIN_FAILED:
    case REGISTER_FAILED:
    case ACCOUNT_EXISTS:
      return payload;
    default:
      return state;
  }
}