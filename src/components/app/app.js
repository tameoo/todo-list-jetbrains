import React, { useEffect, useState } from 'react';
import Header from '../app-header';
import Tabs from '../tabs';
import Todolist from '../todolist';
import Form from '../form';
import { getTodo, postTodo, updateTodo, deleteTodo} from '../../service';
import './app.css';

const App = () => {
    
    const [todos, setTodos] = useState([]);
    const [checking, setCheck] = useState('all');

    useEffect(() => {
        const fetchData = async ()=> {
            const data = await getTodo();
            
            setTodos(data);
        }

        fetchData();
    },[]);


    const OnSubmitTodo = (e, label) => {
        e.preventDefault();

        if(label !== '') {
            const newTodo = {
                id: Date.now(),
                label: label,
                done: false,
                important : false,
                date: new Date().getDay() 
            };
            
            e.target.reset();
            setTodos([...todos,newTodo]);
            postTodo(newTodo);
        }
    }

    const OnDeleteTodo = (id) => {
        const index = todoFindIndex(id);
        
        setTodos([...todos.slice(0, index), ...todos.slice(index + 1, todos.length)]);
        deleteTodo(id);
    }

    const OnDoneTodo = (id) => {
        const index = todoFindIndex(id);
        const withDone = {
            ...todos[index],
            done: !todos[index].done
        }

        setTodos([...todos.slice(0, index), withDone, ...todos.slice(index + 1, todos.length)]);
        updateTodo(id,withDone);
    }
    
    const OnImportantTodo = (id) => {
        const index = todoFindIndex(id);
        const withImportant = {
            ...todos[index],
            important: !todos[index].important
        }

        setTodos([...todos.slice(0, index), withImportant, ...todos.slice(index + 1, todos.length)]);
        updateTodo(id,withImportant);
    }

    const OnFilterTodo = (tab) => {
        setCheck(tab);
    }

    const todoFindIndex = (id) => {
        return todos.findIndex(el => el.id === id);
    }

    const modifyTodo = (todos, checking) => {
        switch(checking) {
            case 'active':
                return todos.filter(el => !el.done);
            case 'done':
                return todos.filter(el => el.done);
            default:
                return todos;
        }
    }

    const active = todos.filter(el => !el.done).length;
    const done = todos.filter(el => el.done).length;

    return (
        <div className="app">
            <div className="app__container">
               <Tabs OnFilterTodo={OnFilterTodo} />
               <Header active={active} done={done} />
               <Form OnSubmitTodo={OnSubmitTodo} />
               <Todolist todos={modifyTodo(todos, checking)} OnDoneTodo={OnDoneTodo} OnImportantTodo={OnImportantTodo} OnDeleteTodo={OnDeleteTodo} />
           </div>
        </div>
    );
}



export default App;