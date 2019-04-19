import React, {useState} from "react";
import {AppBar, Drawer, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = theme => ({
    link: {
        padding: '16px',
    }
});

const MainMenu = ({classes}) => {
    const [open, toggleDrawer] = useState(false);
    const close = () => {toggleDrawer(false)};
    return(
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton onClick={() => {toggleDrawer(true)}}><MenuIcon/></IconButton>
                    <Drawer  anchor='left' open={open} onClose={close}>
                        <Link className={classes.link} onClick={close} to='/'>Home</Link>
                        <Link className={classes.link} onClick={close} to='/expected'>Expected</Link>
                        <Link className={classes.link} onClick={close} to='/reality'>Reality</Link>
                    </Drawer>
                    <Typography variant='h5' color='inherit'>App bar</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );

};

export default withStyles(styles)(MainMenu);