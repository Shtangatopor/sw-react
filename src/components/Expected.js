import React, {useState} from 'react';
import '../App.css';
import {Button} from "@material-ui/core";
import ImageLoader from 'react-load-image';
import withStyles from "@material-ui/core/es/styles/withStyles";

const style = theme => ({
    App: {
        // color: 'white',
        backgroundColor: 'blue',
    }
});

const WEATHER_DATA = {
    winter : 'https://ribttes.com/wp-content/uploads/2015/01/White-Snowy-Winters-in-Russia.jpg',
    spring : 'https://ak9.picdn.net/shutterstock/videos/31300519/thumb/1.jpg',
    summer : 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/11/Best-Time-To-Visit8.jpg',
    autumn : 'http://earth-chronicles.com/wp-content/uploads/2016/09/K6CeZZvXmYQ.jpg',
};

function Preloader(props) {
    const spiner = require('../public/spinner.gif');
    return <img src={spiner} alt='spiner'/> ;
}

function Expected(props) {
    const [season, setSeason] = useState('winter');

        return (
            <div >
                <h4 style={{ padding: '16px'}}>История закончится прямо здесь </h4>
                <div className='App-button'>
                    <Button value={'winter'} onClick={(e) => setSeason(e.currentTarget.value)}>Зима</Button>
                    <Button value={'spring'} onClick={(e) => setSeason(e.currentTarget.value)}>Весна</Button>
                    <Button value={'summer'} onClick={(e) => setSeason(e.currentTarget.value)}>Лето</Button>
                    <Button value={'autumn'} onClick={(e) => setSeason(e.currentTarget.value)}>Осень</Button>
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

export default withStyles(style)(Expected);