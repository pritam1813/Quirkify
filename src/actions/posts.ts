import { APIUrls } from '../helpers/urls';
import { UPDATE_POSTS } from './actionTypes';

interface Action {
  type: string;
  posts: [];
}

export function fetchPosts() {
  return (dispatch: (action: Action) => void) => {
    const url = APIUrls.fetchPosts();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('DATA ', data);
        dispatch(updatePosts(data.response.posts));
      });
  };
}

export function updatePosts(posts: []) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
