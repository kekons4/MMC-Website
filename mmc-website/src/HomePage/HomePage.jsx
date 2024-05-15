import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, ButtonGroup, createTheme, Box} from '@mui/material';

// User Defined modules
import useStyles from '../utils/styles';

function HomePage() {
    const classes = useStyles();

    return (
        <main className={classes.container}>
            <Typography variant='h2' align='center' color="textPrimary" sx={{fontWeight: 400, marginBottom: "75px", fontSize: { xs: '40px', sm: '50px', md: '60px'}, fontFamily: "Cabin"}} gutterBottom>Materials and Manufactoring <span className={classes.consulting}>Consulting</span></Typography>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={5} sx={{backgroundColor: "white", borderRadius: "5px", padding: "20px"}}>
                        <Typography variant='h4' color="black" sx={{marginBottom: "40px", fontFamily: "Cabin"}}>Our Mission</Typography>
                        <Typography variant="p" align='center' color="textPrimary" sx={{fontSize: "18px"}}>
                            Materials and Manufacturing Consulting (MMC) was founded to help manufacturing companies with their materials (e.g., aluminum alloys, advanced high strength steels, polymer composites, etc.), and forming problems (e.g., tearing, spring-back, wrinkling). As of today, MMC has helped many automotive and aerospace companies by providing materials solutions for their problems with manufacturing processes such as stamping, tube hydroforming, incremental sheet forming, forging, rolling, additive manufacturing, and compression modeling. MMC has expertise related to static and dynamic properties of metals and polymer composites, at room and elevated temperatures. Engineers at MMC are experienced in using commercial finite element analysis (FEA) codes (e.g., Abaqus, LS-Dyna, Deform, Ansys, and Digimat), deploying advanced material models (e.g., Barlat yield functions, viscoelasticity, viscoplasticity, crystal plasticity, GTN, etc.), as well as implement new material models using the UMAT option.
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={6} md={6} sx={{marginLeft: "4rem", backgroundColor: "white", borderRadius: "5px"}}>
                        <img src="../images/ourmission.png" alt="image of materials and manufactoring work examples" style={{width: "100%", height: "auto"}} />
                    </Grid>
                    <Grid item xs={3} sm={6} md={5} sx={{marginLeft: "4rem", marginTop: "1rem"}}>
                        <img src="../images/ourmission.png" alt="image of materials and manufactoring work examples" style={{width: "100%", height: "auto"}} />
                    </Grid>
                    <Grid item xs={3} sm={6} md={5} sx={{marginLeft: "4rem", marginTop: "1rem"}}>
                        <img src="../images/ourmission.png" alt="image of materials and manufactoring work examples" style={{width: "100%", height: "auto"}} />
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}

export default HomePage;