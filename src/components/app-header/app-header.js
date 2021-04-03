import React from 'react';
import './app-header.css';

const Header = ({active, done}) => {
    return (
        <div className="header">
            <div className="header-logo">
            To-do List
            </div>
            <div className="header-counter">
                {active} active, {done} done.
            </div>
        </div>
    );
}

export default Header;