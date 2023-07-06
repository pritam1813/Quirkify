import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { PostsList } from '.';

interface post {
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
  posts: [post];
}

class App extends React.Component<Props> {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        <PostsList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps(state: { posts: [post] }) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
