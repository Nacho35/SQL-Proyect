const mysql = require("mysql2/promise");

const pool = mysql.createPool({
	host: "localhost",
	user: "root",
	database: "backcodo",
	password: "",
	waitForConnections: true,
	connectionLimit: 5,
});

module.exports = pool;
