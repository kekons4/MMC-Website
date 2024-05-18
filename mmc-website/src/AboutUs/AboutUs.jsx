import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, ButtonGroup, createTheme, Box} from '@mui/material';

// User Defined modules
import useStyles from '../utils/styles';

function AboutUs() {
    const classes = useStyles();

    return(
        <main className={classes.container}>
            <Typography variant='h2' align='center' color="textPrimary" sx={{fontWeight: 400, marginBottom: "75px", fontFamily: "Cabin"}} gutterBottom>Our <span className={classes.consulting}>Team</span></Typography>
            {/* <Container maxWidth="lg"> */}
            <Grid container rowSpacing={4} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Grid item>
                    <Card sx={{display: "flex", flexDirection: {xs: "column", sm: "column", md: "column"}, boxShadow: "1px 1px 5px 1px", maxWidth: {xs: 400, sm: 550, md: 900}}}>
                        <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "row", md: "row"}}}>
                            <CardMedia component="img" image='../images/fpour.jpg' alt='picture of Dr. Farhang Pourboghrat' sx={{maxWidth: {xs: 400, sm: 200, md: 200}}} />
                            <CardContent sx={{display: 'flex', flexDirection: "column", justifyContent: "center"}}>
                                <Typography variant='h4' component="div" sx={{marginBottom: "15px"}}>
                                    Dr. Farhang Pourboghrat
                                </Typography>
                                <Typography variant='h6' component="div">
                                    CTO of Materials and Manufactoring <span className={classes.consulting}>Consulting</span>
                                </Typography>
                                <Typography variant='subtitle1' component="div">
                                    PhD in Mechanical Engineering from the University of Minnesota
                                </Typography>
                                <Typography variant='subtitle1' component="div">
                                    Chairman of The Ohio State University ISE Engineering Department
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{overflow: "scroll", maxHeight: 200, padding: "5px"}}>
                            <Typography variant='p' component="div" sx={{paddingBottom: "1rem", paddingRight: "1rem", paddingLeft: "1rem"}}>
                                Dr. Farhang Pourboghrat worked as a staff scientist for 8 years at the Alcoa Technical Center. He also served as a faculty member for 26 years at Michigan State University and The Ohio State University. Farhang’s expertise are in multiscale characterization of materials and modeling of advanced forming processes, such as warm and hot stamping of sheet metals, forging, tube hydroforming, incremental forming, additive manufacturing, and thermo-hydroforming of fiber-reinforced thermoplastic composites.  He developed  crystal plasticity and several advanced material models for the finite element simulation of the microstructural behavior of metals and fiber-reinforced thermoplastic (FRT) composites. Farhang has over 200 publications in journal and conference proceeding. You can learn more about Farhang’s research and technical background by visiting his Google Scholar and Researchgate websites.
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{display: "flex", flexDirection: {xs: "column", sm: "column", md: "column"}, boxShadow: "1px 1px 5px 1px", maxWidth: {xs: 400, sm: 550, md: 900}}}>
                        <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "row", md: "row"}}}>
                            <CardMedia component="img" image='../images/taejoon.jpg' alt='picture of Dr. Farhang Pourboghrat' sx={{maxWidth: {xs: 400, sm: 200, md: 200}}} />
                            <CardContent sx={{display: 'flex', flexDirection: "column", justifyContent: "center"}}>
                                <Typography variant='h4' component="div" sx={{marginBottom: "15px"}}>
                                    Dr. Taejoon Park
                                </Typography>
                                <Typography variant='h6' component="div">
                                    Associate Consultant at Materials and Manufactoring <span className={classes.consulting}>Consulting</span>                                </Typography>
                                <Typography variant='subtitle1' component="div">
                                    PhD in Mechanical Engineering from the University of Seoul                                
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{overflow: "scroll", maxHeight: 200, padding: "5px"}}>
                            <Typography variant='p' component="div" sx={{paddingBottom: "1rem", paddingRight: "1rem", paddingLeft: "1rem"}}>
                                Dr. Park's research efforts have been dedicated to exploring and advancing computational and numerical modeling of materials and manufacturing processes. His research aims to improve the understanding and prediction of the thermo-mechanical behavior of metal alloys and polymer composites during manufacturing processes. Particularly, Dr. Park has worked on developing advanced material models such as crystal plasticity model to predict macroscopic behavior and formability accounting for microstructure evolution and phase transformation. He is also investigating the correlation between the manufacturing process, material microstructure, and mechanical properties and applying this knowledge to the machine learning (ML) modeling.
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{display: "flex", flexDirection: {xs: "column", sm: "column", md: "column"}, boxShadow: "1px 1px 5px 1px", maxWidth: {xs: 400, sm: 550, md: 900}}}>
                        <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "row", md: "row"}}}>
                            <CardMedia component="img" image='../images/madhura.jpg' alt='picture of Dr. Farhang Pourboghrat' sx={{maxWidth: {xs: 400, sm: 200, md: 200}}} />
                            <CardContent sx={{display: 'flex', flexDirection: "column", justifyContent: "center"}}>
                                <Typography variant='h4' component="div" sx={{marginBottom: "15px"}}>
                                    Dr. Madhura Athale
                                </Typography>
                                <Typography variant='h6' component="div">
                                    Associate Consultant at Materials and Manufactoring <span className={classes.consulting}>Consulting</span>
                                </Typography>
                                <Typography variant='subtitle1' component="div">
                                    PhD in Mechanical Engineering from the University of The Ohio State University
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{overflow: "scroll", maxHeight: 200, padding: "5px"}}>
                            <Typography variant='p' component="div" sx={{paddingBottom: "1rem", paddingRight: "1rem", paddingLeft: "1rem"}}>
                                Dr. Madhura Athale has 5+ years of experience in Material Characterization & Modeling and Finite Element Analysis, and proficient in Data Acquisition and Processing. Her experiences includes designing polymer tooling through virtual experimentation using Finite Element Analysis (FEA) on ABAQUS to optimize cost and performance; performing FEA of the stamping process for prediction of polymer tool performance and tool life assessment; developing micromechanical model of 3D printed polymer composites for prediction of macroscopic material properties by performing FEA on Representative Volume Elements (RVEs) to identify the structure-property relationships.
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
            {/* </Container> */}
        </main>
    );
}

export default AboutUs;