import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Navbar, Login, SignUp, PageNotFound } from '.';
import { Props, Post } from './types';
import jwt_decode from 'jwt-decode';

class App extends React.Component<Props> {
  componentDidMount(): void {
    const token = localStorage.getItem('token');

    if (token) {
      const user = jwt_decode(token);
      console.log('USER: ', user);
    }
  }
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
            <Route path="/signup" element={<SignUp />} />
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
