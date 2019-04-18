import React, {useState} from 'react';
import '../App.css';
import {Button} from "@material-ui/core";
import ImageLoader from 'react-load-image';


const __weatherData = {
    winter : 'https://ribttes.com/wp-content/uploads/2015/01/White-Snowy-Winters-in-Russia.jpg',
    spring : 'https://ak9.picdn.net/shutterstock/videos/31300519/thumb/1.jpg',
    summer : 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/11/Best-Time-To-Visit8.jpg',
    autumn : 'http://earth-chronicles.com/wp-content/uploads/2016/09/K6CeZZvXmYQ.jpg',
};

const Preloader = () => {
    const spiner = require('../public/spinner.gif');
    return <img src={spiner} alt='spiner'/> ;
};

const Reality = () => {
    const [season, setSeason] = useState('winter');

        return (
            <div>
                <h4>Добро пожаловать в реальность </h4>
                <div className='button'>
                    <Button value={'winter'} onClick={(e) => setSeason(e.currentTarget.value)}>Зима</Button>
                    <Button value={'spring'} onClick={(e) => setSeason(e.currentTarget.value)}>Весна</Button>
                    <Button value={'summer'} onClick={(e) => setSeason(e.currentTarget.value)}>Лето</Button>
                    <Button value={'autumn'} onClick={(e) => setSeason(e.currentTarget.value)}>Осень</Button>
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
