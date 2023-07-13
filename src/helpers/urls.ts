//const API_ROOT = 'https://api.tumblr.com/v2';
//const APIKEY = import.meta.env.VITE_API_KEY;
const API_ROOT = 'http://localhost:3000';

export const APIUrls = {
  login: () => 'http://localhost:3000/login', // Only For Example
  signup: () => `${API_ROOT}/signup`, // Only For Example

  // fetchPosts: (limit: number = 5, blog_identifier: string = 'todayontumblr') =>
  //   `${API_ROOT}/blog/${blog_identifier}.tumblr.com/posts/text?api_key=${APIKEY}&limit=${limit}`,

  fetchPosts: () => `${API_ROOT}/post`,
};
