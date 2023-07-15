import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home, Navbar, Login, SignUp, PageNotFound, Settings } from '.';
import { Props, Post, User, Auth } from './types';
import jwt_decode from 'jwt-decode';
import { authenticateUser } from '../actions/auth';

interface ProtectedProps {
  isLoggedIn: boolean;
  children: ReactNode;
}

function Protected({ isLoggedIn, children }: ProtectedProps) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

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
    const { auth } = this.props;
    return (
      <BrowserRouter>
        <>
          <Navbar {...props} />
          {/* <PostsList posts={posts} /> */}

          <Routes>
            <Route path="/" element={<Home {...props} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/settings"
              element={
                <Protected isLoggedIn={auth.isLoggedIn}>
                  {' '}
                  <Settings />
                </Protected>
              }
            />
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state: { posts: Post[]; auth: Auth }) {
  return {
    posts: state.posts,
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(App);
