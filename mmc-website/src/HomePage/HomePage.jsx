import {Typography, Card, CardContent, CardMedia, Grid, Container, Box} from '@mui/material';

// User Defined modules
import useStyles from '../utils/styles';
import ProblemTile from '../Components/problemsTile';

function HomePage() {
    const classes = useStyles();

    return (
        <main className={classes.container}>
            {/* <HomePageContentsPanel /> */}
            <Typography id='mission' variant='h2' align='center' color="textPrimary" sx={{fontWeight: 400, marginBottom: "75px", marginLeft: {xs: "10px", sm: "10px", md: "10px"}, marginRight: {xs: "10px", sm: "10px", md: "10px"}, fontSize: { xs: '40px', sm: '50px', md: '70px'}, fontFamily: "Cabin"}} gutterBottom>Materials and Manufacturing <span className={classes.consulting}>Consulting</span></Typography>
            <Container maxWidth="xl">
                <Box sx={{backgroundColor: "white", padding: "20px", borderRadius: "10px", marginBottom: "75px", boxShadow: "2px 2px 15px -3px black"}}>
                    <Typography variant='h4' color="black" sx={{marginBottom: "40px", fontFamily: "Cabin"}}>Our <span className={classes.consulting}>Mission</span></Typography>
                    <Typography variant="p" align='center' color="textPrimary" sx={{fontSize: "18px"}}>
                        Materials and Manufacturing Consulting (MM<span className={classes.consulting}>C</span>) was founded to help manufacturing companies with their materials (e.g., aluminum alloys, advanced high strength steels, polymer composites, etc.), and forming problems (e.g., tearing, spring-back, wrinkling). As of today, MM<span className={classes.consulting}>C</span> has helped many automotive and aerospace companies by providing materials solutions for their problems with manufacturing processes such as stamping, tube hydroforming, incremental sheet forming, forging, rolling, additive manufacturing, and compression modeling. MM<span className={classes.consulting}>C</span> has expertise related to static and dynamic properties of metals and polymer composites, at room and elevated temperatures. Engineers at MM<span className={classes.consulting}>C</span> are experienced in using commercial finite element analysis (FEA) codes (e.g., Abaqus, LS-Dyna, Deform, Ansys, and Digimat), deploying advanced material models (e.g., Barlat yield functions, viscoelasticity, viscoplasticity, crystal plasticity, GTN, etc.), as well as implement new material models using the UMAT option.
                    </Typography>
                </Box>
                <Grid container spacing={2} sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "end"}}>
                    <Grid item xs={11} sm={9} md={6} sx={{boxShadow: "2px 2px 15px -3px black", marginLeft: {xs: "0rem", sm: "0rem", md: "1rem"}, backgroundColor: "white", height: "50%", padding: "1rem", borderRadius: "5px", marginTop: {xs: "2rem", sm: "2rem", md: "0rem"}}}>
                        <img src="../images/dr-pourboghrat-hero-img.jpg" alt="image of materials and manufactoring work examples" style={{width: "100%", height: "auto", borderRadius: "5px"}} />
                        <Typography variant='p'>Dr. Pourboghrat chatting with Colleagues</Typography>
                    </Grid>
                    <Grid item xs={11} sm={9} md={5.4} sx={{boxShadow: "2px 2px 15px -3px black", marginLeft: {xs: "0rem", sm: "0rem", md: "3rem"}, backgroundColor: "white", height: "50%", padding: "1rem", borderRadius: "5px", marginTop: {xs: "2rem", sm: "2rem", md: "2rem"}}}>
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
                        <Grid item xs={8} sm={6} md={4} >
                            <a href="#3dprinting" style={{textDecoration: "none"}}>
                                <ProblemTile props={{imgSrc: "../images/3dprint.jpg", alt: "image of 3d printing problems solved by MMC", text: "3D Printing"}} />
                            </a>
                        </Grid>
                        <Grid item xs={8} sm={6} md={4} >
                            <a href="#tubeHydroforming" style={{textDecoration: "none"}}>
                                <ProblemTile props={{imgSrc: "../images/forging2.jpg", alt: "image of forging problems solved by MMC", text: "Tube Hydroforming"}} />
                            </a>                            
                        </Grid>
                        <Grid item xs={8} sm={6} md={4} >
                            <a href="#incrementalForming" style={{textDecoration: "none"}}>
                                <ProblemTile props={{imgSrc: "../images/incrementalForming.png", alt: "image of incremental forming problems solved by MMC", text: "Incremental Forming"}} />
                            </a>                            
                        </Grid>
                        <Grid item xs={8} sm={6} md={4} >
                            <a href="#multiscaleMaterialDesignModeling" style={{textDecoration: "none"}}>
                                <ProblemTile props={{imgSrc: "../images/multiMaterialDesign.png", alt: "image of laser melting powder bed solved by MMC", text: "Multiscale Material Design Modeling "}} />
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
                        <Grid item xs={8} sm={6} md={4} >
                            <a href="#materialCharacterization" style={{textDecoration: "none"}}>
                                <ProblemTile props={{imgSrc: "../images/materialCharacterization.jpg", alt: "image of material characterization solved by MMC", text: "Material Characterization"}} />
                            </a>
                        </Grid>
                        <Grid item xs={8} sm={6} md={4} >
                            <a href="#frictionStirExtrusion" style={{textDecoration: "none"}}>
                                <ProblemTile props={{imgSrc: "../images/frictionStirExtrusion.jpg", alt: "image of friction Stir Extrusion solved by MMC", text: "Friction Stir Extrusion"}} />
                            </a>
                        </Grid>
                        <Grid item xs={8} sm={6} md={4} >
                            <a href="#springback" style={{textDecoration: "none"}}>
                                <ProblemTile props={{imgSrc: "../images/springback.jpg", alt: "image of springback solved by MMC", text: "Springback"}} />
                            </a>
                        </Grid>
                        <Grid item xs={8} sm={6} md={4} >
                            <a href="#fiberAndNanoReinforcedPolymerComposite" style={{textDecoration: "none"}}>
                                <ProblemTile props={{imgSrc: "../images/fiberAndNanoReinforcedPolymerComposite.jpg", alt: "image of Fiber And Nano Reinforced Polymer Composite solved by MMC", text: "Nano Reinforced Polymer Composite"}} />
                            </a>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container id='examplesOfProblemsSolved' maxWidth="2xl" sx={{marginTop: "5rem", marginBottom: "10rem", padding: "5rem", backgroundColor: "white"}}>
                <Grid container spacing={0} direction="column" justifyContent="center" alignItems="center">
                    <Grid id="tubeHydroforming" item xs={2} sm={4} md={6}>
                        <Typography variant='h1' component="div" align='center' sx={{fontFamily: "Cabin", marginBottom: "100px", fontWeight: "500"}}>
                            Tube <span className={classes.consulting}>Hydroforming</span>
                        </Typography>
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
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", marginTop: "3rem", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Characterization and Modeling of Extruded Tubes 
                            </Typography>
                            <CardMedia component='img' image='../images/tube-hydroforming-process2.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.25rem", sm: "0.5rem", md: "1rem"}}} >
                                    Experimental testing, crystal plasticity finite element modeling (CPFEM), and material modeling with Yld2004 yield function were used to study the impact of the microstructure in the O-tempered AA7075 tubes on mechanical properties, plastic anisotropy, and formability.  
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", marginTop: "3rem", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Tube Hydroforming of AA6061-T6 
                            </Typography>
                            <CardMedia component='img' image='../images/tube-hydroforming-process3.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.25rem", sm: "0.5rem", md: "1rem"}}} >
                                    Comparison of experiment and FEA Simulation. Digital Imaging Correlation (DIC) was used to measure hoop and axial strains in hydroformed tubes. 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Typography variant='p' component='div' align='center' sx={{border: {xs: "3px #607d8b solid", sm: "4px #607d8b solid", md: "5px #607d8b solid"}, borderRadius: "10px", height: "5rem", marginTop: "50px", marginBottom: "50px", opacity: "0.7"}}></Typography>

                    <Grid id="3dprinting" item xs={2} sm={4} md={6}>
                        <Typography variant='h1' component='div' align='center' sx={{marginBottom: "3rem", fontWeight: "500", fontFamily: "Cabin"}}>
                            3D <span className={classes.consulting}>Printing</span>
                        </Typography>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Composite Additive Manufacturing 
                            </Typography>
                            <CardMedia component='img' image='../images/3dprinting.png' alt='image of 3dprinting problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.25rem", sm: "0.5rem", md: "1rem"}}} >
                                    This process involves deposition of molten feedstock material onto a printing bed, which poses challenges such as thermal gradients, resulting in residual stresses and deformation in the final part. FEA modeling of this process allows for the prediction and understanding of these effects. 
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 800, marginTop: "3rem", boxShadow: "2px 2px 15px -3px black", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Material Models for Additive Manufacturing  
                            </Typography>
                            <CardMedia component='img' image='../images/additiveManufactoring.PNG' alt='image of 3dprinting problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.25rem", sm: "0.5rem", md: "1rem"}}} >
                                    Reconstruction of mesoscale synthetic microstructure and thermo-mechanical FE analysis of AM process is used to predict microstructure-dependent mechanical properties of polymer composites.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 800, marginTop: "3rem", boxShadow: "2px 2px 15px -3px black", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Additive Manufacturing  
                            </Typography>
                            <CardMedia component='img' image='../images/additiveManufactoring2.PNG' alt='image of 3dprinting problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.25rem", sm: "0.5rem", md: "1rem"}}} >
                                    Reconstruction of mesoscale synthetic microstructure and thermo-mechanical FE analysis of AM process to predict microstructure-dependent mechanical properties of Polymer Composites.   
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Typography variant='p' component='div' align='center' sx={{border: {xs: "3px #607d8b solid", sm: "4px #607d8b solid", md: "5px #607d8b solid"}, borderRadius: "10px", height: "5rem", marginTop: "50px", marginBottom: "50px", opacity: "0.7"}}></Typography>

                    <Grid id="stamping" item xs={2} sm={4} md={6}>
                        <Typography variant='h1' component='div' align='center' sx={{marginBottom: "3rem", fontWeight: "500", fontFamily: "Cabin"}}>
                            Stamping
                        </Typography>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Failure in Thin Sheets and Tubes is Temperature and Texture Sensitive
                            </Typography>
                            <CardMedia component='img' image='../images/failureThinSheets.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", marginTop: "3rem", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Stamping of AA 6061                              
                            </Typography>
                            <CardMedia component='img' image='../images/stampingAA6061.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.25rem", sm: "0.5rem", md: "1rem"}}} >
                                    Stamping of a cross-shaped part, representing typical deep drawn automotive parts, was conducted. The measured thickness distributions (ARGUS) were compared with finite element simulations results obtained with LS-Dyna explicit code using the two yield functions. 
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", marginTop: "3rem", backgroundColor: "#efefef"}}>
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
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", marginTop: "3rem", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Stamping of Third-Gen Phase-Transforming AHSS                             
                            </Typography>
                            <CardMedia component='img' image='../images/stamping-third-gen.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.25rem", sm: "0.5rem", md: "1rem"}}} >
                                    Due to the complex mechanical behavior of phase transforming advanced high strength steel (AHSS), we employed a microstructure-based crystal plasticity model to predict the deformation of this material during stamping. A microstructure-based forming limit curve (FLC) was also employed to predict the failure of the AHSS sheet. 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Typography variant='p' component='div' align='center' sx={{border: {xs: "3px #607d8b solid", sm: "4px #607d8b solid", md: "5px #607d8b solid"}, borderRadius: "10px", height: "5rem", marginTop: "50px", marginBottom: "50px", opacity: "0.7"}}></Typography>

                    <Grid id="multiscaleMaterialDesignModeling" item xs={2} sm={4} md={6}>
                        <Typography variant='h2' component='div' align='center' sx={{marginBottom: "3rem", fontWeight: "500", fontFamily: "Cabin"}}>
                            Multiscale Material <span className={classes.consulting}>Design</span>
                        </Typography>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Multiscale Material Design Modeling Philosophy 
                            </Typography>
                            <CardMedia component='img' image='../images/microstructures.png' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.25rem", sm: "0.5rem", md: "1rem"}}} >
                                    Multiscale approach is used to find optimum material solutions for metals and polymer composite sheet and tubular products.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Typography variant='p' component='div' align='center' sx={{border: {xs: "3px #607d8b solid", sm: "4px #607d8b solid", md: "5px #607d8b solid"}, borderRadius: "10px", height: "5rem", marginTop: "50px", marginBottom: "50px", opacity: "0.7"}}></Typography>

                    <Grid id="rollingMaterialCharacterization" item xs={2} sm={4} md={6}>
                        <Typography variant='h1' component='div' align='center' sx={{marginBottom: "3rem", fontWeight: "500", fontFamily: "Cabin"}}>
                            Rolling
                        </Typography>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Rolled Sheet Products                             
                            </Typography>
                            <CardMedia component='img' image='../images/rollingSheetProduct.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.25rem", sm: "0.5rem", md: "1rem"}}} >
                                    The mechanical properties of cold and hot rolled sheet products are a function of the number of rolling passes, percent thickness reduction in each pass, as well as intermediate annealing after each rolling  pass. These properties are predicted using a crystal plasticity model.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", marginTop: "3rem", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Thermo-Mechanical Processes                              
                            </Typography>
                            <CardMedia component='img' image='../images/thermoMechProcess.png' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.25rem", sm: "0.5rem", md: "1rem"}}} >
                                    Thermo-mechanical processes (TMP), such as hot rolling, forging, and stamping often require multi-stage plastic deformation followed by intermediate heat treatment. The mechanical properties of the product at the end of each stage will depend on the evolution of the microstructure. 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Typography variant='p' component='div' align='center' sx={{border: {xs: "3px #607d8b solid", sm: "4px #607d8b solid", md: "5px #607d8b solid"}, borderRadius: "10px", height: "5rem", marginTop: "50px", marginBottom: "50px", opacity: "0.7"}}></Typography>

                    <Grid id="incrementalForming" item xs={2} sm={4} md={6} >
                        <Typography variant='h2' component='div' align='center' sx={{marginBottom: "3rem", fontWeight: "500", fontFamily: "Cabin"}}>
                            Incremental Sheet <span className={classes.consulting}>Forming</span>
                        </Typography>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Incremental Sheet Forming pt.1
                            </Typography>
                            <CardMedia component='img' image='../images/incrementSheetForming2.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.5rem", sm: "0.5rem", md: "1rem"}}} >
                                    Incremental Sheet Forming (ISF) is a novel flexible manufacturing method for rapid prototyping and small batch production of sheet metal components. FE modeling of the truncated-conical geometries with 45^° and 67^°wall angles from a circular shape sheet metal with 100 mm radius and 1.64 mm thickness was conducted. The Yld2004-18p and Hill's 1948 models, implemented as a VUMAT into ABAQUS, were applied.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", marginTop: "3rem", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Incremental Sheet Forming pt.2  
                            </Typography>
                            <CardMedia component='img' image='../images/incrementSheetForming.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.5rem", sm: "0.5rem", md: "1rem"}}} >
                                    Finite element modeling of the truncated-conical geometries with 45^° and 67^°wall angles from a circular shape sheet metal with 100 mm radius and 1.64 mm thickness was conducted. The Yld2004-18p and Hill's 1948 models, implemented as a VUMAT into ABAQUS, were applied.                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", marginTop: "3rem", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Incremental Sheet Forming pt.3  
                            </Typography>
                            <CardMedia component='img' image='../images/incrementSheetForming3.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.5rem", sm: "0.5rem", md: "1rem"}}} >
                                    Formability prediction for incremental forming processes. 
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", marginTop: "3rem", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Incremental Sheet Forming pt.4  
                            </Typography>
                            <CardMedia component='img' image='../images/incrementSheetForming4.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.5rem", sm: "0.5rem", md: "1rem"}}} >
                                    Forming limit criteria under full 3D stress condition and its application to SPIF and TPIF processes. 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Typography variant='p' component='div' align='center' sx={{border: {xs: "3px #607d8b solid", sm: "4px #607d8b solid", md: "5px #607d8b solid"}, borderRadius: "10px", height: "5rem", marginTop: "50px", marginBottom: "50px", opacity: "0.7"}}></Typography>

                    <Grid id="materialCharacterization" item xs={2} sm={4} md={6} >
                        <Typography variant='h2' component='div' align='center' sx={{marginBottom: "3rem", fontWeight: "500", fontFamily: "Cabin"}}>
                            Material <span className={classes.consulting}>Characterization</span>
                        </Typography>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Material Characterization 
                            </Typography>
                            <CardMedia component='img' image='../images/materialCharacterization1.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.5rem", sm: "0.5rem", md: "1rem"}}} >
                                    Measured data from uniaxial and biaxial tests are used to characterize the mechanical properties of sheet and tubular metals. Same data are used to calibrate parameters of phenomenological yield functions. 
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", marginTop: "3rem", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Material Characterization pt.2
                            </Typography>
                            <CardMedia component='img' image='../images/materialCharacterization2.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", marginTop: "3rem", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Characterization and Modeling of Extruded Tubes  
                            </Typography>
                            <CardMedia component='img' image='../images/materialCharacterization3.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.5rem", sm: "0.5rem", md: "1rem"}}} >
                                    Experimental testing, crystal plasticity finite element modeling (CPFEM), and material modeling with Yld2004 yield function were used to study the impact of the microstructure in the O-tempered AA7075 tubes on mechanical properties, plastic anisotropy, and formability.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Typography variant='p' component='div' align='center' sx={{border: {xs: "3px #607d8b solid", sm: "4px #607d8b solid", md: "5px #607d8b solid"}, borderRadius: "10px", height: "5rem", marginTop: "50px", marginBottom: "50px", opacity: "0.7"}}></Typography>

                    <Grid id="frictionStirExtrusion" item xs={2} sm={4} md={6} >
                        <Typography variant='h2' component='div' align='center' sx={{marginBottom: "3rem", fontWeight: "500", fontFamily: "Cabin"}}>
                        Friction Stir <span className={classes.consulting}>Extrusion</span>
                        </Typography>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                            Friction Stir Extrusion pt.1 
                            </Typography>
                            <CardMedia component='img' image='../images/frictionStirExtrusion1.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.5rem", sm: "0.5rem", md: "1rem"}}} >
                                    FSE uses relative motion and high contact forces between a non-consumable tool set and a metallic workpiece to generate frictional heating and severe plastic deformation. The result is a metal with fine grain size, low dislocation density, and high quality.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", marginTop: "3rem", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                            Friction Stir Extrusion pt.2 
                            </Typography>
                            <CardMedia component='img' image='../images/frictionStirExtrusion2.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.5rem", sm: "0.5rem", md: "1rem"}}} >
                                    Predicted yield surfaces and r value for the product after application of different levels of shear deformation.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", marginTop: "3rem", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                            Friction Stir Extrusion pt.3 
                            </Typography>
                            <CardMedia component='img' image='../images/frictionStirExtrusion3.PNG' alt='image of microstructures problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.5rem", sm: "0.5rem", md: "1rem"}}} >
                                    Predicted forming limit strain diagram (FLD) based on the M-K theory.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    
                    <Typography variant='p' component='div' align='center' sx={{border: {xs: "3px #607d8b solid", sm: "4px #607d8b solid", md: "5px #607d8b solid"}, borderRadius: "10px", height: "5rem", marginTop: "50px", marginBottom: "50px", opacity: "0.7"}}></Typography>

                    <Grid id="springback" item xs={2} sm={4} md={6} >
                        <Typography variant='h2' component='div' align='center' sx={{marginBottom: "3rem", fontWeight: "500", fontFamily: "Cabin"}}>
                            Springback
                        </Typography>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Springback in Stamped Sheet Metals  
                            </Typography>
                            <CardMedia component='img' image='../images/springback1.png' alt='image of springback problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.5rem", sm: "0.5rem", md: "1rem"}}} >
                                    This phenomenon takes place when the sheet metal contacts the tool surface (bending) and then leaves the tool surface and partially or completely loses its curvature (unbending) when it enters the die cavity. Material models used for proper simulation of springback are shown. 
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", marginTop: "3rem", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Springback in Sheet Metals after Trimming Operation 
                            </Typography>
                            <CardMedia component='img' image='../images/springback2.png' alt='image of springback problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.5rem", sm: "0.5rem", md: "1rem"}}} >
                                    FE simulation of sheet metal (quarter model) forming operation including springback before and after the trimming operation. 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Typography variant='p' component='div' align='center' sx={{border: {xs: "3px #607d8b solid", sm: "4px #607d8b solid", md: "5px #607d8b solid"}, borderRadius: "10px", height: "5rem", marginTop: "50px", marginBottom: "50px", opacity: "0.7"}}></Typography>

                    <Grid id="fiberAndNanoReinforcedPolymerComposite" item xs={2} sm={4} md={6} >
                        <Typography variant='h2' component='div' align='center' sx={{marginBottom: "3rem", fontWeight: "500", fontFamily: "Cabin"}}>
                            Reinforced Polymer Composite
                        </Typography>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Reinforced Polymer Composites 
                            </Typography>
                            <CardMedia component='img' image='../images/fiberAndNanoReinforcedPolymerComposite1.png' alt='image of springback problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.5rem", sm: "0.5rem", md: "1rem"}}} >
                                    Complex aerospace and automotive parts can be manufactured by heating and shaping thermoplastic composites reinforced with various types of fibers, mats, and nano fillers.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", marginTop: "3rem", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Compression Molding of Thermoset Composites  
                            </Typography>
                            <CardMedia component='img' image='../images/fiberAndNanoReinforcedPolymerComposite2.png' alt='image of springback problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.5rem", sm: "0.5rem", md: "1rem"}}} >
                                    Compression modeling is a popular manufacturing process to make complex automotive parts by pressing heated glass fiber reinforced composites into a mold.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", marginTop: "3rem", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Fiber-Reinforced Thermoplastic Composites   
                            </Typography>
                            <CardMedia component='img' image='../images/fiberAndNanoReinforcedPolymerComposite3.png' alt='image of springback problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.5rem", sm: "0.5rem", md: "1rem"}}} >
                                    Finite element simulation of forming of a multi-layer, fiber-reinforced polymer composite mat was performed with Abaqus FEA to evaluate formability, and strength of the final product. 
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 800, boxShadow: "2px 2px 15px -3px black", marginTop: "3rem", backgroundColor: "#efefef"}}>
                            <Typography variant='h4' gutterBottom sx={{padding: "1rem", fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>
                                Nano-platelet Reinforced Thermoplastic Composites 
                            </Typography>
                            <CardMedia component='img' image='../images/fiberAndNanoReinforcedPolymerComposite4.png' alt='image of springback problem solved by mmc' />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component="div" sx={{fontSize: {xs: "0.5rem", sm: "0.5rem", md: "1rem"}}} >
                                    Mechanical performance of thermoplastic polymer reinforced with graphene nanoplatelets (with different volume fraction, and diameter to thickness aspect ratio) was predicted.
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