const editButtons = document.querySelectorAll(".edit-btn");

editButtons.forEach((button) => {
	button.addEventListener("click", openEditModal);
});

function openEditModal(event) {
	event.preventDefault();

	const productId = this.dataset.productId;

	fetch(`/productos/${productId}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Hubo un Error al Cargar el Producto");
			} else {
				toastr.success("Producto Actualizado"); //** REVISAR AQUI MUESTRA LA NOTIFICACION PRIMERO */
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
			toastr.error(error.message || "Hubo un Error al Actualizar el Producto");
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
}
