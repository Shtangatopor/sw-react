import React from "react";
import {AppBar, Drawer, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";


class MainMenu extends React.Component{

    state = {
        open: false,
    };

    toggleDrawer = (open) => () => {
        this.setState({
            open: open,
        });
    };


    render() {
        return(
            <div>
                <AppBar position='static'>

                    <Toolbar>

                        {/*{button}*/}
                        <IconButton onClick={this.toggleDrawer( true)}><MenuIcon/></IconButton>

                        {/*{submenu}*/}
                        <Drawer anchor='top' open={this.state.open} onClose={this.toggleDrawer(false)}>
                            <div>
                                <Link to={'/expected'}><h5>expected</h5></Link>
                                <Link to={'/reality'}><h5>reality</h5></Link>
                                <h5>2 item</h5>
                            </div>
                        </Drawer>


                        <Typography variant='h5' color='inherit'>App bar</Typography>
                    </Toolbar>

                </AppBar>
            </div>
        );
    }

};

export default MainMenu;