import React from 'react';
import TodoItem from '../todo-item';
import './todo-list.css';

const TodoList = ({todos, OnDoneTodo, OnImportantTodo, OnDeleteTodo}) => {

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
        <>
            <h2 className="todos-header">{text}</h2>
            <ul className="todos">
                { todosItemsBuild(todos) }
            </ul>
        </>
    );
}

export default TodoList;