const productServices = require("../services/productsServices");

//** OBTIENE TODOS LOS PRODUCTOS */
const obtenerProductos = (req, res) => {
	try {
		res.send("Se Trajeron Todos los Productos");
		res.status(201).send("Exito");
	} catch (error) {
		res.status(500).send("Hubo un error al obtener los datos");
	}
};

//** OBTIENE PRODUCTOS POR ID */

const productosById = (req, res) => {
	try {
		const id = req.params.id;
		res.send("Producto Obtenido");
		res.status(201).send(id);
	} catch (error) {
		res.status(500).send("Hubo un error al obtener por id");
	}
};

//** AGREGA UN PRODUCTO */

const agregarProducto = (req, res) => {
	try {
		res.send("Producto Agregado");
		res.status(200).send("Exito");
	} catch (error) {
		res.status(500).send("Hubo un error al agregar");
	}
};

//** ACTUALIZA UN PRODUCTO */

const editaUnProducto = (req, res) => {
	try {
		const id = req.params.id;
		res.send("Producto Editado");
		res.status(201).send(id);
	} catch (error) {
		res.status(500).send("Hubo un error al actualizar");
	}
};

//** ACTUALIZA UN PRODUCTO ENVIADO POR FORMULARIO */

const editaByFormulario = (req, res) => {
	try {
		const id = req.params.id;
		res.send("Formulario Editado");
		res.status(201).send(id);
	} catch (error) {
		res.status(500).send("Hubo un error al actualizar via form");
	}
};

//** BORRA POR ID EL PRODUCTO */

const borraUnProducto = (req, res) => {
	try {
		const id = req.params.id;
		res.send("Producto Borrado");
		res.status(201).send(id);
	} catch (error) {
		res.status(500).send("Hubo un error al borrar");
	}
};

module.exports = {
	obtenerProductos,
	productosById,
	agregarProducto,
	editaUnProducto,
	editaByFormulario,
	borraUnProducto,
};
