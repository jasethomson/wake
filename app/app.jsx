import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Wake"
    }
  }

  render() {
    return (
      <div>{this.state.title}</div>
    );
  }
}
