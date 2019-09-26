import React, { useReducer } from "react";

import { todoFormReducer, initialTodoState } from "../reducers/reducer";



const TodoForm = (props) => {

    const [state, dispatch] = useReducer(todoFormReducer, initialTodoState);


    const handleChange = e => {
        dispatch({...state, [e.target.name]: e.target.value});
    }

    const submitForm = e => {
        e.preventDefault();

        const newTodo = {
            ...state,
            id: Date.now()
        }

        props.addTodo(newTodo)
    }


    return (
        <form onSubmit={submitForm}>
            <input 
                type="text" 
                placeholder="Add New Todo Item" 
                value={props.item}
                onChange={handleChange} />
            <input
                type="checkbox"
                value={props.completed}
                onChange={handleChange} />
            <p>{props.id} </p>

            <button onClick={() => dispatch({type: " "})}> Add Todo Item</button>
        </form>
    )
}

export default TodoForm