import React from 'react';
import './Header.css';
import logo from'../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} />

            <div>
                <a href="Shop">Shop</a>
                <a href="Order">Orders</a>
                <a href="Inventory">Inventory</a>
                <a href="Login">Login</a>
            </div>
            
        </nav>
    );
};

export default Header;