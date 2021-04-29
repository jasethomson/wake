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
    return url.indexOf('.com') > 1 ? url.split('=')[1].split('&')[0] : '';
  }

  handleSubmit(submission) {
    console.log("submission", submission);
    let youTubeData = submission.id.length > 1 ? this.getYouTubeData(submission.id) : null;
    event.preventDefault();
  }

  getYouTubeData(id) {
    // fetch('http://localhost:5000/todos')
    //   .then(res => res.json())
    //   .then(todos => console.log('todos', todos))
  }

  render() {
    console.log("music", this.context);
    fetch('http://localhost:5000/todos')
      .then(res => res.json())
      .then(todos => console.log(todos));
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
