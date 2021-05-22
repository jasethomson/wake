import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import AppContext from './context';

const appContext = {};
const Application = (
  <AppContext.Provider value={appContext}>
    <App />
  </AppContext.Provider>
);

ReactDOM.render(
  Application,
  document.querySelector("#app")
);
