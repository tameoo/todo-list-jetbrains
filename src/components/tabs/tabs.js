import React, { useState } from 'react';
import './tabs.css';

const Tabs = ({OnFilterTodo}) => {

    const [{all, active, done}, setTabs] = useState({all: true, active: false, done: false});

    const clazz = 'tabs__btn_active';


    const OnSetAll = () => {
        OnFilterTodo('all');
        setTabs({all: true, active: false, done: false})
    }
    
    const OnSetActive = () => {
        OnFilterTodo('active');
        setTabs({all: false, active: true, done: false})
    }

    const OnSetDone = () => {
        OnFilterTodo('done');
        setTabs({all: false, active: false, done: true})
    }

    return (
        <div className="tabs">
            <div className={`tabs__btn  ${all && clazz}`} onClick={() => OnSetAll()}>All</div>
            <div className={`tabs__btn  ${active  && clazz}`} onClick={() => OnSetActive()}>Active</div>
            <div className={`tabs__btn  ${done && clazz}`} onClick={() => OnSetDone()}>Done</div>
        </div>
    );
}

export default Tabs;