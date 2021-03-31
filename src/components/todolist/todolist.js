import React from 'react';
import TodoItem from '../todoitem';
import './todolist.css';

const Todolist = ({todos,OnDeleteTodo}) => {

    const todosItemsBuild = (todos) => {
        return todos.map((todo, i ) => {
            return <TodoItem todo={todo} key={i++} OnDeleteTodo={OnDeleteTodo} />;
        });
    }
    
    let text = "To-do tasks";
    
    if(todos.length === 0){
        text = "No to-do tasks";
    }

    return (
        <ul className="todos">
            <h2 className="todos__header">{text}</h2>
           { todosItemsBuild(todos) }
        </ul>
    );
}

export default Todolist;