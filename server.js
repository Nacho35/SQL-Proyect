const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/mainRoutes");

const app = express();

dotenv.config();

app.get("/", (req, res) => {
	res.send(`<body style="background-color: yellow;"><h1 style="text-align: center;"> SQL Backend</h1>
  <p style="text-align: justify; font-weight: bold; font-size: 1.5rem; margin: 10px;">
  Mi proyecto consiste en desarrollar un backend que se conecta a una base de datos SQL para almacenar y gestionar información sobre productos de hardware. Este backend proporcionará una interfaz y lógica de programación que permitirá a los usuarios realizar operaciones de creación, lectura, actualización y eliminación de productos en la base de datos.

Utilizaré una conexión a la base de datos SQL para ejecutar consultas y almacenar la información relacionada con los productos de hardware. Implementaré rutas, controladores y modelos que gestionen de manera eficiente las solicitudes de los clientes y realicen las operaciones correspondientes en la base de datos.

Además de las operaciones básicas de CRUD, mi proyecto incluirá características como la validación de datos para asegurar la integridad de la información almacenada. También implementaré funcionalidades de búsqueda y filtrado para facilitar la recuperación de productos específicos.

El objetivo final de mi proyecto es proporcionar una plataforma sólida y segura para la gestión eficiente de productos de hardware. Esto permitirá a los usuarios realizar operaciones sobre los productos de manera sencilla y garantizará la integridad y disponibilidad de la información almacenada en la base de datos.</p></body> 
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
	console.log(
		`Hola nachito servidor corriendo en el puerto ${process.env.PORT}`
	);
});
