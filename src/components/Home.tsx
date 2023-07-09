import { Component } from 'react';
import { PostsList } from '.';
import { Props } from './types';
import { fetchPosts } from '../actions/posts';

export default class Home extends Component<Props, {}> {
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
