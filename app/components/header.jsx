import React, { useContext, createContext } from 'react';
import Search from './search';

const Header = props => {
  return (
    <div className={`header`}>
      {props.title ? <h1>{props.title}</h1> : null}
      {props.search ? <Search pageProps={props} /> : null}
    </div>
  );
}

export default Header;


// const headerContext = useContext(AppContext);
// headerContext.Header = { Title: "Header" };
// createContext(headerContext);
// console.log('header', headerContext);
