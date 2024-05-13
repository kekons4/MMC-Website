import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, ButtonGroup, createTheme} from '@mui/material';
import useStyles from "../utils/styles";

function Navbar() {
    const classes = useStyles();
    
    return(
        <AppBar position='fixed'>
            <div className={classes.appbar}>
                <Toolbar>
                    <Typography variant='h3' color='black' sx={{ letterSpacing: 3 }}>
                        MM
                    </Typography>
                    <Typography color="error" variant='h3'>C</Typography>
                </Toolbar>
            </div>
        </AppBar>
    );
}

export default Navbar;