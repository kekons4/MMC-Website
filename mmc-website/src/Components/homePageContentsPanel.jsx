import useStyles from "../utils/styles";

function HomePageContentsPanel() {
    const classes = useStyles();

    return (
        <div className={classes.HomePageContentsPanel}>
            <h3 className={classes.HomePageContentsPanelTitle}>Contents:</h3>
            <ul className={classes.HomePageContentsPanelList}>
                <a href="#mission" className={classes.HomePageContentsPanelText}><li>Our Mission</li></a>
                <a href="#typeofproblems" className={classes.HomePageContentsPanelText}><li>Problems Solved</li></a>
                <a href="#examplesOfProblemsSolved" className={classes.HomePageContentsPanelText}><li>Examples of Problems</li></a>
            </ul>
        </div>
    );
}

export default HomePageContentsPanel;