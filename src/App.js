import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "@material-ui/core";
import ImageLoader from 'react-load-image';


const WEATHER_DATA = {
    winter : 'https://www.varlamov.me/2016/snegopad/24.jpg',
    spring : 'https://2ch.hk//b/src/188214838/15450275487203.jpg',
    summer : 'https://varlamov.me/2018/murmansk_ploh/00s.jpg',
    autumn : 'https://varlamov.me/2017/piter_dirt/12.jpg',
};


function Preloader(props) {
    const spiner = require('./public/spiner.gif');
    return <img src={spiner} alt='spiner'/> ;
}


class App extends Component {
    state = {
        season: 'winter',
    };

    handleChange = (e) => {
        this.setState({
            season: e.currentTarget.value,
        });
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
                    <Button value={'winter'} onClick={this.handleChange}>Зима</Button>
                    <Button value={'spring'} onClick={this.handleChange}>Весна</Button>
                    <Button value={'summer'} onClick={this.handleChange}>Лето</Button>
                    <Button value={'autumn'} onClick={this.handleChange}>Осень</Button>
                </div>

                <div>
                    <ImageLoader src={WEATHER_DATA[season]}>
                        <img alt={WEATHER_DATA[season]}/>
                        <div>Error!</div>
                        <Preloader />
                    </ImageLoader>
                </div>

            </div>

        );
    }
}

export default App;
