require('dotenv/config');
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const verify = require("./backend/verify");

console.log(verify);
//middleware
app.use(cors());
//access to body req obj to get data from front end
app.use(express.json()); //req.body

//ROUTES//

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5432.");
})
