import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import {Home} from '@mui/icons-material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// User Defined Modules
import useStyles from '../utils/styles';
import { Work } from '@mui/icons-material';
import { Group } from '@mui/icons-material';
import { Phone } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';

const drawerWidth = 240;
const navItems = ['Home', 'Clients', 'About', 'Contact'];

function Navbar(props) {
  const theme = useTheme();
  const classes = useStyles();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);

    const urlPath = location.pathname;

    if(urlPath === '/') document.getElementById('homeBtnDrawer').style.color = "#d32f2f";
    else if(urlPath === '/clients') document.getElementById('clientsBtnDrawer').style.color = "#d32f2f";
    else if(urlPath === '/about') document.getElementById('aboutBtnDrawer').style.color = "#d32f2f";
    else if(urlPath === '/contact') document.getElementById('contactBtnDrawer').style.color = "#d32f2f";
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: "#efefef", height: "100%"}}>
      <Typography variant="h4" sx={{ my: 2, letterSpacing: "2px", fontWeight: "500", fontFamily: "Cabin" }}>
        MM<span className={classes.consulting}>C</span>
      </Typography>
      <Divider />
      <List sx={{display: "flex", flexDirection: "column"}}>
        <ListItem>
            <Button id='homeBtnDrawer' variant='contained' startIcon={<Home />} sx={{backgroundColor: "white", color: "black", fontFamily: "Cabin"}} href='/'>Home</Button>
        </ListItem>
        <ListItem>
            <Button id='clientsBtnDrawer' variant='contained' startIcon={<Work />} sx={{backgroundColor: "white", color: "black", fontFamily: "Cabin"}} href='/clients'>Clients</Button>
        </ListItem>
        <ListItem>
            <Button id='aboutBtnDrawer' variant='contained' startIcon={<Group />} sx={{backgroundColor: "white", color: "black", fontFamily: "Cabin"}} href='/about'>About Us</Button>
        </ListItem>
        <ListItem>
            <Button id='contactBtnDrawer' variant='contained' startIcon={<Phone />} sx={{backgroundColor: "white", color: "black", fontFamily: "Cabin"}} href='/contact'>Contact Us</Button>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

    React.useEffect(() => {
        const urlPath = location.pathname;
        if(urlPath === '/') document.getElementById('homeBtn').style.color = "#d32f2f";
        else if(urlPath === '/clients') document.getElementById('clientsBtn').style.color = "#d32f2f";
        else if(urlPath === '/about') document.getElementById('aboutBtn').style.color = "#d32f2f";
        else if(urlPath === '/contact') document.getElementById('contactBtn').style.color = "#d32f2f";
    },[]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor: "#607d8b"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, letterSpacing: "5px", fontWeight: "400", color: "black" }}
          >
            MM<span className={classes.consulting}>C</span>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button id='homeBtn' variant='contained' size={useMediaQuery(theme.breakpoints.down("md")) ? "small" : "medium"} startIcon={<Home />} sx={{backgroundColor: "#efefef", color: "black", marginRight: "10px"}} href='/'>Home</Button>
            <Button id='clientsBtn' variant='contained' size={useMediaQuery(theme.breakpoints.down("md")) ? "small" : "medium"} startIcon={<Work />} sx={{backgroundColor: "#efefef", color: "black", marginRight: "10px"}} href='/clients'>Clients</Button>
            <Button id='aboutBtn' variant='contained' size={useMediaQuery(theme.breakpoints.down("md")) ? "small" : "medium"} startIcon={<Group />} sx={{backgroundColor: "#efefef", color: "black", marginRight: "10px"}} href='/about'>About Us</Button>
            <Button id='contactBtn' variant='contained' size={useMediaQuery(theme.breakpoints.down("md")) ? "small" : "medium"} startIcon={<Phone />} sx={{backgroundColor: "#efefef", color: "black"}} href='/contact'>Contact Us</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
