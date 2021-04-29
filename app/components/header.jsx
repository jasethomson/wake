import React, { useContext, createContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context';

const Header = props => {
  const headerContext = useContext(AppContext);
  headerContext.Header = { Title: "Header" };
  createContext(headerContext);
  console.log('header', headerContext);
  return (
    <div className={`header`}>
      {props.title ? <h1>{props.title}</h1> : null}
      {props.search ? search(props) : null}
    </div>
  );
}

const search = props => {
  console.log(props.search.handleChange)
  return (
    <div className={`search`}>
      <input type="text" onChange={props.search.handleChange} />
      <i className="fas fa-search"></i>
    </div>
  )
}

export default Header;
