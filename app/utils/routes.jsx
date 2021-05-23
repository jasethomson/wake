import React from 'react';
import Home from '../pages/home';
import Music from '../pages/music';

export const Routes = nav => {
  const routes = [
    { title: "Music", component: Music, path: "/music" },
  ];
  const home = { title: "Home", component: Home, path: "/" };
  nav ? routes.unshift(home) : routes.push(home);
  return routes;
}
