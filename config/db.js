const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

const pool = mysql.createPool({
	host: "localhost",
	user: "root",
	database: "api_ecommerce_hardware",
	password: `${process.env.API_KEY}`,
	waitForConnections: true,
	connectionLimit: 5,
});

//** PRUEBA DE CONEXION */
(async () => {
	try {
		await pool.getConnection();
		console.log("Conexión establecida a la base de datos.");
	} catch (error) {
		console.error("Error al conectar a la base de datos:", error);
	}
})();

module.exports = pool;
