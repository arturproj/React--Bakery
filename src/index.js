import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(  
  <div className="d-flex justify-content-center col-sm-12 col-lg-6 mx-auto">
    <App />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
