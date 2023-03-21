

import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/service">Service</a>
                <a href="/about-us">About us</a>
                <a href="/contact-us">Contact</a>
            </nav>
        </div>
    );
};

export default Header;