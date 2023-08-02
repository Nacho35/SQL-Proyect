document.querySelector("form").addEventListener("submit", function (e) {
	e.preventDefault();

	let nombre = document.querySelector('input[name="nombre"]').value;
	let precio = document.querySelector('input[name="precio"]').value;
	let stock = document.querySelector('input[name="stock"]').value;
	let descripcion = document.querySelector(
		'textarea[name="descripcion"]'
	).value;
	let imagen = document.querySelector('input[name="imagen"]').value;

	let producto = {
		nombre: nombre,
		precio: precio,
		stock: stock,
		descripcion: descripcion,
		imagen: imagen,
	};

	fetch("/productos/agregar", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(producto),
	})
		.then((res) => {
			if (res.ok) {
				return res
					.json()
					.then((data) => toastr.success("Producto agregado correctamente"));
			} else {
				return res
					.json()
					.then((err) =>
						toastr.error(
							"Hubo un error al agregar el producto: " + (err.message || "")
						)
					);
			}
		})
		.catch((err) => {
			toastr.error("Hubo un error al enviar la solicitud: " + err.message);
		});
	toastr.options = {
		closeButton: false,
		debug: false,
		newestOnTop: true,
		progressBar: false,
		positionClass: "toast-top-center",
		preventDuplicates: true,
		onclick: null,
		showDuration: "1000",
		hideDuration: "1500",
		timeOut: "3000",
		extendedTimeOut: "1000",
	};
});
