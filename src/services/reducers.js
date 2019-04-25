import {combineReducers} from 'redux';
import user from './user/reducer';
import error from './error/reducer';
import auth from './auth/reducer';

export default combineReducers({
  auth, user, error
});