const getYouTubeSong = require('./tube');
const { addSong, getSongs, updateSong, deleteSong } = require('./music');

const routes = app => {
  //music
  app.get("/music", (req, res) => getSongs(req, res));
  app.get("/music/:id", (req, res) => getSongs(req, res));
  app.post("/music", (req, res) => addSong(req, res));
  app.put("/music/:id", (req, res) => updateSong(req, res));
  app.delete("/music/:id", (req, res) => deleteSong(req, res));
  //youtube
  app.get("/tube", async (req, res) => getYouTubeSong(req, res));
}

module.exports = routes;
