import { Divider, Typography } from '@mui/material';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import ThemeColors from '../assets/theme';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Divider sx={{ my: 2 }} />
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
      </footer>
    );
  }
}
