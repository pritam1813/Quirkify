import React from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  ThemeProvider,
  Alert,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme } from '@mui/material/styles';
import ThemeColors from '../assets/theme';
import { clearAuthState, login } from '../actions/auth';
import { SignInProps, Auth } from './types';

interface SignInState {
  // emailInputRef: RefObject<HTMLInputElement>;
  // passwordInputRef: RefObject<HTMLInputElement>;
  email: '';
  password: '';
}

class SignIn extends React.Component<SignInProps, SignInState> {
  constructor(props: SignInProps) {
    super(props);
    this.state = {
      // emailInputRef: React.createRef<HTMLInputElement>(),
      // passwordInputRef: React.createRef<HTMLInputElement>(),
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { email, password } = this.state;

    this.props.dispatch(login(email, password));
    // console.log("Email: ", this.state.emailInputRef.current?.value);
    // console.log("Password", this.state.passwordInputRef.current?.value);
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  render() {
    const defaultTheme = createTheme({
      palette: {
        primary: {
          main: ThemeColors.orange,
        },
        secondary: {
          main: ThemeColors.green,
          light: ThemeColors.lightgreen,
        },
      },
    });

    const { error, inProgress, isLoggedIn } = this.props.auth;

    if (isLoggedIn) {
      return <Navigate to="/" />;
    }

    return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ mt: 1, bgcolor: 'secondary.light' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {error && (
              <Alert sx={{ mt: 2 }} variant="outlined" severity="error">
                {error}
              </Alert>
            )}
            <Box
              component="form"
              onSubmit={this.handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                // inputRef={this.state.emailInputRef}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  this.handleInputChange(event)
                }
                value={this.state.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                //inputRef={this.state.passwordInputRef}
                value={this.state.password}
                onChange={this.handleInputChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {inProgress ? (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={inProgress}
                >
                  Signing In ...
                </Button>
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              )}
              <Grid container>
                <Grid item xs>
                  <Link
                    to="/"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to="/"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 8, mb: 4 }}
          >
            {'Copyright © '}
            <Link
              style={{
                color: ThemeColors.green,
                textDecoration: 'none',
              }}
              to="/"
            >
              Quirkify
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Container>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state: { auth: Auth }) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(SignIn);
