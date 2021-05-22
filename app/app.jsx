import React, { useContext, createContext } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppContext from './context';
import AppSwitch from './switch';
import NavHeader from './components/navHeader';

const App = props => {
  const appContext = {};
  return (
    <AppContext.Provider value={appContext}>
      <Router>
        <NavHeader />
        <AppSwitch />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
