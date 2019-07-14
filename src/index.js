import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// provider
import { Provider } from 'react-redux';

// store
import { createStore } from 'redux';
import myReducer from './reducers/index';
const store = createStore(myReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();
