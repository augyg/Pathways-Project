import { 
  LOGIN_FAILED
} from './actions';

export default (state = null, {type, payload}) => {
  switch(type) {
    case LOGIN_FAILED:
      return payload;
    default:
      return state;
  }
}