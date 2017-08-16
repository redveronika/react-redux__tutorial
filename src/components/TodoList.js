import React from 'react';
import {connect} from "react-redux";

const TodoItem = ({name, isCompleted}) => (
    <li>
        <input type="checkbox" defaultChecked={isCompleted}/>
        {name}
    </li>
);

const TodoList = (props) => (
    <div className="Todo-List">
        <ul>
            {props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
        </ul>
    </div>
);

export default connect(
    (state) => ({todos: state.todos})
)(TodoList);