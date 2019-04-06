import { AUTH_LOGIN, AUTH_REGISTER, AUTH_LOGIN_ERROR, AUTH_REGISTER_ERROR } from '../../actions/types';

const initialSate = {
  isAuthenticated: false,
  token: '',
  registerError: '',
  loginError: '',
  successMessage: ''
};

export default function(state = initialSate, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      // console.log('AUTH_LOGIN REDUCER');
      return {
        isAuthenticated: true,
        token: action.payload,
        loginError: ''
      };
    case AUTH_LOGIN_ERROR:
      // console.log('AUTH_LOGIN_ERROR REDUCER');
      return {
        loginError: action.payload
      };
    case AUTH_REGISTER:
      // console.log('AUTH_REGISTER REDUCER');
      return {
        successMessage: action.payload,
        registerError: ''
      };
    case AUTH_REGISTER_ERROR:
      // console.log('AUTH_REGISTER_ERROR REDUCER');
      return {
        registerError: action.payload
      };
    default:
      return state;
  }
}
