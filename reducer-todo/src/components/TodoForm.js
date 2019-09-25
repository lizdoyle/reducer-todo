import React, {useState} from "react";



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
        <form>
            <input type="text" placeholder="Add New Todo Item"/>
            <button> Add Todo Item</button>
        </form>
    )
}

export default TodoForm