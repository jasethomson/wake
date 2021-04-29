require('dotenv/config');
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const verify = require("./backend/verify");

console.log(verify);
