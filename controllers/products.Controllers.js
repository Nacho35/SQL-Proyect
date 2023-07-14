const productServices = require("../services/productsServices");

//** OBTIENE TODOS LOS PRODUCTOS */
const obtenerProductos = async (req, res) => {
	try {
		const product = await productServices.obtenerProductos();
		if (product) {
			res.status(200).json(product);
		} else {
			res.status(404).send("No existen productos en la base de datos");
		}
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
		if (
			!body ||
			!body.nombre ||
			!body.precio ||
			!body.stock ||
			!body.descripcion ||
			!body.imagen
		) {
			res.status(400).json({ message: "Faltan parámetros requeridos" });
			return;
		}
		await productServices.agregarProducto(body);
		res.status(201).json({ message: "Producto agregado correctamente" });
	} catch (error) {
		res.status(500).send("Hubo un error al agregar el producto");
	}
};

//** ACTUALIZA UN PRODUCTO */

const editaUnProducto = async (req, res) => {
	try {
		const id = req.params.id;
		const product = await productServices.editaUnProducto(id);
		if (!product) {
			res.status(404).json({ message: "El producto no se encontró" });
			return;
		}
		res.status(200).json({ message: "Producto editado correctamente" });
	} catch (error) {
		res.status(500).send("Hubo un error al actualizar");
	}
};

//** ACTUALIZA UN PRODUCTO ENVIADO POR FORMULARIO */

const editaByFormulario = async (req, res) => {
	try {
		const id = req.params.id;
		res.send("Formulario Editado");
		res.status(200).send(id);
	} catch (error) {
		res.status(500).send("Hubo un error al actualizar el form"); //!! SIN TERMINAR !!
	}
};

//** BORRA POR ID EL PRODUCTO */

const borraUnProducto = async (req, res) => {
	try {
		const id = req.params.id;
		const product = await productServices.borraUnProducto(id);
		if (!product) {
			res
				.status(404)
				.json({ message: "El producto no se encontró para su eliminacion" });
			return;
		}
		res.status(200).json({ message: "Producto borrado correctamente" });
	} catch (error) {
		res.status(500).send("Hubo un error al eliminar");
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
