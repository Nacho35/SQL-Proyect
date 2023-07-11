const productsModels = require("../models/productsModels");

const obtenerProductos = async () => {
	const product = await productsModels.obtenerProductos();
	return product;
};

const productosById = async (id) => {
	const product = await productsModels.productosById(id);
	return product;
};

const agregarProducto = async (body) => {
	const product = await productsModels.agregarProducto(body);
	return product;
};

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
