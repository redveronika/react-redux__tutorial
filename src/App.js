import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Messages from './components/Messages';
import TodoFrom from './components/TodoForm';
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React with Redux egghead course</h2>
        </div>
          <Router>
              <div className="Todo-App">
                  <Messages />
                  <TodoFrom />
                  <Route path='/:filter?' render={({match}) => (
                      <TodoList filter={match.params.filter}/>
                  )} />
                  <Footer />
              </div>
          </Router>
      </div>
    );
  }
}

export default App;