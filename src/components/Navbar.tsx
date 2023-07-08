import React, { MouseEvent } from 'react';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Avatar,
  styled,
  InputBase,
  alpha,
  Button,
} from '@mui/material';
import ThemeColors from '../assets/theme';
import SearchIcon from '@mui/icons-material/Search';

// Define the interface for the state of the Navbar component
interface NavbarState {
  anchorElNav: HTMLElement | null; // Element that triggers the navigation menu
  anchorElUser: HTMLElement | null; // Element that triggers the user menu
}

// Styles for the search bar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

// Styles for the search icon wrapper
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Styles for the input element of the search bar
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.between('sm', 'md')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '0ch',
      '&:focus': {
        width: '12ch',
      },
    },
    [theme.breakpoints.up('md')]: {
      width: '18ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

// Array of pages in the navbar
const pages = ['Register', 'Login'];

// Array of settings in the user menu
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

class Navbar extends React.Component<{}, NavbarState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      anchorElNav: null,
      anchorElUser: null,
    };
  }

  // Event handler for opening the navigation menu
  handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    this.setState({ anchorElNav: event.currentTarget });
  };

  // Event handler for opening the user menu
  handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    this.setState({ anchorElUser: event.currentTarget });
  };

  // Event handler for closing the navigation menu
  handleCloseNavMenu = () => {
    this.setState({ anchorElNav: null });
  };

  // Event handler for closing the user menu
  handleCloseUserMenu = () => {
    this.setState({ anchorElUser: null });
  };

  render() {
    const { anchorElUser } = this.state;

    return (
      <AppBar position="sticky" sx={{ backgroundColor: ThemeColors.green }}>
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            {/* Brand logo */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                justifyContent: 'center',
              }}
            >
              Quirkify
            </Typography>

            {/* Search bar (visible on small screens) */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Search id="search-bar">
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Box>

            {/* Brand logo (visible on small screens) */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                justifyContent: 'center',
              }}
            >
              Quirkify
            </Typography>
            <Box sx={{ flexGrow: 1 }} />

            {/* Search bar (visible on medium and large screens) */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Search id="search-bar">
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Box>

            {/* User menu and pages */}
            <Box sx={{ flexGrow: 0 }}>
              {/* User menu */}
              <Tooltip title="Open settings">
                <IconButton onClick={this.handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={this.handleCloseUserMenu}
              >
                {/* User menu items */}
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={this.handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>

              {/* Pages */}
              <Box component="span">
                {pages.map((page) => (
                  <Button key={page} sx={{ color: 'white' }}>
                    {page}
                  </Button>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}

export default Navbar;
