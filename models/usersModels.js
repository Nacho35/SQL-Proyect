const db = require("../config/db");
const bcrypt = require("bcrypt");

const obtenerUsuarios = async () => {
	let sql = "SELECT * FROM usuarios";

	try {
		const [rows] = await db.query(sql);
		return rows;
	} catch (error) {
		console.log(error);
		throw new Error("Error al obtener los usuarios de la base de datos");
	}
};

const iniciarSesion = async (body) => {
	const { user, password } = body;
	let sql = "SELECT * FROM usuarios WHERE user = ?";
	try {
		const [rows] = await db.query(sql, [user]);
		if (rows.length > 0) {
			const userResult = rows[0];
			const coincide = await bcrypt.compare(password, userResult.password);
			if (coincide) {
				return { message: "Inicio de sesión exitoso", user: userResult };
			} else {
				return { message: "Contraseña incorrecta", user: null };
			}
		} else {
			return { message: "Usuario no encontrado", user: null };
		}
	} catch (error) {
		console.log(error);
		throw new Error("Error al iniciar sesión");
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
		console.log(error);
		throw new Error("Error al insertar el usuario en la base de datos");
	}
};

const borrarUsuario = async (id) => {
	const restablecerAutoIncremento = async () => {
		let sql = "ALTER TABLE usuarios AUTO_INCREMENT = 1";
		try {
			await db.query(sql);
		} catch (error) {
			console.table(error);
			throw new Error("Error al restablecer el auto incremento");
		}
	};
	let sql = "DELETE FROM usuarios WHERE id = ?";
	try {
		const rows = await db.query(sql, [id]);

		await restablecerAutoIncremento();

		return rows[0];
	} catch (error) {
		console.table(error);
		throw new Error("Error al borrar el usuario de la base de datos");
	}
};

module.exports = {
	obtenerUsuarios,
	registrarUsuario,
	iniciarSesion,
	borrarUsuario,
};
