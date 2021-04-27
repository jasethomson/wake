import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Home"
    }
  }

  render() {
    return (
      <h1>{this.state.title}</h1>
    );
  }
}
