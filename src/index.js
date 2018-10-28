import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';
import StageInitialState from './reducers/stage/initialState';
import UserInputInitialState from './reducers/userInputs/initialState';

function getInitialState() {
  return {
    mainFlow:new StageInitialState(),
    userInputs: new UserInputInitialState()
  }
}

const store = applyMiddleware(thunk)(createStore)(reducer, getInitialState());

ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>,
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
