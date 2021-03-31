import React from 'react';
import './tabs.css';

const Tabs = () => {
    return (
        <div className="tabs">
            <div className="tabs__btn tabs__btn_active">All</div>
            <div className="tabs__btn">Done</div>
            <div className="tabs__btn">Active</div>
        </div>
    );
}

export default Tabs;