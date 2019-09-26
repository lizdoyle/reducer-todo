import React, {useReducer} from 'react';
import './App.css';
import { todoFormReducer, initialTodoState } from "./reducers/reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";


function App() {

  const [state, dispatch] = useReducer(todoFormReducer, initialTodoState);
  const toggle = id => dispatch({type: "TOGGLE_TODO", payload: id});
  const addTodo = item => dispatch({ type: "ADD_TODO", payload: item });
  const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });


  return (
    <div className="App">
      <h1> Simple Todo List</h1>
      <h4> Add Your Todo Below!</h4>
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted}/>
      <TodoList todos={state.todos} toggle={toggle}/>
    </div>
  );
}

export default App;
