import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppSwitch from './appSwitch';
import NavHeader from './components/navHeader';

const App = props => {
  return (
    <Router>
      <NavHeader />
      <AppSwitch />
    </Router>
  );
}

export default App;
