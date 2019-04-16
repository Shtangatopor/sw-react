import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Link} from "react-router-dom";


const Header = () => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/expected'>Expected</Link></li>
                <li><Link to='reality'>Reality</Link></li>
            </ul>
        </nav>
    </header>

);

export default Header;