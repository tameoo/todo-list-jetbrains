import React, { useState } from 'react';
import './tabs.css';

const Tabs = ({OnFilterTodo, OnToggleBarChart}) => {

    const [{all, active, done}, setTabs] = useState({all: true, active: false, done: false});
    const clazz = 'tabs-btn-active';

    const OnSetAll = () => {
        OnFilterTodo('all');
        setTabs({all: true, active: false, done: false});
    }
    
    const OnSetActive = () => {
        OnFilterTodo('active');
        setTabs({all: false, active: true, done: false});
    }

    const OnSetDone = () => {
        OnFilterTodo('done');
        OnToggleBarChart();
        setTabs({all: false, active: false, done: true});
    }

    return (
        <ul className="tabs">
            <li className={`tabs-btn ${all ? clazz : 'close'}`} onClick={() => OnSetAll()}>All</li>
            <li className={`tabs-btn ${active ? clazz : 'close'}`} onClick={() => OnSetActive()}>Active</li>
            <li className={`tabs-btn ${done ? clazz : 'close'}`} onClick={() => OnSetDone()}>Done</li>
        </ul>
    );
}

export default Tabs;