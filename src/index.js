import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/reducers'

const store = createStore(rootReducer, {
  resources: {stone: 3, wood: 5},
  buildings: [{position: {x: 1, y: 1}, type: "mine"},
              {position: {x: 3, y: 4}, type: "lumber mill"}],
  dimensions: {x: 8, y: 8}
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
