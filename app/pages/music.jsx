import React from "react";
import AppContext from "../context";

import Header from "../components/header";

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.searchHandleChange = this.searchHandleChange.bind(this);
    this.searchHandleSubmit = this.searchHandleSubmit.bind(this);
    this.state = {
      title: "Music"
    }
  }

  searchHandleChange(event) {
    console.log(event.currentTarget.value);
  }

  searchHandleSubmit(event) {
    console.log(event);
  }

  render() {
    console.log("music", this.context);
    this.context.Music = this.state;
    let search = { handleChange: this.searchHandleChange, handleSubmit: this.searchHandleSubmit }
    return (
      <Header
        search={search}
      />
    );
  }
}

Music.contextType = AppContext;
