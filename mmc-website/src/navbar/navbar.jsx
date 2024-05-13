import { useState } from 'react';
import {Typography, AppBar, Toolbar, Box, Container, Button, ButtonGroup, createTheme, MenuItem, Menu, Link} from '@mui/material';
import useStyles from "../utils/styles";

function Navbar() {
    const classes = useStyles();

    const [anchorElNav, setAnchorElNav] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return(
        <Box>
            <AppBar position="static" sx={{backgroundColor: "#607d8b"}}>
                <Toolbar>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1, marginLeft: "2rem", letterSpacing: "5px" }} color="black">
                        MM<span className={classes.consulting}>C</span>
                    </Typography>
                    <Box sx={{marginRight: "10rem", color: "black"}}>
                        <Link href="/clients" color="inherit" underline='none' sx={{ fontSize: "20px", fontWeight: "500", marginLeft: "20px"}}>Clients</Link>
                        <Link href="/clients" color="inherit" underline='none' sx={{ fontSize: "20px", fontWeight: "500", marginLeft: "20px"}}>About Us</Link>
                        <Link href="/clients" color="inherit" underline='none' sx={{ fontSize: "20px", fontWeight: "500", marginLeft: "20px"}}>Contact Us</Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;