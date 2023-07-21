const db = require("../config/db");

const obtenerProductos = async (filter) => {
	let sql = "SELECT * FROM productos";

	//** FILTRADO DE PRODUCTOS */
	let whereClause = "";
	let values = [];

	//** FILTRO POR NOMBRE */
	if (filter) {
		if (filter.nombre) {
			whereClause += "nombre LIKE ? AND ";
			values.push(`%${filter.nombre}%`);
		}
	}

	//** FILTROS POR PRECIO */
	if (filter) {
		if (filter.precioMin && filter.precioMax) {
			whereClause += "precio BETWEEN ? AND ? AND ";
			values.push(filter.precioMin, filter.precioMax);
		} else if (filter.precioMin) {
			whereClause += "precio >= ? AND ";
			values.push(filter.precioMin);
		} else if (filter.precioMax) {
			whereClause += "precio <= ? AND ";
			values.push(filter.precioMax);
		}
	}

	if (whereClause !== "") {
		whereClause = "WHERE " + whereClause.slice(0, -5);
		sql += " " + whereClause;
	}

	//** FILTRO POR ORDEN DE < a > */
	if (filter) {
		if (filter.order) {
			const order = filter.order === "desc" ? "DESC" : "ASC";
			sql += ` ORDER BY precio ${order}`;
		}
	}

	//** LIMITACION DE PRODUCTOS */
	if (filter) {
		sql += ` LIMIT ${filter.limit}`;
	}

	try {
		const [rows] = await db.query(sql, values);
		return rows;
	} catch (error) {
		console.table(error);
		throw new Error("Error al obtener los productos de la base de datos");
	}
};

const productosById = async (id) => {
	let sql = "SELECT * FROM productos WHERE id = ?";
	try {
		const [rows] = await db.query(sql, [id]);
		return rows[0];
	} catch (error) {
		console.table(error);
		throw new Error("Error al obtener el producto de la base de datos");
	}
};

const agregarProducto = async (body) => {
	const { nombre, precio, stock, descripcion, imagen } = body;
	let sql = "INSERT INTO productos SET ?";
	try {
		const [rows] = await db.query(sql, {
			nombre: nombre,
			precio: precio,
			stock: stock,
			descripcion: descripcion,
			imagen: imagen,
		});
		if (rows.affectedRows === 1) {
			return { message: "Se agrego correctamente la informacion", rows };
		} else {
			return { message: "No se agrego la informacion", rows };
		}
	} catch (error) {
		console.table(error);
		throw new Error("Error al insertar el producto en la base de datos");
	}
};

const editaUnProducto = async (id, body) => {
	const { nombre, precio, stock, descripcion, imagen } = body;
	let sql = `UPDATE productos SET ? WHERE id='${id}'`;
	try {
		const [rows] = await db.query(sql, {
			nombre: nombre,
			precio: precio,
			stock: stock,
			descripcion: descripcion,
			imagen: imagen,
		});
		if (rows.affectedRows === 1) {
			return { message: "Se edito correctamente la informacion", rows };
		} else {
			return { message: "No se edito la informacion", rows };
		}
	} catch (error) {
		console.table(error);
		throw new Error("Error al editar el producto en la base de datos");
	}
};

const borraUnProducto = async (id) => {
	let sql = "DELETE FROM productos WHERE id = ?";
	try {
		const rows = await db.query(sql, [id]);
		return rows[0];
	} catch (error) {
		console.table(error);
		throw new Error("Error al borrar el producto de la base de datos");
	}
};

module.exports = {
	obtenerProductos,
	productosById,
	agregarProducto,
	editaUnProducto,
	borraUnProducto,
};
