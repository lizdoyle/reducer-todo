export const initialTodoState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
};


export const todoFormReducer = (state, action) => {
    switch (action.type) {
        case "DEFAULT_ACTION":
            return{
                ...state,
                blankstate: "default"
            }
        default:
            return state;
    }

}