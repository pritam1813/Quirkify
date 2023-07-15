import { Dispatch } from 'redux';
import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  AUTHENTICATE_USER,
  LOGOUT_USER,
  CLEAR_AUTH_STATE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
} from './actionTypes';
import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';

// Login Actions
export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginSuccess(user: {}) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function loginFailed(errorMessage: string) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}

// Signup Actions
export function startSignup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupSuccess(user: {}) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}

export function signupFailed(errorMessage: string) {
  return {
    type: SIGNUP_FAILED,
    error: errorMessage,
  };
}

export function login(email: string, password: string) {
  return (dispatch: Dispatch) => {
    dispatch(startLogin());
    const url = APIUrls.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          //Storing jwt token
          localStorage.setItem('token', data.token);
          //Dispatch action to save user
          dispatch(loginSuccess(data.user));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}

export function signup(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  return (dispatch: Dispatch) => {
    dispatch(startSignup());
    const url = APIUrls.signup();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ firstName, lastName, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          //Storing jwt token
          localStorage.setItem('token', data.token);
          //Dispatch action to save user
          dispatch(signupSuccess(data.user));
          return;
        }
        dispatch(signupFailed(data.message));
      });
  };
}

export function authenticateUser(user: {}) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

export function clearAuthState() {
  return {
    type: CLEAR_AUTH_STATE,
  };
}
