import React from 'react';
import TodoItem from '../todoitem';
import './todolist.css';

const Todolist = ({todos, OnDoneTodo, OnImportantTodo, OnDeleteTodo}) => {

    const todosItemsBuild = (todos) => {
        return todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} OnDoneTodo={OnDoneTodo} OnImportantTodo={OnImportantTodo} OnDeleteTodo={OnDeleteTodo} />;
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