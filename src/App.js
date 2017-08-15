import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoFrom from './components/TodoForm';
import TodoList from "./components/TodoList";
import {connect} from "react-redux";

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
                changeCurrent={this.props.changeCurrent}
                currentTodo={this.props.currentTodo}/>
            <TodoList todos={this.props.todos}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;
const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;
