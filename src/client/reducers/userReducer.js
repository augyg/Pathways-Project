import { FETCH_USER_DATA, RELEASE_USER_DATA } from '../actions/userActions';

export default (state = [], {type, payload}) => {
  switch(type) {
    case FETCH_USER_DATA:
      return payload.user;
    case RELEASE_USER_DATA:
      return payload.user;
    default:
      return state;
  }
}