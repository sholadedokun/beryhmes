import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/store.js'
import App from './js/App';
import 'bootstrap/dist/css/bootstrap.css';
import './style/index.css';
import './style/animate.css';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
