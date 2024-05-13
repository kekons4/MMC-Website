import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#efefef",
        padding: theme.spacing(8, 0, 6)
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