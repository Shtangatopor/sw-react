import React, {useState} from 'react';
import '../App.css';
import {Button} from "@material-ui/core";
import ImageLoader from 'react-load-image';


const __weatherData = {
    winter : 'https://www.varlamov.me/2016/snegopad/24.jpg',
    spring : 'https://static.mk.ru/upload/entities/2021/04/29/16/articles/detailPicture/95/a4/5f/a1/852db93a876d5c2aab3fe8c1106bb65d.jpg',
    summer : 'https://varlamov.me/2018/murmansk_ploh/00s.jpg',
    autumn : 'https://varlamov.me/2017/piter_dirt/12.jpg',
};

const Preloader = () => {
    const spiner = require('../public/spinner.gif');
    return <img src={spiner} alt='spiner'/> ;
};

const Reality = () => {
    const [season, setSeason] = useState('winter');
    const set = (e) => setSeason(e.currentTarget.value);
    return (
        <div>
            <h4>Добро пожаловать в реальность </h4>
            <div className='button'>
                <Button value={'winter'} onClick={set}>Зима</Button>
                <Button value={'spring'} onClick={set}>Весна</Button>
                <Button value={'summer'} onClick={set}>Лето</Button>
                <Button value={'autumn'} onClick={set}>Осень</Button>
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
