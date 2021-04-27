import React from "react";
import AppContext from '../context';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Home"
    }
  }

  render() {
    console.log("home", this.context);
    this.context.Home = this.state;
    return (
      <h1>{this.state.title}</h1>
    );
  }
}

Home.contextType = AppContext;
