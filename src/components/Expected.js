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

const Expected = ()  => {
    const [season, setSeason] = useState('winter');
    const set = (e) => setSeason(e.currentTarget.value);
        return (
            <div >
                <h4 style={{ padding: '16px'}}>История закончится прямо здесь </h4>
                <div>
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

export default Expected;