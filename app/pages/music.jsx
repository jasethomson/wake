import React from "react";
import AppContext from "../context";

import Header from "../components/header";

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Music"
    }
  }

  getYoutubeId(url) {
    let id = url.indexOf('.com') > 1 ? url.split('=')[1].split('&')[0] : '';
    return id;
  }

  render() {
    console.log("music", this.context);
    this.context.Music = this.state;
    return (
      <Header
        search
        stateVal={this.getYoutubeId}
      />
    );
  }
}

Music.contextType = AppContext;
