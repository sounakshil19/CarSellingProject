import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { profile_pic } from '../API/endpoints/endpoints';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux Toolkit/Slice/AuthSlice';

const pages = ['home','products','about', 'Create'];
const settings = ['Profile', 'Logout'];

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isloggedin = useSelector((state) => state.isloggedin);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    if (setting === "Logout") {
      dispatch(logout());
      navigate("/login");
    }
    setAnchorElUser(null);
  };

  return (
    <>
     <AppBar position="fixed" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', boxShadow: 'none' }}>
  <Container maxWidth="xl">
    <Toolbar disableGutters>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
      
      >
        <img   style={{
          height:"60px"
        }} src="https://brotomotiv.in/wp-content/uploads/2021/12/logo-brotomotive.png" alt="" />
        
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="menu"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={`/${page.toLowerCase()}`}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

     

      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}> {/* Centering the buttons */}
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              color: 'white',
              display: 'block',
              '&:hover': { 
                backgroundColor: 'rgba(255, 255, 255, 0)',
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'orange',
                  transition: 'width 0.3s ease-in-out', // Animation effect
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                },
              },
              position: 'relative',
              '&::after': {
                content: '""',
                display: 'block',
                width: 0,
                height: '2px',
                backgroundColor: 'orange',
                transition: 'width 0.3s ease-in-out',
                position: 'absolute',
                bottom: 0,
                left: 0,
              },
            }}
            component={Link}
            to={`/${page.toLowerCase()}`}
          >
            {page}
          </Button>
        ))}
      </Box>

      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar src={isloggedin ? profile_pic(localStorage.getItem("profile")) : null} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem
              key={setting}
              onClick={() => handleCloseUserMenu(setting)}
              component={Link}
              to={`/${setting.toLowerCase()}`}
            >
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Toolbar>
  </Container>
</AppBar>


      <Outlet />
    </>
  );
}

export default Header;

