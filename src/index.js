import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from './App';
import allReducers from './reducers/combineallreducers';

console.log("...................................Store will be created...............................................................");
const reduxStore = createStore(allReducers)
console.log(reduxStore);
console.log("Store is created....");

ReactDOM.render( 
  
  <Provider store={reduxStore}>
    <HashRouter>
      <App />
      </HashRouter>
  </Provider>
   ,
  document.getElementById('root')
);

