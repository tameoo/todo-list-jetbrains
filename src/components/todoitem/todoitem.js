import React, { useState, useEffect } from 'react';
import { updateTodo } from '../../service';
import './todoitem.css';

const TodoItem = ({todo,OnDeleteTodo}) => {

    const [todoObj, setTodoObj] = useState({});

    useEffect(() => {
        setTodoObj(todo)
    },[todo]);


    const OnDoneTodo = (id) => {
        const withDone = {
            ...todoObj,
            done: !todoObj.done
        }
        setTodoObj(withDone);
        updateTodo(id, withDone);
    }
    
    const OnImportantTodo = (id) => {
        const withImortant = {
            ...todoObj,
            important: !todoObj.important
        }
        setTodoObj(withImortant);
        updateTodo(id, withImortant);
    }

    let done, important;  

    if(todoObj?.done){
        done = 'todos__label_done';
    }

    if(todoObj?.important){
        important = 'todos__label_important';
    }

    return (
        <li className="todos__item">
            <span className={`todos__label ${done} ${important}`}
                  onClick={() => OnDoneTodo(todoObj?.id)}>
                  {todoObj?.label}
            </span>
            <div className="todos__container">
                <i className="far fa-star" onClick={() => OnImportantTodo(todoObj?.id)}></i>
                <i className="far fa-trash-alt" onClick={() => OnDeleteTodo(todoObj?.id)}></i>    
            </div>
        </li>
    );
}

export default TodoItem;