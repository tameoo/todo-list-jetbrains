import React, { useEffect, useState } from 'react';
import Header from '../app-header';
import Tabs from '../tabs';
import Todolist from '../todolist';
import Form from '../form';
import { getTodo, postTodo, deleteTodo} from '../../service';
import './app.css';

const App = () => {
    
    const [todos, setTodos] = useState([]);

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

            postTodo(newTodo);
            setTodos([...todos,newTodo]);

            e.target.reset();
        }
    }

    const OnDeleteTodo = (id) => {
        const index = todos.findIndex(el => el.id === id);
        setTodos([...todos.slice(0, index),...todos.slice(index + 1, todos.length)]);
        deleteTodo(id);
    }

    const active = todos.filter(el => !el.done).length;
    const done = todos.filter(el => el.done).length;

    return (
        <div className="app">
            <div className="app__container">
               <Tabs />
               <Header active={active} done={done} />
               <Form OnSubmitTodo={OnSubmitTodo} />
               <Todolist todos={todos} OnDeleteTodo={OnDeleteTodo}/>
           </div>
        </div>
    );
}



export default App;