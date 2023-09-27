const userServices = require("../services/userServices");
const { validationResult } = require("express-validator");
const authService = require("../services/authService");
const bcrypt = require("bcrypt");

const obtenerUsuarios = async (req, res) => {
	try {
		const usuarios = await userServices.obtenerUsuarios();
		if (Array.isArray(usuarios) && usuarios.length) {
			res.status(200).json({ usuarios });
		} else {
			res
				.status(404)
				.json({ message: "No existen usuarios en la base de datos" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Hubo un error al obtener los datos" });
	}
};

const iniciarSesion = async (req, res) => {
	try {
		const resultValidation = validationResult(req);
		const hasErrors = !resultValidation.isEmpty();

		if (hasErrors) {
			return res.status(400).send(resultValidation);
		}

		const { user, password } = req.body;

		const result = await userServices.iniciarSesion({ user, password });

		if (result.user.password) {
			const token = authService.createToken({ user: result.user });

			if (!token || token === "") {
				return res.status(500).json({ message: "Error al generar el token" });
			}

			try {
				res.status(200).json({
					user: result.user,
					message: "Inicio de sesión exitoso",
					token,
				});
			} catch (error) {
				res.status(401).json({ message: error.message });
			}
		} else {
			res.status(401).json({ message: result.message });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Hubo un error al iniciar sesión" });
	}
};

const registrarUsuario = async (req, res) => {
	try {
		const resultValidation = validationResult(req);
		const hasErrors = !resultValidation.isEmpty();

		if (hasErrors) {
			return res.status(400).send(resultValidation);
		}

		const { user, password, email } = req.body;

		const hashedPassword = await bcrypt.hash(password, 10);

		await userServices.registrarUsuario({
			user,
			password: hashedPassword,
			email,
		});

		res.status(201).json({ message: "usuario creado exitosamente" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Hubo un error al registrar el usuario" });
	}
};

const Hello = (req, res) => {
	return res.status(200).send("Bienvenido, Estas Autenticado!");
};

module.exports = { obtenerUsuarios, registrarUsuario, iniciarSesion, Hello };
