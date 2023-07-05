import { UPDATE_POSTS } from '../actions/actionTypes';

interface Action {
  type: string;
  posts: [];
}

export default function posts(state = [], action: Action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;
    default:
      return state;
  }
}
