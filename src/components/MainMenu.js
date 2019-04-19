import React, {useState} from "react";
import {AppBar, Drawer, IconButton, ListItem, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItemIcon from '@material-ui/core/ListItemIcon';

const MainMenu = () => {
    const [open, toggleDrawer] = useState(false);
    const close = () => {toggleDrawer(false)};
    return(
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton onClick={() => {toggleDrawer(true)}}><MenuIcon/></IconButton>
                    <Drawer anchor='left' open={open} onClose={close}>
                        <List>
                            <a href='/'>
                                <ListItem button onClick={close}>Home</ListItem>
                            </a>
                            <ListItem button >
                                <ListItemIcon>
                                    <Link to={'/expected'} onClick={close}>Expected</Link>
                                </ListItemIcon>
                            </ListItem>

                            <ListItem button  onClick={close}>
                                <ListItemIcon>
                                    <Link to={'/reality'} >Reality</Link>
                                </ListItemIcon>
                            </ListItem>
                        </List>
                    </Drawer>
                    <Typography variant='h5' color='inherit'>App bar</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default MainMenu;