import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Navbar, Login, SignUp, PageNotFound } from '.';
import { Props, Post, User } from './types';
import jwt_decode from 'jwt-decode';
import { authenticateUser } from '../actions/auth';

class App extends React.Component<Props> {
  componentDidMount(): void {
    const token = localStorage.getItem('token');

    if (token) {
      const user: User = jwt_decode(token);
      console.log('USER: ', user);
      this.props.dispatch(
        authenticateUser({
          id: user.user_id,
          email: user.email,
          name: user.name,
          picture: user.picture,
        })
      );
    }
  }
  render() {
    const props = this.props;
    return (
      <BrowserRouter>
        <>
          <Navbar {...props} />
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
