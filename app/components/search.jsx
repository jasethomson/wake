import React, { useContext, createContext, useState } from 'react';
import AppContext from '../context';
import { Link } from 'react-router-dom';

const Search = props => {
  const [state, setState] = useState({ value: '', id: '' });

  const handleChange = e => {
    let value = e.target.value;
    let id = props.pageProps.stateVal ? props.pageProps.stateVal(e.target.value) : '';
    setState(state => ({ value, id }));
  }

  const handleSubmit = () => {
    event.preventDefault();
    props.pageProps.handleSubmit({ value: state.value, id: state.id });
    setState(state => ({ value: '', id: '' }));
  }

  return (
    <form onSubmit={handleSubmit} className={`search`}>
      <button className="btn-icon" type="submit">
        <i className="fas fa-search" />
      </button>
      <input type="text" value={state.value} onChange={handleChange} />
    </form>
  );
}

export default Search;
