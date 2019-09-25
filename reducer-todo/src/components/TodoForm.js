import React, {useState, useReducer} from "react";




const TodoForm = (props) => {

    const [todo, setTodo] = useState('');

    const handleChange = e => {
        setTodo({...todo, [e.target.name]: e.target.value});
    }

    const submitForm = e => {
        e.preventDefault();

        const newTodo = {
            ...todo,
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

            <button> Add Todo Item</button>
        </form>
    )
}

export default TodoForm