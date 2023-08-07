const express = require("express");

const productsControllers = require("../controllers/products.Controllers");

const api = express.Router();

api.get("/", productsControllers.obtenerProductos);

api.get("/:id", productsControllers.productosById);

api.post("/agregar", productsControllers.agregarProducto);

api.post("/editar/:id", productsControllers.editaUnProducto);

api.get("/borrar/:id", productsControllers.borraUnProducto);

module.exports = api;
