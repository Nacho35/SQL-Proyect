const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/db");
const routes = require("./routes/mainRoutes");

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

//** RUTA PREDETERMINADA */
app.use("/productos", routes);

//** FUNCION EN CASO DE QUE LA URL NO EXISTA */

app.use(function (req, res, next) {
	answer = {
		error: true,
		code: 404,
		message: "URL No Encontrada",
	};
	res.status(404).send(answer);
});

app.listen(process.env.PORT, () => {
	console.log(`Hello Nachito App Listen On Port ${process.env.PORT}`);
});
