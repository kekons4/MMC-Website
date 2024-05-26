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
import MenuIcon from '@mui/icons-material/Menu';
import {Home} from '@mui/icons-material';
import { Work } from '@mui/icons-material';
import { Group } from '@mui/icons-material';
import { Phone } from '@mui/icons-material';
import { useTheme } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// User Defined Modules
import useStyles from '../utils/styles';
import NavbarButtonDrawer from '../Components/styledButtons';
import NavbarButton from '../Components/styledButtons';

const drawerWidth = 240;

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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: "#2D3E4E", height: "100%"}}>
      <Typography variant="h4" sx={{ my: 2, letterSpacing: "2px", fontWeight: "500", fontFamily: "Cabin", color: "#E8ECEB" }}>
        MM<span className={classes.consulting}>C</span>
      </Typography>
      <Divider />
      <List sx={{display: "flex", flexDirection: "column"}}>
        <ListItem>
            <NavbarButtonDrawer props={{text: "Home", href: "/", startIcon: <Home />, id: "homeBtnDrawer"}}></NavbarButtonDrawer>
        </ListItem>
        <ListItem>
            <NavbarButtonDrawer props={{text: "Clients", href: "/clients", startIcon: <Work />, id: "clientsBtnDrawer"}}></NavbarButtonDrawer>
        </ListItem>
        <ListItem>
            <NavbarButtonDrawer props={{text: "About Us", href: "/about", startIcon: <Group />, id: "aboutBtnDrawer"}}></NavbarButtonDrawer>
        </ListItem>
        <ListItem>
            <NavbarButtonDrawer props={{text: "Contact Us", href: "/contact", startIcon: <Phone />, id: "contactBtnDrawer"}}></NavbarButtonDrawer>
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
      <AppBar component="nav" sx={{backgroundColor: "#2D3E4E"}}>
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
            sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'block' }, flexDirection: "row", alignItems: "center", justifyContent: "center", letterSpacing: "5px", fontWeight: "600", color: "E8ECEB", fontFamily: "Cabin" }}
          >
            MM<span className={classes.consulting}>C</span>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <NavbarButton props={{text: "Home", href: "/", startIcon: <Home />, id: "homeBtn"}}></NavbarButton>
            <NavbarButton props={{text: "Clients", href: "/clients", startIcon: <Work />, id: "clientsBtn"}}></NavbarButton>
            <NavbarButton props={{text: "About Us", href: "/about", startIcon: <Group />, id: "aboutBtn"}}></NavbarButton>
            <NavbarButton props={{text: "Contact Us", href: "/contact", startIcon: <Phone />, id: "contactBtn"}}></NavbarButton>
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
