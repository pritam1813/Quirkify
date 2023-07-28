import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { Home, Navbar, Login, SignUp, PageNotFound, Settings, Footer } from '.';
import { Props, Post, User, Auth } from './types';
import jwt_decode from 'jwt-decode';
import { authenticateUser } from '../actions/auth';

interface ProtectedProps {
  isLoggedIn: boolean;
  path: string;
  element: React.ReactElement;
}

const LoginWrapper = () => {
  const location = useLocation();
  return <Login location={location} />;
};

const ProtectedRoutes: React.FC<ProtectedProps> = ({ isLoggedIn, element }) => {
  const location = useLocation();

  return isLoggedIn ? (
    element
  ) : (
    <Navigate
      to={{ pathname: '/login' }}
      replace
      state={{ from: { pathname: location.pathname } }}
    />
  );
};

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
            <Route path="/login" element={<LoginWrapper />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/settings"
              element={
                <ProtectedRoutes
                  path="/settings"
                  element={<Settings />}
                  isLoggedIn={auth.isLoggedIn}
                />
              }
            />
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
          <Footer />
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
