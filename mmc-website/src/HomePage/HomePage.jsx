import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, ButtonGroup, createTheme, Box} from '@mui/material';

// User Defined modules
import useStyles from '../utils/styles';
import ProblemTile from '../Components/problemsTile';

function HomePage() {
    const classes = useStyles();

    return (
        <main className={classes.container}>
            <Typography variant='h2' align='center' color="textPrimary" sx={{fontWeight: 400, marginBottom: "75px", fontSize: { xs: '40px', sm: '50px', md: '60px'}, fontFamily: "Cabin"}} gutterBottom>Materials and Manufactoring <span className={classes.consulting}>Consulting</span></Typography>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={5} sx={{backgroundColor: "white", borderRadius: "5px", padding: "20px"}}>
                        <Typography variant='h4' color="black" sx={{marginBottom: "40px", fontFamily: "Cabin"}}>Our <span className={classes.consulting}>Mission</span></Typography>
                        <Typography variant="p" align='center' color="textPrimary" sx={{fontSize: "18px"}}>
                            Materials and Manufacturing Consulting (MM<span className={classes.consulting}>C</span>) was founded to help manufacturing companies with their materials (e.g., aluminum alloys, advanced high strength steels, polymer composites, etc.), and forming problems (e.g., tearing, spring-back, wrinkling). As of today, MM<span className={classes.consulting}>C</span> has helped many automotive and aerospace companies by providing materials solutions for their problems with manufacturing processes such as stamping, tube hydroforming, incremental sheet forming, forging, rolling, additive manufacturing, and compression modeling. MM<span className={classes.consulting}>C</span> has expertise related to static and dynamic properties of metals and polymer composites, at room and elevated temperatures. Engineers at MM<span className={classes.consulting}>C</span> are experienced in using commercial finite element analysis (FEA) codes (e.g., Abaqus, LS-Dyna, Deform, Ansys, and Digimat), deploying advanced material models (e.g., Barlat yield functions, viscoelasticity, viscoplasticity, crystal plasticity, GTN, etc.), as well as implement new material models using the UMAT option.
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={9} md={6} sx={{marginLeft: "4rem", backgroundColor: "white", height: "50%", padding: "1rem", borderRadius: "5px", marginTop: {xs: "2rem", sm: "2rem", md: "0rem"}}}>
                        <img src="../images/dr-pourboghrat-hero-img.jpg" alt="image of materials and manufactoring work examples" style={{width: "100%", height: "auto", borderRadius: "5px"}} />
                        <Typography variant='p'>Dr. Pourboghrat chatting with Collegues</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{backgroundColor: "white", borderRadius: "5px", padding: "20px", marginTop: "2rem"}}>
                        <Typography variant='h4' align='center' color="black" sx={{marginBottom: "40px", fontFamily: "Cabin"}}>Types of Problems Solved by MM<span className={classes.consulting}>C</span></Typography>
                        <Grid container spacing={1}>
                            <Grid item xs={8} sm={6} md={4}>
                                <a href="/" style={{textDecoration: "none"}}>
                                    <ProblemTile props={{imgSrc: "../images/3dprint.png", alt: "image of 3d printing problems solved by MMC", text: "3D Printing"}} />
                                </a>
                            </Grid>
                            <Grid item xs={8} sm={6} md={4} >
                                <a href="/" style={{textDecoration: "none"}}>
                                    <ProblemTile props={{imgSrc: "../images/forging.png", alt: "image of forging problems solved by MMC", text: "Forging"}} />
                                </a>                            
                            </Grid>
                            <Grid item xs={8} sm={6} md={4} >
                                <a href="/" style={{textDecoration: "none"}}>
                                    <ProblemTile props={{imgSrc: "../images/incrementalForming.png", alt: "image of incremental forming problems solved by MMC", text: "Incremental Forming"}} />
                                </a>                            
                            </Grid>
                            <Grid item xs={8} sm={6} md={4} >
                                <a href="/" style={{textDecoration: "none"}}>
                                    <ProblemTile props={{imgSrc: "../images/laserMeltingPowderBed.png", alt: "image of laser melting powder bed solved by MMC", text: "Laser Melting Powder Bed"}} />
                                </a>
                            </Grid>
                            <Grid item xs={8} sm={6} md={4} >
                                <a href="/" style={{textDecoration: "none"}}>
                                    <ProblemTile props={{imgSrc: "../images/rolling.png", alt: "image of 3d Rolling problems solved by MMC", text: "Rolling"}} />
                                </a>
                            </Grid>
                            <Grid item xs={8} sm={6} md={4} >
                                <a href="/" style={{textDecoration: "none"}}>
                                    <ProblemTile props={{imgSrc: "../images/stamping.png", alt: "image of stamping solved by MMC", text: "Stamping"}} />
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}

export default HomePage;