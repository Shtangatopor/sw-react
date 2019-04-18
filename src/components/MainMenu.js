import React, {useState} from "react";
import {AppBar, Drawer, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";

const MainMenu = () => {
    const [open, toggleDrawer] = useState(false);
        return(
            <div>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton onClick={() => {toggleDrawer(true)}}><MenuIcon/></IconButton>
                        <Drawer anchor='top' open={open} onClose={() => {toggleDrawer(false)}}>
                            <div>
                                <Link to={'/'}><h5>home</h5></Link>
                                <Link to={'/expected'}><h5>expected</h5></Link>
                                <Link to={'/reality'}><h5>reality</h5></Link>
                            </div>
                        </Drawer>
                        <Typography variant='h5' color='inherit'>App bar</Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
};

export default MainMenu;