require('dotenv/config');
const express = require("express");
const session = require('express-session');
const app = express();
const cors = require("cors");
const https = require('https');
const pool = require("./db");
const verify = require("./backend/verify");
const tools = require('./backend/tools');
const getJSON = require('./backend/getJSON');

// console.log(verify);
//middleware
app.use(cors());
//access to body req obj to get data from front end
app.use(express.json()); //req.body

app.use(session({
  secret: tools.bin2hex(tools.genRandoStr(16)),
  resave: true,
  saveUninitialized: false
}));

//ROUTES//

//create a song

app.post("/music", async (req, res) => {
  try {
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
});

// get songs

app.get("/music", async (req, res) => {
  try {
    const allMusic = await pool.query("SELECT * FROM music;");
    res.json(allMusic.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get one song

app.get("/music/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const song = await pool.query(`SELECT * FROM music WHERE song_id = ${id}`);
    res.json(song.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a song

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/tube", async (req, res) => {
  // const port = options.port == 443 ? https : http;
  // let id = tubeReq.query.id;
  let id = req.query.id;
  const options = {
    host: process.env.TUBE_API_HOST,
    // port: 443,
    path: `${process.env.TUBE_API_PATH}?part=snippet&id=${id}&key=${process.env.TUBE_API_KEY}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  getJSON(options, res);

  // let output = '';
  // const options = {
  //   host: process.env.TUBE_API_HOST,
  //   // port: 443,
  //   path: `${process.env.TUBE_API_PATH}?part=snippet&id=${id}&key=${process.env.TUBE_API_KEY}`,
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // };

  // const req = https.request(options, (res) => {
  //   console.log(`${options.host} : ${res.statusCode}`);
  //   res.setEncoding('utf8');

  //   res.on('data', (chunk) => {
  //     output += chunk;
  //   });

  //   res.on('end', () => {
  //     let obj = JSON.parse(output);
  //     console.log(obj);
  //     tubeRes.send(res.statusCode, obj);
  //   });
  // });

  // req.on('error', (err) => {
  //   // res.send('error: ' + err.message);
  // });

  // req.end();
});

app.listen(5000, () => {
  console.log("Server has started on port 5432.");
})
