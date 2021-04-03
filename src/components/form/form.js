import React from 'react';
import './form.css';

const Form = ({OnSubmitTodo}) => {

    return (
        <form className="form" autoComplete="off" onSubmit={(e) => OnSubmitTodo(e, e.target['todo'].value)}>
            <input className="form-input" name="todo" type="text" placeholder="Add to-do here"/>
            <button className="btn form-btn">Add</button>
        </form>
    );
}

export default Form;