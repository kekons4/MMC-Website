// import './App.css'
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, ButtonGroup, createTheme} from '@mui/material';
import useStyles from './utils/styles';

// User Defined modules
import Navbar from './navbar/navbar';


function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Navbar/>
      <main className={classes.container}>
        <Typography variant='h2' align='center' color="textPrimary" sx={{fontWeight: 400}} gutterBottom>Materials and Manufactoring <span className={classes.consulting}>Consulting</span></Typography>
      </main>
    </>
  )
}

export default App
