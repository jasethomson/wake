import React from "react";
import AppContext from "../context";

import Header from "../components/header";
import Table from "../components/table";
import { getYouTubeData, getYoutubeId } from "../utils/tube";

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addSong = this.addSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.state = {
      title: "Music",
      cols: {
        songs: [
          { name: "count", header: "#" },
          { name: "title", header: "Title" },
          { name: "artist", header: "Artist" },
          { name: "dateadded", header: "Date Added" },
          { name: "delete", header: "" },
        ]
      },
      songs: [],
      songs_id: "song_id"
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
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(song)
    })
      .then(res => res.json())
      .then(song => this.setState({ songs: [...this.state.songs, song] }));
  }

  deleteSong(id) {
    fetch(`http://localhost:5000/music/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(result => this.getSongs());
  }

  componentDidMount() {
    this.getSongs();
  }

  render() {
    console.log("music", this.context);
    this.context.Music = this.state;
    return (
      <div className="pageTop pageMusic">
        <Header
          search
          stateVal={getYoutubeId}
          handleSubmit={this.handleSubmit}
        />
        <Table
          data={this.state.songs}
          cols={this.state.cols.songs}
          id={this.state.songs_id}
          delClick={this.deleteSong}
        />
      </div>
    );
  }
}

Music.contextType = AppContext;
