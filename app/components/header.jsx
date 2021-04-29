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
      {props.search ? <Search pageProps={props} /> : null}
    </div>
  );
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: '',
      id: ''
    }
  }

  handleChange(e) {
    let value = e.target.value;
    let id = this.props.pageProps.stateVal ? this.props.pageProps.stateVal(value) : '';
    this.setState({ value, id });
  }

  handleSubmit() {
    console.log(`${this.state.value}, with ${this.state.id} was submitted`);
    event.preventDefault();
  }

  render() {
    console.log("search", this.context);
    this.context.Search = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={`search`}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="btn-icon" type="submit"><i className="fas fa-search"></i></button>
      </form>
    )
  }
}
Search.contextType = AppContext;

export default Header;
