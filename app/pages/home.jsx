import React from "react";
import AppContext from '../context';
import Header from '../components/header';

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
      <Header
        title={this.state.title}
      />

    );
  }
}

Home.contextType = AppContext;
