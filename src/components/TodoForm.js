import React, {Component} from 'react';
import {connect} from "react-redux";
import {saveTodo, updateCurrent} from '../reducers/todo';

class TodoForm extends Component {
    handleInputChange = (e) => {
        const val = e.target.value;
        this.props.updateCurrent(val);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveTodo(this.props.currentTodo);
    };

    render() {
        const {currentTodo} = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       onChange={this.handleInputChange}
                       value={currentTodo}/>
            </form>
        )
    }
}

export default connect(
    (state) => ({currentTodo: state.currentTodo}),
    {updateCurrent, saveTodo}
)(TodoForm);