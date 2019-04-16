import '../App.css';
import withStyles from "@material-ui/core/es/styles/withStyles";
import React from 'react';
import {Link} from "react-router-dom";

const styles = theme => ({
    root:{
        backgroundColor: 'green',
        padding: "none", position:"absolute", bottom: "105px", width: "1024px",
        opacity: '0'
},
expected: {
    backgroundColor: 'blue',
        float: "left",
        height: '250px',
        width: '50%',

},
reality: {
    backgroundColor: 'red',
        float: "right",
        height: '250px',
        width: '50%',

}
});

function Choice(props) {
    const { classes } = props;
    return(
        <div className={classes.root}>
            <Link to='/expected' className={classes.expected} >expected</Link>
            <Link to='/reality' className={classes.reality}>reality</Link>
        </div>
    );
};

export default withStyles(styles)(Choice);