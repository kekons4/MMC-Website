import { useEffect, useState } from 'react';
import {Typography} from '@mui/material';

// User Defined modules
import useStyles from '../utils/styles';

function Footer() {
    const classes = useStyles();
    const [currentYear, setYear] = useState("");

    useEffect(() => {
        // Grabs the current year and sets it in the footer
        let currentDate = new Date();
        setYear(currentDate.getFullYear());
    }, []);

    return (
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom className={classes.footerText}>
              &copy; {currentYear} Materials and Manufactoring <span className={classes.consulting}>Consulting</span> L.L.C.
          </Typography>
          {/* <Typography variant='h6' align='center' sx={{fontSize: "14px"}} gutterBottom>
                created by <a href='https://www.google.com'>Keyboard Cowboy Consulting</a>
          </Typography> */}
        </footer>
    );
}

export default Footer;