import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from './utils/routes';

const AppSwitch = props => {
  const routes = Routes();
  return (
    <Switch>
      {routes.map(route => <Route key={route.path} path={route.path} component={route.component} />)}
    </Switch>
  );
}

export default AppSwitch;
