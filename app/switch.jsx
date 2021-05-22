import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Music from './pages/music';

const AppSwitch = props => {
  return (
    <Switch>
      <Route path="/music" component={Music} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default AppSwitch;
