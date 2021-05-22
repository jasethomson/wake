import React, { useContext, createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppContext from './context';

import Home from './pages/home';
import Music from './pages/music';
import Nav from './components/nav';

const App = props => {
  const appContext = { App: 'app was here' };
  console.log("app", appContext);
  return (
    <AppContext.Provider value={appContext}>
      <Router>
        <header>
          <div className="logoName">
            <h3>Wake</h3>
          </div>
          <Nav />
        </header>
        <Switch>
          <Route path="/music" component={Music} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
