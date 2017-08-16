import {createTodo, getTodos, updateTodo} from "../lib/todoServices";
import {showMessage} from "./messages";
const initState = {
    todos: [],
    currentTodo: ''
};

export const TODO_ADD = 'TODO_ADD';
export const TODO_LOAD = 'TODO_LOAD';
const CURRENT_UPDATE = 'CURRENT_UPDATE';
export const TODO_REPLACE = 'TODO_REPLACE';

export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val});
export const loadTodos = (todos) => ({type: TODO_LOAD, payload: todos});
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo});
export const replaceTodo = (id) => ({type: TODO_REPLACE, payload: id});
export const fetchTodos = () => {
    return async (dispatch) => {
        dispatch(showMessage('Loading todos...'))
        const todos = await getTodos();
        dispatch(loadTodos(todos));
    }
};

export const saveTodo = (name) => {
    return async (dispatch) => {
        dispatch(showMessage('Saving todo...'));
        const res = await createTodo(name);
        dispatch(addTodo(res));
    }
};

export const toggleTodo = (id) => {
    return async (dispatch, getState) => {
        dispatch(showMessage('Updating todo...'));
        const {todos} = getState().todo;
        const todo = todos.find(t => t.id === id);
        const toggled = {...todo, isCompleted: !todo.isCompleted};
        console.log('toggled', toggled)
        const res = await updateTodo(toggled);
        dispatch(replaceTodo(res));
    }
};

export default (state = initState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return {...state, currentTodo: '', todos: state.todos.concat(action.payload)};
        case CURRENT_UPDATE:
            return {...state, currentTodo: action.payload};
        case TODO_REPLACE:
            return {...state,
                todos: state.todos.map(
                    t => t.id === action.payload.id
                        ? action.payload
                        : t
                )};
        case TODO_LOAD:
            return {...state, todos: action.payload};
        default:
            return state;
    }
}