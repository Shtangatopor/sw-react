import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "@material-ui/core";

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Времена года в России</p>
                </header>

                <div className='button'>
                    <Button>Зима</Button>
                    <Button>Весна</Button>
                    <Button>Лето</Button>
                    <Button>Осень</Button>
                </div>
            </div>
        );
    }
}

export default App;
