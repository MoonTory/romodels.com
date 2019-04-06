import { AUTH_LOGIN, AUTH_REGISTER, AUTH_LOGIN_ERROR, AUTH_REGISTER_ERROR } from '../types';
import axios from '../../../axios';

export const loginUser = payload => async dispatch => {
  try {
    // console.log('LOGIN_USER ACTION');
    const res = await axios.post('/login', payload);

    // console.log('res', res);

    dispatch({
      type: AUTH_LOGIN,
      payload: res.data.payload.token
    });
  } catch (error) {
    // console.log('error.response', error.response);
    if (error.response) {
      if (error.response.data === 'Unauthorized') {
        dispatch({
          type: AUTH_LOGIN_ERROR,
          payload: 'Incorrect Username/Password'
        });
      } else {
        dispatch({
          type: AUTH_LOGIN_ERROR,
          payload: error.response.data.payload.message
        });
      }
    } else {
      dispatch({
        type: AUTH_LOGIN_ERROR,
        payload: 'Something went wrong! Try again later'
      });
    }
  }
};

export const registerUser = payload => async dispatch => {
  try {
    // console.log('AUTH_REGISTER ACTION');
    const res = await axios.post('/register', payload);

    // console.log('res', res);

    dispatch({
      type: AUTH_REGISTER,
      payload: res.data.payload.message
    });
  } catch (error) {
    if (error.response) {
      // console.log('error.response', error.response);
      dispatch({
        type: AUTH_REGISTER_ERROR,
        payload: error.response.data.payload.message
      });
    } else {
      dispatch({
        type: AUTH_REGISTER_ERROR,
        payload: 'Something went wrong! Please try again later!'
      });
    }
  }
};
