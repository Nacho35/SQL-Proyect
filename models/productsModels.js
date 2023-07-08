const db = require("../config/db");

const obtenerProductos = async () => {
	let sql = "SELECT * FROM productos";
	try {
		const [rows] = await db.query(sql);
		return rows;
	} catch (error) {
		throw new error("Error al obtener los productos de la base de datos");
	}
};

const productosById = async () => {
	try {
	} catch (error) {}
};

const agregarProducto = async () => {
	try {
	} catch (error) {}
};

const editaUnProducto = async () => {
	try {
	} catch (error) {}
};

const editaByFormulario = async () => {
	try {
	} catch (error) {}
};

const borraUnProducto = async () => {
	try {
	} catch (error) {}
};

module.exports = {
	obtenerProductos,
	productosById,
	agregarProducto,
	editaUnProducto,
	editaByFormulario,
	borraUnProducto,
};
