import { Dispatch } from 'react';

// Post Type
interface Post {
  id: string;
  name: string;
  title: string;
  content: string;

  // blog: {
  //   name: string;
  // };
  // date: Date;
  // note_count: number;
}

interface Props {
  dispatch: Dispatch<any>;
  posts: Post[];
  auth: Auth;
  user: User;
}

interface Auth {
  user: User;
  error: string;
  isLoggedIn: boolean;
  inProgress: boolean;
}

interface User {
  name: string;
  email: string;
  user_id: string;
  picture: string;
}

interface SignInProps {
  dispatch: Dispatch<any>;
  auth: Auth;
}

interface SignUpProps {
  dispatch: Dispatch<any>;
  auth: Auth;
}

export type { Post, Props, SignInProps, Auth, User, SignUpProps };
