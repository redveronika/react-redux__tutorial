import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoFrom from './components/TodoForm';
import TodoList from "./components/TodoList";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {updateCurrent} from './reducers/todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React with Redux egghead course</h2>
        </div>
        <div className="Todo-App">
            <TodoFrom
                changeCurrent={this.props.updateCurrent}
                currentTodo={this.props.currentTodo}/>
            <TodoList todos={this.props.todos}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators({updateCurrent}, dispatch)
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
