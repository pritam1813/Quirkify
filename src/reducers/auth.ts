import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
} from '../actions/actionTypes';

interface Action {
  type: String;
  user: {};
  error: String;
}

const initialAuthState = {
  user: {},
  error: null,
  isLoggedIn: false,
  inProgress: false,
};

export default function auth(state = initialAuthState, action: Action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        inProgress: false,
        isLoggedIn: true,
        error: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        inProgress: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
