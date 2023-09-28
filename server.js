const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const methodOverride = require("method-override");
const api = require("./routes/mainRoutes");
const path = require("path");
const fetch = require("node-fetch");

const app = express();

dotenv.config();

//** PLANTILLA */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//** CONTENIDO STATICO */
app.use("/public", express.static(path.join(__dirname, "public")));

//** RENDERS */
app.get("/", (req, res) => {
	res.status(200).render("login.ejs");
});

//! REVISAR NO FUNCIONA DEBE ENVIAR EL TOKEN EN LAS PETICIONES Y REDIRECCIONAR DESDE EL LOGIN ESO FALLA!

app.get("/agregar", (req, res) => {
	const token = sessionStorage.getItem("token");
	if (!token) {
		return res.status(401).send("Token no disponible");
	}

	fetch("http://localhost:8080/agregar", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => response.text())
		.then((data) => {})
		.catch((error) => {
			console.error(error);
			res.status(500).send("Error en la solicitud");
		});
	res.status(200).render("form.ejs");
});

app.get("/home", (req, res) => {
	const token = sessionStorage.getItem("token");
	if (!token) {
		return res.status(401).send("Token no disponible");
	}

	fetch("http://localhost:8080/home", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => response.text())
		.then((data) => {
			res.redirect("/home");
		})
		.catch((error) => {
			console.error(error);
			res.status(500).send("Error en la solicitud");
		});
	res.status(200).render("home.ejs");
});

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//** PERMITE TRATAR LOS DATOS EN FORMATO JSON */
app.use(express.json());

//** MIDDLEWARES */
app.use(cors());

app.use(methodOverride("_method"));

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
app.use((req, res) => {
	res.status(404).render("404.ejs");
});

app.listen(process.env.PORT, () => {
	console.log(`Hola dev servidor corriendo en el puerto ${process.env.PORT}`);
});
