import React from "react";
import '../App.css';
import Header from "./Header";
import {Link} from "react-router-dom";


const Home = () => {
    return (
        <div className="App-Home">
            <Header/>
            <svg viewBox="0 0 724 672">
                <image x="0" y="0" width="724" height="672"
                       xlinkHref="https://www.meme-arsenal.com/memes/bd22332b528d413b8e7ca7fb0a7ccf58.jpg"/>
                <Link to='/expected'>
                    <rect x="0" y="0" width="50%" height="100%"
                          opacity="0"
                          fill="blue"/>
                </Link>

                <Link to='/reality'>
                    <rect x="50%" y="0" width="50%" height="100%"
                          opacity="0"
                          fill="red"/>
                </Link>



            </svg>


        </div>
    )
};

export default Home;