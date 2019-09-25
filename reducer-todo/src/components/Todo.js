import React, {useState, useReducer} from "react";
import { todoFormReducer, initialTodoState } from "../reducers/reducer";


import TodoForm from "./TodoForm";

const Todo = () => {

    const [todoItem, setTodoItem] = useState('');
    const [state, dispatch] = useReducer(todoFormReducer, initialTodoState);


    const addTodo = todo => {setTodoItem([...todoItem, todo])};

    return (
        <div>  
            <h1>Simple Todo List</h1>   
             <TodoForm addTodo={addTodo} />
            
        </div>
            
    )



}

export default Todo