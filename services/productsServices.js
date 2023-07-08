const productsModels = require("../models/productsModels");

const obtenerProductos = async () => {
	const productos = await productsModels.obtenerProductos();
	return productos;
};

const productosById = async () => {};

const agregarProducto = async () => {};

const editaUnProducto = async () => {};

const editaByFormulario = async () => {};

const borraUnProducto = async () => {};

module.exports = {
	obtenerProductos,
	productosById,
	agregarProducto,
	editaUnProducto,
	editaByFormulario,
	borraUnProducto,
};
