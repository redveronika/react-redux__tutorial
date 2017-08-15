import React from 'react';

const TodoItem = ({name, isCompleted}) => (
    <li>
        <input type="checkbox" defaultChecked={isCompleted}/>
        {name}
    </li>
);

export default (props) => (
    <div className="Todo-List">
        <ul>
            {props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
        </ul>
    </div>
)