export const initialTodoState = {
    todos: [ 
        {
            item: 'Learn about reducers',
            completed: true,
            id: 3892987589
        },
        {
            item: 'Learn about react',
            completed: true,
            id: 3892987589
        },
        {
            item: 'Learn about redux',
            completed: false,
            id: 3892987589
        }
    ]
}


export const todoFormReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return{
                ...state,
                /*to change the name to targetval*/
                todos: state.todos.concat({item: action.payload, completed: false, id: Date.now() })
            }
        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map(todo => (
                    todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
                ))
            }
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: state.todos.filter(({completed}) => !completed)
            }
        default:
            return state;
    }

}