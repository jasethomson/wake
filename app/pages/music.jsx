import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Table from "../components/table";
import { getYouTubeData, getYoutubeId } from "../utils/tube";

const Music = props => {
  const deleteSong = id => {
    fetch(`http://localhost:5000/music/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(result => getSongs());
  }

  const [songId, setSongId] = useState('song_id');
  const [cols, setCols] = useState(
    {
      songs: [
        { name: "count", header: "#", iconCls: true },
        { name: "title", header: "Title" },
        { name: "artist", header: "Artist" },
        { name: "dateadded", header: "Date Added" },
        { name: "delete", header: "", iconCls: "fas fa-minus-circle fa-lg", iconFunc: deleteSong }
      ]
    }
  );
  const [songs, setSongs] = useState([]);



  useEffect(() => {
    getSongs();
  }, []);

  const handleSubmit = submission => {
    event.preventDefault();
    let youTubeData = submission.id.length > 1 ? getYouTubeData(submission.id, addSong) : null;
  }

  const getSongs = () => {
    fetch(`http://localhost:5000/music`)
      .then(res => res.json())
      .then(songs => setSongs(songs))
  }

  const addSong = song => {
    fetch(`http://localhost:5000/music`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(song)
    })
      .then(res => res.json())
      .then(song => setSongs([...this.state.songs, song]));
  }

  return (
    <div className="pageTop pageMusic">
      <Header
        search
        stateVal={getYoutubeId}
        handleSubmit={handleSubmit}
      />
      <Table
        data={songs}
        cols={cols.songs}
        id={songId}
      />
    </div>
  );
}

export default Music;
