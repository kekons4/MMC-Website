import { makeStyles } from "@mui/styles";
import HomePageContentsPanel from "../Components/homePageContentsPanel";
import { BorderRight } from "@mui/icons-material";

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
    HomePageContentsPanel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        color: '#d32f2f',
        // border: "1px black solid",
        position: "fixed"
    },
    HomePageContentsPanelTitle: {
        padding: "0px",
        margin: "0px"
    },
    HomePageContentsPanelList: {
        listStyleType: "none",
        borderLeft: "1px #d32f2f solid",
        padding: "5px",
        marginLeft: "3rem"
    },
    HomePageContentsPanelText: {
        color: '#d32f2f',
        textDecoration: "none",
        // padding: "5px",
        '&:hover': {
            textDecoration: "underline",
            color: "red"
        }
    },
    footer: {
        backgroundColor: "#607d8b",
        padding: "50px 0"
    }
}));

export default useStyles;