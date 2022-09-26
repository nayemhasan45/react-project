import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className="header">
            <img src={logo} alt="" />
            <div className='navLink'>
                <a href="/home">home</a>
                <a href="/inventory">inventory</a>
                <a href="/shop">shop</a>
                <a href="/about">about</a>
            </div>
        </nav>
    );
};

export default Header;