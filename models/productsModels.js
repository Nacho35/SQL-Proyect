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

const productosById = async (id) => {
	let sql = "SELECT * FROM productos WHERE id = ?";
	try {
		const [rows] = await db.query(sql, [id]);
		return rows[0];
	} catch (error) {
		throw new Error("Error al obtener el producto de la base de datos");
	}
};

const agregarProducto = async (
	id,
	nombre,
	precio,
	stock,
	descripcion,
	imagen
) => {
	let sql =
		"INSERT INTO productos (id, nombre, precio, stock, descripcion, imagen) VALUES (?, ?, ?, ?, ?, ?)";
	try {
		await db.query(sql, [id, nombre, precio, stock, descripcion, imagen]);
		const productoAgregado = {
			id,
			nombre,
			precio,
			stock,
			descripcion,
			imagen,
		};
		return productoAgregado; //!! CONTINUAR CON LA PETICION POST NO SE HACE AUN !!
	} catch (error) {
		throw new Error("Error al insertar el producto en la base de datos");
	}
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
