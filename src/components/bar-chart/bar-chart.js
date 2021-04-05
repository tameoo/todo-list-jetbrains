import React from 'react';
import './bar-chart.css';

const BarChart = ({todos, hideBarChart,OnToggleBarChart}) => {
    
    const charts = todos.map(todo => todo.completed_date);
    const week = [1,2,3,4,5,6,7];
    const graphs = [];
    
    for (let i = 0; i < week.length; i++) {
        let counter = 0;

        for (let j = 0; j < charts.length; j++) {
            if(week[i] === charts[j]){
                counter++;
            }
        }       
        graphs.push(counter);
    }
    
    return (
        <div className={`overlay ${hideBarChart ? 'hide' : 'show'}`}>
            <div className="bar">
                <i className="fal fa-times bar-btn" 
                    onClick={() => OnToggleBarChart()}>
                </i>
                <ul className="bar-counter">
                    <li className="bar-count">12</li>
                    <li className="bar-count">10</li>
                    <li className="bar-count">8</li>
                    <li className="bar-count">6</li>
                    <li className="bar-count">4</li>
                    <li className="bar-count">2</li>
                    <li className="bar-count">0</li>
                </ul>
                <ul className="bar-list-items">
                    <BarChartItem graphs={graphs}/>
                </ul>
                <ul className="bar-list-names">
                    <li className="bar-name">Monday</li>
                    <li className="bar-name">Tuesday</li>
                    <li className="bar-name">Wednesday</li>
                    <li className="bar-name">Thursday</li>
                    <li className="bar-name">Friday</li>
                    <li className="bar-name">Saturday</li>
                    <li className="bar-name">Sundays</li>
                </ul>
            </div>
        </div>
    );
}

const BarChartItem = ({graphs}) => {
    return graphs.map((el, i) => {
        let height = el * 27;
        
        if(height === 0) {
            height = 5;
        }
        
        return (
            <li key={i} className="bar-item" data-height={`${height}px`} style={{height: `${height}px`}}></li>
        );
    });
}

export default BarChart;