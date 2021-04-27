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
    const appContext = { App: this.state };
    console.log(appContext);
    return (
      <AppContext.Provider value={appContext}>
        <Router>
          {Nav()}
          <Switch>
            <Route path="/music" component={Music} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </AppContext.Provider>
    );
  }
}
