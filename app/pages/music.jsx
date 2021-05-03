import React from "react";
import AppContext from "../context";

import Header from "../components/header";
import Table from "../components/table";
import { getYouTubeData, getYoutubeId } from "../utils/tube";

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: "Music",
      cols: {
        songs: [
          { name: "count", header: "#" },
          { name: "title", header: "Title" },
          { name: "artist", header: "Artist" },
          { name: "datedadded", header: "Date Added" }
        ]
      },
      songs: []
    }
  }

  handleSubmit(submission) {
    event.preventDefault();
    let youTubeData = submission.id.length > 1 ? getYouTubeData(submission.id, this.addSong) : null;
  }

  getSongs() {
    fetch(`http://localhost:5000/music`)
      .then(res => res.json())
      .then(songs => this.setState({ songs }))
  }

  addSong(song) {
    fetch(`http://localhost:5000/music`, {
      method: "POST",
      body: JSON.stringify(song)
    })
      .then(res => res.json())
      .then(song => console.log(song))
  }

  componentDidMount() {
    this.getSongs();
  }

  render() {
    console.log("music", this.context);
    this.context.Music = this.state;
    return (
      <div className="pageTop">
        <Header
          search
          stateVal={getYoutubeId}
          handleSubmit={this.handleSubmit}
        />
        <Table
          songs={this.state.songs}
          cols={this.state.cols.songs}
          countCol
        />
      </div>

    );
  }
}

Music.contextType = AppContext;
