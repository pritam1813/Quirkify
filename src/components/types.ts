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

export type { Post, Props };
