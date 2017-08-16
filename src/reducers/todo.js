import {createTodo, getTodos} from "../lib/todoServices";
const initState = {
    todos: [],
    currentTodo: ''
};

const TODO_ADD = 'TODO_ADD';
const TODO_LOAD = 'TODO_LOAD';
const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val});
export const loadTodos = (todos) => ({type: TODO_LOAD, payload: todos});
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo});
export const fetchTodos = () => {
    return async (dispatch) => {
        const todos = await getTodos();
        dispatch(loadTodos(todos));
    }
};

export const saveTodo = (name) => {
    return async (dispatch) => {
        const res = await createTodo(name);
        dispatch(addTodo(res));
    }
};

export default (state = initState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return {...state, currentTodo: '', todos: state.todos.concat(action.payload)};
        case CURRENT_UPDATE:
            return {...state, currentTodo: action.payload};
        case TODO_LOAD:
            return {...state, todos: action.payload};
        default:
            return state;
    }
}