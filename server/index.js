require('dotenv/config');
const express = require("express");
const session = require('express-session');
const app = express();
const cors = require("cors");
const https = require('https');
const path = require('path');
const verify = require("./backend/verify");
const tools = require('./backend/tools');

const routes = require('./backend/routes');

// console.log(verify);

app.use(express.static(path.resolve(__dirname, './public')));

app.use(cors());
app.use(express.json());
app.use(session({
  secret: tools.bin2hex(tools.genRandoStr(16)),
  resave: true,
  saveUninitialized: false
}));

routes(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

app.listen(5000, () => {
  console.log("Server has started on port 5432.");
})
