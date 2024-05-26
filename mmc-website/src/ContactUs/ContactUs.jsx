import { useState } from "react";
import { Container, Typography, Box, TextField, MenuItem, InputLabel, FormControl, Select, Button } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';

// User Defined Modules
import useStyles from "../utils/styles";

function ContactUs() {
    const classes = useStyles();

    const [industry, setIndustry] = useState('');

    const handleChange = (event) => {
        setIndustry(event.target.value);
    };

    return (
        <Container maxWidth="2xl" sx={{backgroundColor: "#efefef", marginTop: "2rem", padding: "4rem", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <FormControl variant="standard" sx={{borderRadius: "10px", padding: "30px", backgroundColor: "white", display: "flex", flexDirection: "column", gap: "20px", boxShadow: "2px 2px 15px -3px black"}}>
                <Typography variant="h2" component="div" align="center" sx={{fontFamily: "Cabin"}}>
                    Contact <span className={classes.consulting}>Us</span>
                </Typography>
                <Typography variant="p" component="div" align="center" sx={{fontFamily: "Cabin", fontSize: {xs: "12px", sm: "15px", md: "20px"}}}>
                    If you have and business queries please contact us by entering your information in the form below. 
                </Typography>
                
                <TextField 
                    id="standard-basic" 
                    label="Full Name" 
                    variant="outlined"  
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <AccountCircle />
                        </InputAdornment>
                        ),
                    }}
                    />
                <TextField 
                    id="standard-basic" 
                    label="Email" 
                    variant="outlined"
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <MailOutlineIcon />
                        </InputAdornment>
                        ),
                    }} 
                    />
                <TextField 
                    id="standard-basic" 
                    label="Company" 
                    variant="outlined"
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <WorkIcon />
                        </InputAdornment>
                        ),
                    }} 
                    />
                <FormControl variant="standard">
                    <InputLabel id="industry-label">Industry</InputLabel>
                    <Select
                        labelId="industry-label"
                        id="industry"
                        value={industry}
                        onChange={handleChange}
                        autoWidth
                        label="Industry"
                        variant="outlined"
                        >
                            <MenuItem value="aerospace">Aerospace</MenuItem>
                            <MenuItem value="automotive">Automotive</MenuItem>
                            <MenuItem value="defense">Defense</MenuItem>
                            <MenuItem value="law">Law</MenuItem>
                            <MenuItem value="materials">Materials</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                    </Select>
                </FormControl>
                <TextField 
                    multiline 
                    id="message" 
                    label="Message" 
                    variant="outlined" 
                    rows={6}
                    />
                <Button endIcon={<SendIcon />} variant="outlined" sx={{color: "#d32f2f", border: "1px #d32f2f solid", "&:hover": {color: "red", border: "1px red solid", backgroundColor: "#efefef", fontWeight: "900"}}}>Send</Button>
            </FormControl>
        </Container>
    );
}

export default ContactUs;