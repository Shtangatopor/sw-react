import React, {useState} from 'react';
import '../App.css';
import {Button} from "@material-ui/core";
import ImageLoader from 'react-load-image';


const __weatherData = {
    winter : 'https://www.varlamov.me/2016/snegopad/24.jpg',
    spring : 'https://2ch.hk//b/src/188214838/15450275487203.jpg',
    summer : 'https://varlamov.me/2018/murmansk_ploh/00s.jpg',
    autumn : 'https://varlamov.me/2017/piter_dirt/12.jpg',
};

const Preloader = () => {
    const spiner = require('../public/spinner.gif');
    return <img src={spiner} alt='spiner'/> ;
};

const Reality = () => {
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
                    <ImageLoader src={__weatherData[season]}>
                        <img alt={__weatherData[season]}/>
                        <div>Error!</div>
                        <Preloader />
                    </ImageLoader>
                </div>
            </div>
        );
};

export default Reality;
