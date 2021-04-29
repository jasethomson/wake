import React from "react";
import AppContext from "../context";

import Header from "../components/header";

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: "Music"
    }
  }

  getYoutubeId(url) {
    return url.indexOf('.com') > 1 ? url.split('=')[1].split('&')[0] : '';
  }

  handleSubmit(submission) {
    event.preventDefault();
    let youTubeData = submission.id.length > 1 ? this.getYouTubeData(submission.id) : null;
  }

  getYouTubeData(id) {
    fetch(`http://localhost:5000/tube?id=${id}`)
      .then(res => res.json())
      .then(song => console.log(song));
  }

  render() {
    console.log("music", this.context);
    this.context.Music = this.state;

    return (
      <Header
        search
        stateVal={this.getYoutubeId}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

Music.contextType = AppContext;
