const express = require("express");
const productsControllers = require("../controllers/products.Controllers");
const userControllers = require("../controllers/userControllers");
const isAuth = require("../middlewares/isAuth");

const api = express.Router();

api.post("/login", userControllers.iniciarSesion);
api.post("/register", userControllers.registrarUsuario);

api.get("/", productsControllers.obtenerProductos);
api.get("/users", userControllers.obtenerUsuarios);
api.get("/:id", productsControllers.productosById);
api.post("/agregar", productsControllers.agregarProducto);
api.put("/editar/:id", productsControllers.editaUnProducto);
api.get("/borrar/:id", productsControllers.borraUnProducto);

api.get("/hi", isAuth, userControllers.Hello);

module.exports = api;
