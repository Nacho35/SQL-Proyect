const productServices = require("../services/productsServices");

//** OBTIENE TODOS LOS PRODUCTOS */
const obtenerProductos = async (req, res) => {
	try {
		const product = await productServices.obtenerProductos();
		res.status(200).json(product);
	} catch (error) {
		res.status(500).send("Hubo un error al obtener los datos");
	}
};

//** OBTIENE PRODUCTOS POR ID */
const productosById = async (req, res) => {
	try {
		const id = req.params.id;
		const product = await productServices.productosById(id);
		if (product) {
			res.status(200).json(product);
		} else {
			res
				.status(404)
				.send("No se encontró ningún producto con el ID proporcionado");
		}
	} catch (error) {
		res.status(500).send("Hubo un error al obtener el producto por su ID");
	}
};

//** AGREGA UN PRODUCTO */
const agregarProducto = async (req, res) => {
	try {
		const body = req.body;
		const product = await productServices.agregarProducto(body);
		res.status(201).json(product);
	} catch (error) {
		console.log(error);
		res.status(500).send("Hubo un error al agregar el producto");
	}
};

//** ACTUALIZA UN PRODUCTO */

const editaUnProducto = async (req, res) => {
	try {
		const id = req.params.id;
		res.send("Producto Editado");
		res.status(201).send(id);
	} catch (error) {
		res.status(500).send("Hubo un error al actualizar");
	}
};

//** ACTUALIZA UN PRODUCTO ENVIADO POR FORMULARIO */

const editaByFormulario = async (req, res) => {
	try {
		const id = req.params.id;
		res.send("Formulario Editado");
		res.status(201).send(id);
	} catch (error) {
		res.status(500).send("Hubo un error al actualizar via form");
	}
};

//** BORRA POR ID EL PRODUCTO */

const borraUnProducto = async (req, res) => {
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
