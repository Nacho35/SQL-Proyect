const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/db");

const app = express();

dotenv.config();

app.get("/", (req, res) => {
	res.send(`<h1> Mysql2 Backend</h1>
  <ul>
  <li>GET <a href="">/productos</a></li>
   <li>GET <a href="">/productos/:id</a></li>
   <li>PUT <a href="">/productos/:id</a></li>
   <li>DELETE <a href="">/productos/:id</a></li>
   <li>POST <a href="">/productos/</a></li>
  </ul>
  `);
});

app.listen(process.env.PORT, () => {
	console.log(`Hello Nachito App Listen On Port ${process.env.PORT}`);
});
