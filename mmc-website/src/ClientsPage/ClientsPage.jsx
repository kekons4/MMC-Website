import { useState } from 'react';
import {Typography, List, ListItem, ListItemText, Container, Box} from '@mui/material';

// User Defined modules
import useStyles from '../utils/styles';

function ClientsPage() {
    const classes = useStyles();

    const [dense, setDense] = useState(false);

    return (
        <Container maxWidth="2xl" sx={{marginTop: "4rem", padding: "4rem", backgroundColor: "#efefef", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Box>
                <Typography variant='h2' component="div" align="center" sx={{fontFamily: "Cabin", marginBottom: "1rem"}}>
                    Our <span className={classes.consulting}>Clients</span>
                </Typography>
                <Typography variant='p' component="div" align='center' sx={{fontFamily: "Cabin", fontSize: {xs: "15px", sm: "20px", md: "25px"}}}>
                    We have worked with multiple companies in multiple industries. 
                </Typography>
                <Typography variant='p' component="div" align='center' sx={{fontFamily: "Cabin", fontSize: {xs: "12px", sm: "15px", md: "20px"}}}>
                     <b>Automotive, Aerospace, Defense, Law Firms, and Materials</b>
                </Typography>
            </Box>
            <Box>
                <List dense={dense} sx={{maxWidth: "700px"}}>
                    <ListItem sx={{backgroundColor: "white", borderRadius: "10px", padding: "20px", marginTop: "40px"}}>
                        <img src="../images/kaiserLogo.jpeg" alt="General Motors Logo" style={{height: "100px", width: "150px", borderRadius: "10px"}} />
                        <ListItemText primary="Kaiser Corp." secondary="(2024 - Present)" sx={{marginLeft: "20px"}}/>
                    </ListItem>
                    <ListItem sx={{backgroundColor: "white", borderRadius: "10px", padding: "20px", marginTop: "20px"}}>
                        <img src="../images/gmLogo.png" alt="General Motors Logo" style={{height: "100px", width: "150px", borderRadius: "10px"}} />
                        <ListItemText primary="GM Corp." secondary="(2021-2022)" sx={{marginLeft: "20px"}}/>
                    </ListItem>
                    <ListItem sx={{backgroundColor: "white", borderRadius: "10px", padding: "20px", marginTop: "20px"}}>
                        <img src="../images/hondaLogo.png" alt="Honda Logo" style={{height: "100px", width: "150px", borderRadius: "10px"}} />
                        <ListItemText primary="Honda Corp." secondary="(2019-2021)" sx={{marginLeft: "20px"}}/>
                    </ListItem>
                    <ListItem sx={{backgroundColor: "white", borderRadius: "10px", padding: "20px", marginTop: "20px"}}>
                        <img src="../images/hondaRD.jpeg" alt="Honda R&D America Logo" style={{height: "100px", width: "150px", borderRadius: "10px"}} />
                        <ListItemText primary="Honda R&D Americas, Inc." secondary="(2017-2019)" sx={{marginLeft: "20px"}}/>
                    </ListItem>
                    <ListItem sx={{backgroundColor: "white", borderRadius: "10px", padding: "20px", marginTop: "20px"}}>
                        <img src="../images/ewiLogo.jpeg" alt="Edison Welding Institure Logo" style={{height: "100px", width: "150px", borderRadius: "10px"}} />
                        <ListItemText primary="Edison Welding Institute" secondary="(2015-2017)" sx={{marginLeft: "20px"}}/>
                    </ListItem>
                    <ListItem sx={{backgroundColor: "white", borderRadius: "10px", padding: "20px", marginTop: "20px"}}>
                        <img src="../images/varnum.jpeg" alt="Varnum Logo" style={{height: "100px", width: "150px", borderRadius: "10px"}} />
                        <ListItemText primary="Varnum, Riddering, Schmidt, Howlett, LLP" secondary="(2004)" sx={{marginLeft: "20px"}}/>
                    </ListItem>
                    <ListItem sx={{backgroundColor: "white", borderRadius: "10px", padding: "20px", marginTop: "20px"}}>
                        <img src="../images/vanDykeLogo.jpeg" alt="Varnum Logo" style={{height: "100px", width: "150px", borderRadius: "10px"}} />
                        <ListItemText primary="Van Dyke, Gardner, Linn & Burkhart, LLP" secondary="(2003)" sx={{marginLeft: "20px"}}/> 
                    </ListItem>
                </List>
            </Box>
        </Container>
    );
}

export default ClientsPage;