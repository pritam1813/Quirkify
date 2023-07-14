import { Dispatch } from 'redux';
import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from './actionTypes';
import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';

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
