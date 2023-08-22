const userModels = require("../models/usersModels");

const obtenerUsuarios = async () => {
	const users = await userModels.obtenerUsuarios();
	return users;
};

const registrarUsuario = async (body) => {
	const register = await userModels.registrarUsuario(body);
	return register;
};

module.exports = { obtenerUsuarios, registrarUsuario };
