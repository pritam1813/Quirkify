import { Dispatch } from 'react';

// Post Type
interface Post {
  id: string;
  body: string;
  blog: {
    name: string;
  };
  date: Date;
  note_count: number;
}

interface Props {
  dispatch: Dispatch<any>;
  posts: Post[];
}

interface Auth {
  user: {};
  error: string;
  isLoggedIn: boolean;
  inProgress: boolean;
}

interface SignInProps {
  dispatch: Dispatch<any>;
  auth: Auth;
}

export type { Post, Props, SignInProps, Auth };
