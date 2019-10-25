import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import App from './containers/App';
import './index.css';
import WebFont from 'webfontloader';
import { searchRobots, requestRobots } from './reducers'; 

WebFont.load({
    google:{
        families: ['Roboto:400,700', 'sans-serif']
    }
});

const logger = createLogger();
const rootReducer = combineReducers({searchRobots: searchRobots, 
									 requestRobots: requestRobots});
const store = createStore(rootReducer,applyMiddleware(logger, thunkMiddleware));

ReactDOM.render( <Provider store={store}> 
					<App/> 
				</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
