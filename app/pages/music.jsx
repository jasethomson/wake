import React from "react";
import AppContext from "../context";

import Header from "../components/header";
import Table from "../components/table";

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: "Music",
      songs: [
        {
          title: "Shelter",
          artist: "Birdy",
          dateAdded: "04/29/2021"
        }
      ]
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
      .then(data => {
        let song = {};
        let songInfo = data.items[0].snippet.localized.title;
        let ft = songInfo.indexOf('ft.') > 1 ? songInfo.split('ft.')[songInfo.split('ft.').length - 1] : '';
        song.artist = songInfo.split('-', 1)[0];
        song.artist += `ft. ${ft}`;
        song.title = songInfo.split('-')[1];
        song.title = song.title.slice(0, song.title.indexOf('('));
        let dateObj = new Date();
        let month = dateObj.getUTCMonth() + 1;
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();
        song.dateAdded = month + "/" + day + "/" + year;
        this.setState({
          songs: [...this.state.songs, song]
        });
      });
  }

  render() {
    console.log("music", this.context);
    this.context.Music = this.state;

    return (
      <div className="pageTop">
        <Header
          search
          stateVal={this.getYoutubeId}
          handleSubmit={this.handleSubmit}
        />
        <Table
          songs={this.state.songs}
        />
      </div>

    );
  }
}

Music.contextType = AppContext;
