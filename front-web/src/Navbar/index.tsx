import './styles.css';
import { ReactComponent as Logo, ReactComponent} from './logo.svg';
import React from 'react';

function Navbar() {
    return (
        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default Navbar;