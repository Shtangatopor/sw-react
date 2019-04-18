import React from "react";
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';


function MainMenu() {

    return(
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h4' color='inherit'>App bar</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

MainMenu.propTypes = {

};

export default MainMenu;