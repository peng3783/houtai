import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

//redux
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer.js';
import thunk from 'redux-thunk';

const store = createStore( reducer , applyMiddleware(thunk));





ReactDOM.render(
    <Provider store = {store} >
        <App />
    </Provider>

    , document.getElementById('app'));

