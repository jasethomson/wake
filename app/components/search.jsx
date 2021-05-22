import React from 'react';
import { Link } from 'react-router-dom';

export default class Search extends React.Component {
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
    event.preventDefault();
    this.props.pageProps.handleSubmit({ value: this.state.value, id: this.state.id });
    this.setState({ value: '', id: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={`search`}>
        <button className="btn-icon" type="submit">
          <i className="fas fa-search" />
        </button>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </form>
    )
  }
}
