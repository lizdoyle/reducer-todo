import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggle}) => {

    return (
        <div>
            {todos.map(todo => 
                <Todo key={todo.id} {...todo} toggle={toggle} />
                )}
        </div>
    )
}

export default TodoList