import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <div>
            <nav>
                <Link className="menu-item" to='/'>Home</Link>
                <Link className="menu-item" to='/addproduct'>Add Products</Link>
            </nav>
        </div>
    );
};

export default Header;