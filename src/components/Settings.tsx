import React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import ThemeColors from '../assets/theme';
import { Link } from 'react-router-dom';
import { Auth, SettingsProps } from './types';
import { connect } from 'react-redux';

interface SettingsState {
  name: '';
  email: '';
  password: '';
  confirmPassword: '';
  editMode: false;
}

class Settings extends React.Component<SettingsProps, SettingsState> {
  constructor(props: SettingsProps) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      editMode: false,
    };
  }
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
    const { user } = this.props.auth;
    const { editMode } = this.state;
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
            <Typography component="h1" variant="h5">
              Profile
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://pub-a97d073ded0a4120985495569ad8bd03.r2.dev/defaultAvatar.webp"
              sx={{ width: 56, height: 56 }}
            />
            {/* 
            {error && (
              <Alert sx={{ mt: 2 }} variant="outlined" severity="error">
                {error}
              </Alert>
            )} */}
            <Box
              component="form"
              // onSubmit={this.handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                disabled={!editMode}
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                // inputRef={this.state.emailInputRef}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  this.handleInputChange(event)
                }
                value={editMode ? this.state.name : user.name}
              />

              <TextField
                disabled={!editMode}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                // inputRef={this.state.emailInputRef}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  this.handleInputChange(event)
                }
                value={editMode ? this.state.email : user.email}
              />
              <TextField
                disabled={!editMode}
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
              {editMode && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirm-password"
                  label="Confirm Password"
                  type="password"
                  id="confirm-password"
                  autoComplete="current-password"
                  //inputRef={this.state.passwordInputRef}
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              )}

              {editMode ? (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Save
                </Button>
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Edit Profile
                </Button>
              )}

              {editMode && (
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Go Back
                </Button>
              )}
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

export default connect(mapStateToProps)(Settings);
