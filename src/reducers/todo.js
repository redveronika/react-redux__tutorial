import {createTodo, getTodos, updateTodo, destroyTodo} from "../lib/todoServices";
import {showMessage} from "./messages";
const initState = {
    todos: [],
    currentTodo: ''
};

export const TODO_ADD = 'TODO_ADD';
export const TODO_LOAD = 'TODO_LOAD';
const CURRENT_UPDATE = 'CURRENT_UPDATE';
export const TODO_REPLACE = 'TODO_REPLACE';
export const TODO_REMOVE = 'TODO_REMOVE';

export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val});
export const loadTodos = (todos) => ({type: TODO_LOAD, payload: todos});
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo});
export const replaceTodo = (id) => ({type: TODO_REPLACE, payload: id});
export const removeTodo = (id) => ({type: TODO_REMOVE, payload: id});
export const fetchTodos = () => {
    return async (dispatch) => {
        dispatch(showMessage('Loading todos...'));
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
        const res = await updateTodo(toggled);
        dispatch(replaceTodo(res));
    }
};

export const deleteTodo = (id) => {
    return async (dispatch) => {
        dispatch(showMessage('Removing todo...'))
        await destroyTodo(id);
        dispatch(removeTodo(id));
    }
};

export const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'active':
            return todos.filter(t => !t.isCompleted);
        case 'completed':
            return todos.filter(t => t.isCompleted);
        default: return todos;
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
        case TODO_REMOVE:
            return {...state,
                todos: state.todos.filter(t => t.id !== action.payload)};
        default:
            return state;
    }
}