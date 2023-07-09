import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Navbar, PageNotFound } from '.';
import { Props, Post } from './types';

const Login = () => <div>Login</div>;

const Signup = () => <div>Signup</div>;

class App extends React.Component<Props> {
  render() {
    const props = this.props;
    return (
      <BrowserRouter>
        <>
          <Navbar />
          {/* <PostsList posts={posts} /> */}

          <Routes>
            <Route path="/" element={<Home {...props} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state: { posts: Post[] }) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
