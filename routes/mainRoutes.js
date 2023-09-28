const express = require("express");
const productsControllers = require("../controllers/products.Controllers");
const userControllers = require("../controllers/userControllers");
const isAuth = require("../middlewares/isAuth");

const api = express.Router();

api.get("/hi", isAuth, userControllers.Hello);

api.post("/login", userControllers.iniciarSesion);
api.post("/register", userControllers.registrarUsuario);
api.get("/delete/:id", isAuth, userControllers.borrarUsuario);

api.get("/", isAuth, productsControllers.obtenerProductos);
api.get("/users", isAuth, userControllers.obtenerUsuarios);
api.get("/:id", isAuth, productsControllers.productosById);
api.post("/agregar", isAuth, productsControllers.agregarProducto);
api.put("/editar/:id", isAuth, productsControllers.editaUnProducto);
api.get("/borrar/:id", isAuth, productsControllers.borraUnProducto);

module.exports = api;
