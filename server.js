const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const api = require("./routes/mainRoutes");
const path = require("path");

const app = express();

dotenv.config();

//** PLANTILLA */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//** CONTENIDO STATICO */
app.use("/public", express.static(path.join(__dirname, "public")));

//** RENDERS */
app.get("/", (req, res) => {
	res.render("partials/navigation");
});

app.get("/productos", (req, res) => {
	res.render("index.ejs");
});

//** PERMITE TRATAR LOS DATOS EN FORMATO JSON */
app.use(express.json());

//** MIDDLEWARES */
app.use(morgan("dev"));
//** PERMITE ACCEDER A DATOS QUE ESTEN ANIDADOS */
app.use(
	express.urlencoded({
		extended: false,
	})
);
//** RUTA PREDETERMINADA */
app.use("/productos", api);

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
	console.log(
		`Hola nachito servidor corriendo en el puerto ${process.env.PORT}`
	);
});
