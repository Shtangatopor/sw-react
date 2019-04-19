import React, {useState} from "react";
import {AppBar, Drawer, IconButton, ListItem, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import {List, ListItemText } from "@material-ui/core/List";

const MainMenu = () => {
    const [open, toggleDrawer] = useState(false);
    const close = () => {toggleDrawer(false)};
    return(
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton onClick={() => {toggleDrawer(true)}}><MenuIcon/></IconButton>
                    <Drawer anchor='left' open={open} onClose={close}>
                        <Link to='/' onClick={close}>Home<ListItem button /></Link>
                        <Link to='/expected' onClick={close}>Expected<ListItem button /></Link>
                        <Link to='/reality' onClick={close}>Reality<ListItem button /></Link>
                    </Drawer>
                    <Typography variant='h5' color='inherit'>App bar</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default MainMenu;