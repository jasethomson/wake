const pool = require("../db");

const addSong = async (req, res) => {
  try {
    console.log("addSong:", req.body)
    const { title, artist } = req.body;
    const newSong = await pool.query(
      `INSERT INTO music (title, artist)
      VALUES('${title}','${artist}')
      RETURNING *;`
    );
    res.json(newSong.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
}

const getSongs = async (req, res) => {
  try {
    const { id } = req.params;
    const music = id ? await pool.query(`SELECT * FROM music WHERE song_id = ${id};`) : await pool.query("SELECT * FROM music;");
    res.json(music.rows);
  } catch (err) {
    console.error(err.message);
  }
}

const updateSong = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, artist } = req.body;
    const updateSong = await pool.query(
      `UPDATE music
      SET title = '${title}',
          artist = '${artist}',
          dateupdated = CURRENT_TIMESTAMP
      WHERE song_id = ${id}
      RETURNING *;`
    );
    res.json(updateSong.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
}

const deleteSong = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSong = await pool.query(
      `DELETE FROM music
      WHERE song_id = ${id};`
    );
    res.json("Song deleted.");
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = { addSong, getSongs, updateSong, deleteSong };
