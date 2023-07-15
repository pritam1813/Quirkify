import React from 'react';
import { connect } from 'react-redux';
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
  Alert,
} from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ThemeColors from '../assets/theme';
import { Auth, SignUpProps } from './types';
import { clearAuthState, signup } from '../actions/auth';

interface SignUpState {
  firstName: '';
  lastName: '';
  email: '';
  password: '';
}
class SignUp extends React.Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { firstName, lastName, email, password } = this.state;

    this.props.dispatch(signup(firstName, lastName, email, password));
  };

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
          main: ThemeColors.lightgreen,
        },
        secondary: {
          main: ThemeColors.orange,
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
            <Avatar sx={{ m: 1, bgcolor: ThemeColors.orange }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            {error && (
              <Alert sx={{ mt: 2 }} variant="outlined" severity="error">
                {error}
              </Alert>
            )}
            <Box
              component="form"
              noValidate
              onSubmit={this.handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      this.handleInputChange(event)
                    }
                    value={this.state.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      this.handleInputChange(event)
                    }
                    value={this.state.lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      this.handleInputChange(event)
                    }
                    value={this.state.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      this.handleInputChange(event)
                    }
                    value={this.state.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              {inProgress ? (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={inProgress}
                >
                  Signing Up ...
                </Button>
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              )}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    to={'/login'}
                    style={{ textDecoration: 'none', color: '#ba5902' }}
                  >
                    <Typography variant="body2">
                      Already have an account? Sign in
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
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

export default connect(mapStateToProps)(SignUp);
