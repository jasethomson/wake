import React from 'react';
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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Wake"
    }
  }

  render() {
    const appContext = {
      App: { App: this.state }
    }
    console.log(this.context);
    return (
      <AppContext.Provider value={appContext}>
        <Router>
          {Nav()}
          <h1>{this.state.title}</h1>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/music">
              <Music />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    );
  }
}
