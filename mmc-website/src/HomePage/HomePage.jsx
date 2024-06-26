import {Typography, Card, CardContent, CardMedia, Grid, Container, Box} from '@mui/material';

// User Defined modules
import useStyles from '../utils/styles';
import ProblemTile from '../Components/problemsTile';
import HomePageContentsPanel from '../Components/homePageContentsPanel';

function HomePage() {
    const classes = useStyles();

    return (
        <main className={classes.container}>
            {/* <HomePageContentsPanel /> */}
            <Typography id='mission' variant='h2' align='center' color="textPrimary" sx={{fontWeight: 400, marginBottom: "75px", marginLeft: {xs: "10px", sm: "10px", md: "10px"}, marginRight: {xs: "10px", sm: "10px", md: "10px"}, fontSize: { xs: '40px', sm: '50px', md: '70px'}, fontFamily: "Cabin"}} gutterBottom>Materials and Manufactoring <span className={classes.consulting}>Consulting</span></Typography>
            <Container maxWidth="xl">
                <Box sx={{backgroundColor: "white", padding: "20px", borderRadius: "10px", marginBottom: "75px"}}>
                    <Typography variant='h4' color="black" sx={{marginBottom: "40px", fontFamily: "Cabin"}}>Our <span className={classes.consulting}>Mission</span></Typography>
                    <Typography variant="p" align='center' color="textPrimary" sx={{fontSize: "18px"}}>
                        Materials and Manufacturing Consulting (MM<span className={classes.consulting}>C</span>) was founded to help manufacturing companies with their materials (e.g., aluminum alloys, advanced high strength steels, polymer composites, etc.), and forming problems (e.g., tearing, spring-back, wrinkling). As of today, MM<span className={classes.consulting}>C</span> has helped many automotive and aerospace companies by providing materials solutions for their problems with manufacturing processes such as stamping, tube hydroforming, incremental sheet forming, forging, rolling, additive manufacturing, and compression modeling. MM<span className={classes.consulting}>C</span> has expertise related to static and dynamic properties of metals and polymer composites, at room and elevated temperatures. Engineers at MM<span className={classes.consulting}>C</span> are experienced in using commercial finite element analysis (FEA) codes (e.g., Abaqus, LS-Dyna, Deform, Ansys, and Digimat), deploying advanced material models (e.g., Barlat yield functions, viscoelasticity, viscoplasticity, crystal plasticity, GTN, etc.), as well as implement new material models using the UMAT option.
                    </Typography>
                </Box>
                <Grid container spacing={2} sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "end"}}>
                    <Grid item xs={11} sm={9} md={6} sx={{marginLeft: {xs: "0rem", sm: "0rem", md: "1rem"}, backgroundColor: "white", height: "50%", padding: "1rem", borderRadius: "5px", marginTop: {xs: "2rem", sm: "2rem", md: "0rem"}}}>
                        <img src="../images/dr-pourboghrat-hero-img.jpg" alt="image of materials and manufactoring work examples" style={{width: "100%", height: "auto", borderRadius: "5px"}} />
                        <Typography variant='p'>Dr. Pourboghrat chatting with Colleagues</Typography>
                    </Grid>
                    <Grid item xs={11} sm={9} md={5.4} sx={{marginLeft: {xs: "0rem", sm: "0rem", md: "3rem"}, backgroundColor: "white", height: "50%", padding: "1rem", borderRadius: "5px", marginTop: {xs: "2rem", sm: "2rem", md: "0rem"}}}>
                        <img src="../images/fpourWhiteHouse.JPG" alt="image of materials and manufactoring work examples" style={{width: "100%", height: "auto", borderRadius: "5px"}} />
                        <Typography variant='p'>Dr. Pourboghrat at the White House</Typography>
                    </Grid>
                    {/* <Grid item xs={9} sm={9} md={4} sx={{marginLeft: {xs: "0rem", sm: "0rem", md: "1rem"}, backgroundColor: "white", height: "50%", padding: "1rem", borderRadius: "5px", marginTop: {xs: "2rem", sm: "2rem", md: "0rem"}}}>
                        <img src="../images/ise-research-day.jpg" alt="image of materials and manufactoring work examples" style={{width: "100%", height: "auto", borderRadius: "5px"}} />
                        <Typography variant='p'>The Ohio State University ISE research Day</Typography>
                    </Grid> */}
                </Grid>
            </Container>
            <Container maxWidth="2xl">
                <Box id='typeofproblems' xs={12} sm={12} md={12} sx={{borderRadius: "5px", paddingTop: "100px", paddingBottom: "100px", marginTop: "10rem"}}>
                    <Typography variant='h1' align='center' color="black" sx={{marginBottom: "100px", fontFamily: "Cabin", fontSize: {xs: "70px", sm: "80px", md: "100px"}}}>Types of Problems Solved by MM<span className={classes.consulting}>C</span></Typography>
                    <Grid container spacing={2} sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <Grid item xs={8} sm={6} md={4}>
                            <a href="#microstructures" style={{textDecoration: "none"}}>
                                <ProblemTile props={{imgSrc: "../images/3dprinting.png", alt: "image of 3d printing problems solved by MMC", text: "3D Printing"}} />
                            </a>
                        </Grid>
                        <Grid item xs={8} sm={6} md={4} >
                            <a href="#tubeHydroforming" style={{textDecoration: "none"}}>
                                <ProblemTile props={{imgSrc: "../images/forging2.jpg", alt: "image of forging problems solved by MMC", text: "Forging"}} />
                            </a>                            
                        </Grid>
                        <Grid item xs={8} sm={6} md={4} >
                            <a href="#incrementalForming" style={{textDecoration: "none"}}>
                                <ProblemTile props={{imgSrc: "../images/incrementalForming.png", alt: "image of incremental forming problems solved by MMC", text: "Incremental Forming"}} />
                            </a>                            
                        </Grid>
                        <Grid item xs={8} sm={6} md={4} >
                            <a href="#ahssCharacterization" style={{textDecoration: "none"}}>
                                <ProblemTile props={{imgSrc: "../images/laserMeltingPowderBed.png", alt: "image of laser melting powder bed solved by MMC", text: "Laser Powder Bed"}} />
                            </a>
                        </Grid>
                        <Grid item xs={8} sm={6} md={4} >
                            <a href="#rollingMaterialCharacterization" style={{textDecoration: "none"}}>
                                <ProblemTile props={{imgSrc: "../images/rolling.png", alt: "image of 3d Rolling problems solved by MMC", text: "Rolling"}} />
                            </a>
                        </Grid>
                        <Grid item xs={8} sm={6} md={4} >
                            <a href="#stamping" style={{textDecoration: "none"}}>
                                <ProblemTile props={{imgSrc: "../images/stamping.png", alt: "image of stamping solved by MMC", text: "Stamping"}} />
                            </a>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container id='examplesOfProblemsSolved' maxWidth="2xl" sx={{marginTop: "5rem", marginBottom: "10rem", padding: "5rem", backgroundColor: "white"}}>
                <Typography variant='h2' component="div" align='center' sx={{fontFamily: "Cabin", marginBottom: "100px"}}>
                    Examples of Problems <span className={classes.consulting}>Solved</span>
                </Typography>
                <Grid container spacing={0} direction="column" justifyContent="center" alignItems="center">
                    <Grid id="tubeHydroforming" item xs={2} sm={4} md={6}>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Tube Hydroforming Process 
                            </Typography>
                            <CardMedia component='img' image='../images/tube-hydroforming-process.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.25rem", sm: "0.5rem", md: "1rem"}}} >
                                    Tube hydroforming is a popular manufacturing process to make structural components for automotive and aerospace applications. Tubes made with the extrusion process and welding of rolled sheet metals are often heat treated to obtain the desired mechanical properties before and after the forming process.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Typography variant='p' component='div' align='center' sx={{border: {xs: "3px #607d8b solid", sm: "4px #607d8b solid", md: "5px #607d8b solid"}, borderRadius: "10px", height: "5rem", marginTop: "50px", marginBottom: "50px", opacity: "0.7"}}></Typography>

                    <Grid id="microstructures" item xs={2} sm={4} md={6}>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Microstructure-Based Modeling of Polycrystalline Metals
                            </Typography>
                            <CardMedia component='img' image='../images/microstructures.png' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.25rem", sm: "0.5rem", md: "1rem"}}} >
                                    Due to the evolution of texture (anisotropy), we use crystal plasticity models to predict the mechanical properties of metal sheets and tubes in metal forming processes. 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Typography variant='p' component='div' align='center' sx={{border: {xs: "3px #607d8b solid", sm: "4px #607d8b solid", md: "5px #607d8b solid"}, borderRadius: "10px", height: "5rem", marginTop: "50px", marginBottom: "50px", opacity: "0.7"}}></Typography>

                    <Grid id="stamping" item xs={2} sm={4} md={6}>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Stamping of Third-Gen Phase-Transforming AHSS                             </Typography>
                            <CardMedia component='img' image='../images/stamping-third-gen.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.25rem", sm: "0.5rem", md: "1rem"}}} >
                                    Due to the complex mechanical behavior of phase transforming advanced high strength steel (AHSS), we employed a microstructure-based crystal plasticity model to predict the deformation of this material during stamping. A microstructure-based forming limit curve (FLC) was also employed to predict the failure of the AHSS sheet. 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Typography variant='p' component='div' align='center' sx={{border: {xs: "3px #607d8b solid", sm: "4px #607d8b solid", md: "5px #607d8b solid"}, borderRadius: "10px", height: "5rem", marginTop: "50px", marginBottom: "50px", opacity: "0.7"}}></Typography>

                    <Grid id="ahssCharacterization" item xs={2} sm={4} md={6}>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Characterization of Third-Gen Phase-Transforming AHSS
                            </Typography>
                            <CardMedia component='img' image='../images/characterization-third-gen.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.25rem", sm: "0.5rem", md: "1rem"}}} >
                                    Due to the complex mechanical behavior of phase transforming advanced high strength steel (AHSS), we employed a microstructure-based crystal plasticity model to predict the deformation of this material during stamping. A microstructure-based forming limit curve (FLC) was also employed to predict the failure of the AHSS sheet. 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Typography variant='p' component='div' align='center' sx={{border: {xs: "3px #607d8b solid", sm: "4px #607d8b solid", md: "5px #607d8b solid"}, borderRadius: "10px", height: "5rem", marginTop: "50px", marginBottom: "50px", opacity: "0.7"}}></Typography>

                    <Grid id="rollingMaterialCharacterization" item xs={2} sm={4} md={6}>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Material Characterization 
                            </Typography>
                            <CardMedia component='img' image='../images/rollingMaterialCharacterization.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.25rem", sm: "0.5rem", md: "1rem"}}} >
                                    Measured data from uniaxial and biaxial tests are used to characterize the mechanical properties of sheet and tubular metals and furthermore used to calibrate parameters of phenomenological yield functions. 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Typography variant='p' component='div' align='center' sx={{border: {xs: "3px #607d8b solid", sm: "4px #607d8b solid", md: "5px #607d8b solid"}, borderRadius: "10px", height: "5rem", marginTop: "50px", marginBottom: "50px", opacity: "0.7"}}></Typography>

                    <Grid id="incrementalForming" item xs={2} sm={4} md={6} >
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Incremental Sheet Forming  
                            </Typography>
                            <CardMedia component='img' image='../images/incrementSheetForming.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.5rem", sm: "0.5rem", md: "1rem"}}} >
                                    Incremental Sheet Forming (ISF) is a novel flexible manufacturing method for rapid prototyping and small batch production of sheet metal components. FE modeling of the truncated-conical geometries with 45^° and 67^°wall angles from a circular shape sheet metal with 100 mm radius and 1.64 mm thickness was conducted. The Yld2004-18p and Hill's 1948 models, implemented as a VUMAT into ABAQUS, were applied.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}

export default HomePage;