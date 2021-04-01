import React from 'react';
import './todoitem.css';

const TodoItem = ({todo, OnDoneTodo, OnImportantTodo, OnDeleteTodo}) => {

    let done, important;  

    if(todo?.done){
        done = 'todos__label_done';
    }

    if(todo?.important){
        important = 'todos__label_important';
    }

    return (
        <li className="todos__item">
            <span className={`todos__label ${done} ${important}`}
                  onClick={() => OnDoneTodo(todo?.id)}>
                  {todo?.label}
            </span>
            <div className="todos__container">
                <i className="far fa-star" onClick={() => OnImportantTodo(todo?.id)}></i>
                <i className="far fa-trash-alt" onClick={() => OnDeleteTodo(todo?.id)}></i>    
            </div>
        </li>
    );
}

export default TodoItem;