import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
  marginLeft: theme => theme.spacing(2),
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
          >
            YourLogo
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <StyledLink to="/">
              <Button sx={{ mx: 2, color: 'white' }}>
                Home
              </Button>
            </StyledLink>
            <StyledLink to="/aboutus">
              <Button sx={{ mx: 2, color: 'white' }}>
                About Us
              </Button>
            </StyledLink>
            <StyledLink to="/programs">
              <Button sx={{ mx: 2, color: 'white' }}>
                Programs
              </Button>
            </StyledLink>
            <StyledLink to="/contactus">
              <Button sx={{ mx: 2, color: 'white' }}>
                Contact Us
              </Button>
            </StyledLink>
            <StyledLink to="/test">
              <Button sx={{ mx: 2, color: 'white' }}>
                Test
              </Button>
            </StyledLink>
          </Box>
        </Toolbar>
        {/* Responsive menu */}
        {menuOpen && (
          <Box sx={{ mt: 2 }}>
            <StyledLink to="/">
              <Button sx={{ mx: 2, color: 'white', display: 'block' }}>
                Home
              </Button>
            </StyledLink>
            <StyledLink to="/aboutus">
              <Button sx={{ mx: 2, color: 'white', display: 'block' }}>
                About Us
              </Button>
            </StyledLink>
            <StyledLink to="/programs">
              <Button sx={{ mx: 2, color: 'white', display: 'block' }}>
                Programs
              </Button>
            </StyledLink>
            <StyledLink to="/contactus">
              <Button sx={{ mx: 2, color: 'white', display: 'block' }}>
                Contact Us
              </Button>
            </StyledLink>
          </Box>
        )}
      </Container>
    </AppBar>
  );
};

export default Navbar;
