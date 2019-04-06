import { combineReducers } from 'redux';
import AuthReducer from './auth';

export const rootReducer = combineReducers({
  auth: AuthReducer
});
