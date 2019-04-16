import React from "react";
import { Switch, Route } from 'react-router-dom';
import Expected from "./Expected";
import Reality from "./Reality";
import Home from "./Home";


export const MainLayout = () => {
    return(
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/expected' component={Expected}/>
                <Route exact path='/reality' component={Reality}/>
            </Switch>
        </main>
    );
};