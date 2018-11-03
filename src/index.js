import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/reducers'

export const store = createStore(rootReducer, {
  resources: [
              {type: "stone", amount: 10},
              {type: "wood", amount: 10},
              {type: "cow", amount: 0},
              {type: "christmas tree", amount: 0},
              {type: "fish", amount: 0},
             ],
  buildings: [{position: {x: 1, y: 1}, type: "mine"},
              {position: {x: 3, y: 4}, type: "lumber mill"},
              {position: {x: 5, y: 2}, type: "lumber mill"}],
  dimensions: {x: 8, y: 8},
  selectedBuilding: null,
  mousedOverTile: null,
  recentlyGainedResources: []
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
