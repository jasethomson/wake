import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/home';
import Nav from './components/nav';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Wake"
    }
  }

  render() {
    return (
      <Router>
        {Nav()}
        <h1>{this.state.title}</h1>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
