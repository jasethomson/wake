import React from 'react';
import Nav from './nav';

const NavHeader = props => {
  return (
    <header>
      <div className="logoName">
        <h3>Wake</h3>
      </div>
      <Nav />
    </header>
  );
}

export default NavHeader;
