// import './App.css'
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, ButtonGroup, createTheme, Box} from '@mui/material';
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
        <Typography variant='h2' align='center' color="textPrimary" sx={{fontWeight: 400, marginBottom: "100px"}} gutterBottom>Materials and Manufactoring <span className={classes.consulting}>Consulting</span></Typography>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant='h4' align='start' color="black" sx={{marginBottom: "20px"}}>Our Mission</Typography>
              <Typography variant="p" align='center' color="textPrimary">
                Materials and Manufacturing Consulting (MMC) was founded to help manufacturing companies with their materials (e.g., aluminum alloys, advanced high strength steels, polymer composites, etc.), and forming problems (e.g., tearing, spring-back, wrinkling). As of today, MMC has helped many automotive and aerospace companies by providing materials solutions for their problems with manufacturing processes such as stamping, tube hydroforming, incremental sheet forming, forging, rolling, additive manufacturing, and compression modeling. MMC has expertise related to static and dynamic properties of metals and polymer composites, at room and elevated temperatures. Engineers at MMC are experienced in using commercial finite element analysis (FEA) codes (e.g., Abaqus, LS-Dyna, Deform, Ansys, and Digimat), deploying advanced material models (e.g., Barlat yield functions, viscoelasticity, viscoplasticity, crystal plasticity, GTN, etc.), as well as implement new material models using the UMAT option.
              </Typography>
            </Grid>
            <Grid item xs={2} sm={6} md={4} sx={{marginLeft: "4rem"}}>
              <img src="../public/images/ourmission.png" alt="image of materials and manufactoring work examples" width="500" height="500" />
            </Grid>
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
              Copyright &copy; 2024 Materials and Manufactoring Consulting L.L.C.
          </Typography>
      </footer>
    </>
  )
}

export default App
