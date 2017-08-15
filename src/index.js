import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {bindActionCreators} from 'redux';
import {updateCurrent} from './reducers/todo';

const actions = bindActionCreators({updateCurrent}, store.dispatch)

ReactDOM.render(
    <Provider store={store}>
        <App changeCurrent={actions.updateCurrent} />
    </Provider>,
    document.getElementById('root')
);


// setTimeout(() => {
//     store.dispatch({type: 'TODO_ADD', payload: {id: 4, name: 'New todo', isCompleted: false}})
// }, 1000);

registerServiceWorker();
