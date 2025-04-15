import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Link, Box, Container, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '@mui/material/styles';
import { useThemeContext } from '../../Theme/ThemeContext';
import { HideOnScroll } from './ScrollTriggers/ScrollTriggers';

const Header = () => {
  const { toggleTheme, themeMode } = useThemeContext();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const menuItems = [
    { text: 'Home', href: '#' },
    { text: 'About Me', href: '#' },
    { text: 'Services', href: '#' },
    { text: 'Portfolio', href: '#' },
    { text: 'Contact Us', href: '#' },
  ];

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed">
          <Container>
            <Toolbar>
              <Box display="flex" alignItems="center" flexGrow={1}>
                <Typography variant="h6" noWrap component="div">
                  <Link href="/" color="inherit" underline="none">
                    Logo
                  </Link>
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
                  {menuItems.map((item) => (
                    <Link 
                      key={item.text} 
                      href={item.href} 
                      color='text.secondary' 
                      underline="none" 
                      mx={2}
                      sx={{
                        '&:hover': {
                          color: 'text.primary',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {item.text}
                    </Link>
                  ))}
                </Box>
              </Box>
              <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 1, zIndex: '1201' }}>
                {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
              <IconButton color="inherit" onClick={toggleDrawer} sx={{ display: { md: 'none' }, zIndex: '1201' }}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <Box sx={{ width: 250 }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} onClick={handleDrawerClose}>
                <ListItemText>
                  <Link 
                    href={item.href} 
                    color="inherit" 
                    underline="none"
                    sx={{
                      '&:hover': {
                        color: themeMode === 'light' ? 'primary.main' : 'secondary.main',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {item.text}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
