import { useState } from 'react';
import {Typography, List, ListItem, ListItemText, Container, Box} from '@mui/material';

// User Defined modules
import useStyles from '../utils/styles';

function ClientsPage() {
    const classes = useStyles();

    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);

    return (
        <Container maxWidth="2xl" sx={{marginTop: "4rem", padding: "4rem", backgroundColor: "#efefef", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Box>
                <Typography variant='h2' component="div" align="center" sx={{fontFamily: "Cabin", marginBottom: "1rem"}}>
                    Our <span className={classes.consulting}>Clients</span>
                </Typography>
                <Typography variant='p' component="div" align='center' sx={{fontFamily: "Cabin", fontSize: {xs: "10px", sm: "15px", md: "20px"}}}>
                    We have worked with multiple companies in multiple industries. 
                </Typography>
                <Typography variant='p' component="div" align='center' sx={{fontFamily: "Cabin"}}>
                     <b>Automotive, Aerospace, Defense, Law Firms, and Materials</b>
                </Typography>
            </Box>
            <Box>
                <List dense={dense} sx={{border: "1px black solid", maxWidth: "700px"}}>
                    <ListItem>
                        <ListItemText primary="Kaiser Corp." secondary="(2024 - Present)"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="GM Corp." secondary="(2021-2022)"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Honda Corp." secondary="(2019-2021)"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Honda R&D Americas, Inc." secondary="(2017-2019)"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Edison Welding Institute" secondary="(2015-2017)"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Varnum, Riddering, Schmidt, Howlett, LLP" secondary="(2004)"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Van Dyke, Gardner, Linn & Burkhart, LLP" secondary="(2003)"/> 
                    </ListItem>
                </List>
            </Box>
        </Container>
    );
}

export default ClientsPage;