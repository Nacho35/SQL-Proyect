const express = require("express");

const productsControllers = require("../controllers/products.Controllers");

const api = express.Router();

api.get("/", productsControllers.obtenerProductos);

api.get("/:id", productsControllers.productosById);

api.post("/agregar", productsControllers.agregarProducto);

api.put("/editar/:id", productsControllers.editaUnProducto);

api.put("/:id", productsControllers.editaByFormulario);

api.delete("/borrar/:id", productsControllers.borraUnProducto);

module.exports = api;
