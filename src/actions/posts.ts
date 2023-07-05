import { UPDATE_POSTS } from './actionTypes';

interface Action {
  type: string;
  posts: [];
}

export function fetchPosts() {
  return (dispatch: (action: Action) => void) => {
    const APIKEY = import.meta.env.VITE_API_KEY;
    const url = `https://api.tumblr.com/v2/blog/todayontumblr.tumblr.com/posts/text?api_key=${APIKEY}&limit=3`;
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
