import React, { useContext, createContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context';

const Nav = () => {
  const navContext = useContext(AppContext);
  navContext.Nav = { Title: "Nav" };
  createContext(navContext);
  console.log('nav', navContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/music">Music</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
