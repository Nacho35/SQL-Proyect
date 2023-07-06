//** LAS PETICIONES */

//** OBTIENE TODOS LOS PRODUCTOS */

app.get("/productos/"),
	(req, res) => {
		try {
			res.send("Se Trajeron Todos los Productos");
			res.status(201).send("Exito");
		} catch (error) {
			res.status(500).send("Hubo un error al obtener los datos");
		}
	};

//** OBTIENE PRODUCTOS POR ID */

app.get("/productos/:id"),
	(req, res) => {
		try {
			const id = req.params.id;
			res.send("Producto Obtenido");
			res.status(201).send(id);
		} catch (error) {
			res.status(500).send("Hubo un error al obtener por id");
		}
	};

//** AGREGA UN PRODUCTO */

app.post("/productos/"),
	(req, res) => {
		try {
			res.send("Producto Agregado");
			res.status(200).send("Exito");
		} catch (error) {
			res.status(500).send("Hubo un error al agregar");
		}
	};

//** ACTUALIZA UN PRODUCTO */

app.put("/productos/editar/:id"),
	(req, res) => {
		try {
			const id = req.params.id;
			res.send("Producto Editado");
			res.status(201).send(id);
		} catch (error) {
			res.status(500).send("Hubo un error al actualizar");
		}
	};

//** ACTUALIZA UN PRODUCTO ENVIADO POR FORMULARIO */

app.put("/productos/:id"),
	(req, res) => {
		try {
			const id = req.params.id;
			res.send("Formulario Editado");
			res.status(201).send(id);
		} catch (error) {
			res.status(500).send("Hubo un error al actualizar via form");
		}
	};

//** BORRA POR ID EL PRODUCTO */

app.delete("/productos/borrar/:id"),
	(req, res) => {
		try {
			const id = req.params.id;
			res.send("Producto Borrado");
			res.status(201).send(id);
		} catch (error) {
			res.status(500).send("Hubo un error al borrar");
		}
	};
