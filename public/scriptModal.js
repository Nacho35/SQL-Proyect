const editButtons = document.querySelectorAll(".edit-btn");
let productId;

editButtons.forEach((button) => {
	button.addEventListener("click", openEditModal);
});

function openEditModal(event) {
	event.preventDefault();

	productId = this.dataset.productId;

	fetch(`/productos/${productId}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Hubo un Error al Cargar el Producto");
			}
			return response.json();
		})
		.then((product) => {
			document.getElementById("nombre").value = product.nombre;
			document.getElementById("precio").value = product.precio;
			document.getElementById("stock").value = product.stock;
			document.getElementById("descripcion").value = product.descripcion;
			document.getElementById("imagen").value = product.imagen;

			const modal = new bootstrap.Modal(document.getElementById("editModal"));
			modal.show();
		})
		.catch((error) => {
			console.error("Error:", error);
			toastr.error(error.message || "Hubo un Error al Cargar el Producto");
		});

	const aceptarButton = document.getElementById("aceptar");

	if (aceptarButton) {
		aceptarButton.addEventListener("click", function (event) {
			event.preventDefault();

			const nombre = document.getElementById("nombre").value;
			const precio = document.getElementById("precio").value;
			const stock = document.getElementById("stock").value;
			const descripcion = document.getElementById("descripcion").value;
			const imagen = document.getElementById("imagen").value;

			const updatedProduct = {
				nombre: nombre,
				precio: precio,
				stock: stock,
				descripcion: descripcion,
				imagen: imagen,
			};

			fetch(`/productos/editar/${productId}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedProduct),
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error("Hubo un Error al Actualizar el Producto");
					}
					return response.json();
				})
				.then((data) => {
					toastr.success("Producto Actualizado");
					setTimeout(() => {
						window.location.reload();
					}, 2000);
				})
				.catch((error) => {
					console.error("Error:", error);
					toastr.error(
						error.message || "Hubo un Error al Actualizar el Producto"
					);
				});
		});
	}
}
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
