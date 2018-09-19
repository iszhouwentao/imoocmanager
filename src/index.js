import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Admin from './admin'
import IRouter from './router_demo/router2/router'
import Life from './pages/demo/Life'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import configureStore from './redux/store/index'

const store = configureStore

ReactDOM.render(
    <Provider store={store}>
        <IRouter/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
