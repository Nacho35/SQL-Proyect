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

module.exports = pool;
