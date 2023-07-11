import { Dispatch } from 'redux';
import { LOGIN_START } from './actionTypes';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function login(email: string, password: string) {
  return (dispatch: Dispatch) => {
    const url = '';
    fetch(url);
  };
}
