import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../utils/routes';

const Nav = () => {
  const routes = Routes(true);
  return (
    <nav>
      <ul>
        {routes.map(route => <li key={`link-${route.path}`}><Link to={route.path}>{route.title}</Link></li>)}
      </ul>
    </nav>
  );
}

export default Nav;
