import React from 'react';
import './App.css';
import {MainLayout} from "./components/MainLayout";
import MainMenu from "./components/MainMenu";

const App = () => (
    <div className="App">
        <MainMenu/>

        <MainLayout/>
    </div>
);


export default App;
