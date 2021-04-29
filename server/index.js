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

app.get("/todos", async (req, res) => {
  // let body = tubeReq.euery.body ? tubeReq.query.body : tubeReq.body;
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
