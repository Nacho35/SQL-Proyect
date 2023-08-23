const { authService } = require("../services/authService");

const isAuth = (req, res, next) => {
	try {
		if (req.headers.authorization) {
			const token = req.headers.authorization.split(" ")[1];
			const payload = authService.decodeToken(token);

			if (payload.message) {
				return res.status(401).send(payload.message);
			}

			req.user = payload.userId;
			next();
		} else {
			return res
				.status(401)
				.send({ message: "No se proporcionó ninguna autorización" });
		}
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: "Error de autenticación" });
	}
};

module.exports = isAuth;
