import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: "#607d8b"
    },
    container: {
        backgroundColor: "#efefef",
        padding: theme.spacing(14, 0, 6),
        fontFamily: "Cabin"
    },
    consulting: {
        color: "#d32f2f",
        fontWeight: "400",
        fontFamily: "Cabin"
    },
    heroCaption: {
        fontWeight: "400",
        fontSize: {
            xs: "0.3rem",
            sm: "1rem",
            md: "1.2rem"
        },
        marginTop: "5px",
        marginBottom: "5px",
        width: "100%"
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