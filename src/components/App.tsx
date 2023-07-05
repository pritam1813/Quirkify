import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';

interface Props {
  dispatch: Dispatch<any>; 
  posts: [];
}

class App extends React.Component<Props> {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('Props: ', this.props);
    return <div>App</div>;
  }
}

function mapStateToProps(state: { posts: [] }) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
