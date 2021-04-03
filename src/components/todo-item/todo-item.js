import React from 'react';
import './todo-item.css';

const TodoItem = ({todo, OnDoneTodo, OnImportantTodo, OnDeleteTodo}) => {

    let done, important;  

    if(todo?.done){
        done = 'todos-label-done';
    }

    if(todo?.important){
        important = 'todos-label-important';
    }

    return (
        <li className="todos-item">
            <span className={`todos-label ${done} ${important}`}
                  onClick={() => OnDoneTodo(todo?.id)}>
                  {todo?.label}
            </span>
            <div className="todos-container">
                <i className="far fa-star" onClick={() => OnImportantTodo(todo?.id)}></i>
                <i className="far fa-trash-alt" onClick={() => OnDeleteTodo(todo?.id)}></i>    
            </div>
        </li>
    );
}

export default TodoItem;