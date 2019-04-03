import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "@material-ui/core";
import Root from "./Root";

const WEATHER_DATA = {
    winter : 'https://www.varlamov.me/2016/snegopad/24.jpg',
    spring : 'https://2ch.hk//b/src/188214838/15450275487203.jpg',
    summer : 'https://varlamov.me/2018/murmansk_ploh/00s.jpg',
    autumn : 'https://varlamov.me/2017/piter_dirt/12.jpg',
};

class App extends Component {
    state = {
        season: 'winter',
        isLoading: false,
    };

    handleChange = (e) => {
        console.log('click');
        this.setState({
            season: e.currentTarget.value,
        });
    };

    componentDidMount() {
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('next props');
    }
    componentWillUnmount(){
        console.log('unmount');
    }

    render() {
        const {season} = this.state;
        console.log(this.state);

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
                    <Root imgUrl={WEATHER_DATA[season]} />
                </div>
            </div>

        );
    }
}

export default App;
