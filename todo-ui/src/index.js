import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {fetchAllTodos} from "./actions";
import rootReducer from './reducers';
import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchAllTodos());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

serviceWorker.register();
