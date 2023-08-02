document.addEventListener("DOMContentLoaded", (event) => {
	const editButtons = document.querySelectorAll(".btn.btn-outline-primary");
	editButtons.forEach((button) => {
		button.addEventListener("click", (event) => {
			event.preventDefault();
			const productId = button.getAttribute("data-product-id");
			openModalWithProductData(productId);
		});
	});
});

async function openModalWithProductData(productId) {
	const modalEl = document.getElementById("editModal");
	if (modalEl) {
		const modal = new bootstrap.Modal(modalEl);
		modal.show();
	} else {
		console.error("El elemento modal no se encontró en el DOM");
	}
	try {
		const response = await fetch(`/productos/editar/${productId}`, {
			method: "GET",
		});

		const producto = await response.json();

		document.getElementById("nombre").value = producto.nombre;
		document.getElementById("precio").value = producto.precio;
		document.getElementById("stock").value = producto.stock;
		document.getElementById("descripcion").value = producto.descripcion;
		document.getElementById("imagen").value = producto.imagen;

		toastr.options = {
			closeButton: false,
			debug: false,
			newestOnTop: true,
			progressBar: false,
			positionClass: "toast-top-center",
			preventDuplicates: true,
			onclick: null,
			showDuration: "500",
			hideDuration: "1000",
			timeOut: "3000",
			extendedTimeOut: "1000",
		};

		if (!response.ok) {
			toastr.error(data.message || "Hubo un Error al Actualizar el Producto");
		} else {
			toastr.success("Producto Actualizado");

			const modal = new bootstrap.Modal(document.getElementById("editModal"));
			modal.hide();

			window.location.reload();
		}
	} catch (error) {
		console.log(error);
		toastr.error("Hubo un Error al Cargar el Producto");
	}
}
