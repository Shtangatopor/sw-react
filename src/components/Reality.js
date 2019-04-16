import React, {useState} from 'react';
import '../App.css';
import {Button} from "@material-ui/core";
import ImageLoader from 'react-load-image';


const WEATHER_DATA = {
    winter : 'https://www.varlamov.me/2016/snegopad/24.jpg',
    spring : 'https://2ch.hk//b/src/188214838/15450275487203.jpg',
    summer : 'https://varlamov.me/2018/murmansk_ploh/00s.jpg',
    autumn : 'https://varlamov.me/2017/piter_dirt/12.jpg',
};

function Preloader(props) {
    const spiner = require('../public/spinner.gif');
    return <img src={spiner} alt='spiner'/> ;
}

export default function Reality() {
    const [season, setSeason] = useState('winter');

        return (

            <div style={{backgroundColor: 'black'}} >
                <h4 style={{color: 'white', padding: '16px'}}>Добро пожаловать в реальность </h4>
                <div className='button'>
                    <Button style={{color: 'white'}} value={'winter'} onClick={(e) => setSeason(e.currentTarget.value)}>Зима</Button>
                    <Button style={{color: 'white'}} value={'spring'} onClick={(e) => setSeason(e.currentTarget.value)}>Весна</Button>
                    <Button style={{color: 'white'}} value={'summer'} onClick={(e) => setSeason(e.currentTarget.value)}>Лето</Button>
                    <Button style={{color: 'white'}} value={'autumn'} onClick={(e) => setSeason(e.currentTarget.value)}>Осень</Button>
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
