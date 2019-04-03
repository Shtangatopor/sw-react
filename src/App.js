import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "@material-ui/core";

const WEATHER_DATA = {
    winter : 'https://www.varlamov.me/2016/snegopad/24.jpg',
    spring : 'https://2ch.hk//b/src/188214838/15450275487203.jpg',
    summer : 'https://varlamov.me/2018/murmansk_ploh/00s.jpg',
    autumn : 'https://varlamov.me/2017/piter_dirt/12.jpg',
};

class App extends Component {

    state = {
        season: 'winter',
    };
    handleChange = () => {
        console.log('click');
    };

    render() {
        const {season} = this.state;


        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Времена года в России</p>
                </header>

                <div className='button'>
                    <Button onClick={this.handleChange}>Зима</Button>
                    <Button onClick={this.handleChange}>Весна</Button>
                    <Button onClick={this.handleChange}>Лето</Button>
                    <Button onClick={this.handleChange}>Осень</Button>
                </div>
                <div>
                    <h3>image</h3>
                    <img src={WEATHER_DATA[season]} alt={season}/>
                </div>
            </div>

        );
    }
}

export default App;
