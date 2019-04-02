import {combineReducers} from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';

export default combineReducers({
  user: userReducer,
  auth: authReducer,
  error: (state = null, {type, payload}) => {
    switch(type) {
      case "LOGIN_FAILED":
        return payload;
      default:
        return state;
    }
  }
})
