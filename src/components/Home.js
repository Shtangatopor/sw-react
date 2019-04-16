import React from "react";
import '../App.css';
import Choice from './Choise';
import Header from "./Header";




const Home = () => {
    return(
        <div className="App-Home" >
            <Header/>
            <img src="https://www.meme-arsenal.com/memes/bd22332b528d413b8e7ca7fb0a7ccf58.jpg" alt='morpheus'/>
            <Choice />
        </div>
    )
};

export default Home;