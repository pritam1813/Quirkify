const API_ROOT = 'https://api.tumblr.com/v2';
const APIKEY = import.meta.env.VITE_API_KEY;

export const APIUrls = {
  login: () => `${API_ROOT}/login`, // Only For Example
  signup: () => `${API_ROOT}/signup`, // Only For Example

  fetchPosts: (limit: number = 3, blog_identifier: string = 'todayontumblr') =>
    `${API_ROOT}/blog/${blog_identifier}.tumblr.com/posts/text?api_key=${APIKEY}&limit=${limit}`,
};
