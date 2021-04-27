import React from "react";
import AppContext from "../context";

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Music"
    }
  }

  render() {
    console.log("music", this.context);
    this.context.Music = this.state;
    return (
      <h1>{this.state.title}</h1>
    );
  }
}

Music.contextType = AppContext;
