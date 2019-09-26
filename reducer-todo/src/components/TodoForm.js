import React, { useState } from "react";


const TodoForm = ({addTodo, clearCompleted}) => {

    const [item, setItem] = useState('');

    const handleClear = e => {
        e.preventDefault();
        clearCompleted();
    }

    const submitForm = e => {
        e.preventDefault();
        addTodo(item);
        setItem("");
    }


    return (
        <form onSubmit={submitForm}>
            <input 
                type="text" 
                name="item"
                placeholder="Add New Todo Item" 
                onChange={e => setItem(e.target.value)}
                value={item} />

            <button className="todo-add" type="submit"> Add Todo Item</button>
            <button className="todo-clear" onClick={handleClear}> Clear Todo Item</button>

        </form>
    )
}

export default TodoForm