import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: "#607d8b"
    },
    container: {
        backgroundColor: "#efefef",
        padding: theme.spacing(14, 0, 6)
    },
    consulting: {
        color: "#d32f2f",
        fontWeight: "400"
    },
    icon: {
        marginRight: '20px'
    },
    button: {
        marginTop: '40px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%' // 16:9 image
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: "white",
        padding: "50px 0"
    }
}));

export default useStyles;