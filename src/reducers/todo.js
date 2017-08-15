const initState = {
    todos: [
        {id: 1, name: 'Rendering static UI', isCompleted: true},
        {id: 2, name: 'Create initial state', isCompleted: true},
        {id: 3, name: 'Render based on state', isCompleted: false}
    ],
    currentTodo: 'temp'
};

const TODO_ADD = 'TODO_ADD';
const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val});

export default (state = initState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return {...state, todos: state.todos.concat(action.payload)};
        case CURRENT_UPDATE:
            return {...state, currentTodo: action.payload};
        default:
            return state;
    }
}