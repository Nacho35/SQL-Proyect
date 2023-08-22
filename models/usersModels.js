const db = require("../config/db");

const obtenerUsuarios = async () => {
	let sql = "SELECT * FROM usuarios";

	try {
		const [rows] = await db.query(sql);
		return rows;
	} catch (error) {
		console.table(error);
		throw new Error("Error al obtener los usuarios de la base de datos");
	}
};

const registrarUsuario = async (body) => {
	const { user, password, email } = body;
	let sql = "INSERT INTO usuarios SET ?";
	try {
		const [rows] = await db.query(sql, {
			user: user,
			password: password,
			email: email,
		});
		if (rows.affectedRows === 1) {
			return { message: "Se agrego correctamente la informacion", rows };
		} else {
			return { message: "No se agrego la informacion", rows };
		}
	} catch (error) {
		console.table(error);
		throw new Error("Error al insertar el usuario en la base de datos");
	}
};

module.exports = { obtenerUsuarios, registrarUsuario };
