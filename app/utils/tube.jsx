import React from 'react';

export const getYoutubeId = url => {
  return url.indexOf('.com') > 1 ? url.split('=')[1].split('&')[0] : '';
}

export const getYouTubeData = (id, addSong) => {
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
      addSong(song);
    });
}
