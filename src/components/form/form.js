import React from 'react';
import './form.css';

const Form = ({OnSubmitTodo}) => {

    return (
        <form className="form" autoComplete="off" onSubmit={(e) => OnSubmitTodo(e, e.target['todo'].value)}>
            <input className="form__input" name="todo" type="text" placeholder="Add to-do here"/>
            <button className="btn form__btn">Add</button>
        </form>
    );
}

export default Form;