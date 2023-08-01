document.addEventListener("DOMContentLoaded", function () {
	const deleteButtons = document.querySelectorAll(".btn.btn-outline-danger");

	deleteButtons.forEach(function (deleteButton) {
		deleteButton.addEventListener("click", async function (event) {
			event.preventDefault();

			const productId = deleteButton.getAttribute("data-product-id");

			try {
				const response = await fetch(`/productos/borrar/${productId}`, {
					method: "GET",
				});

				const data = await response.json();

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
					toastr.error(data.message || "Hubo un Error al Eliminar el Producto");
				} else {
					toastr.success("Producto Eliminado");
				}
				setTimeout(() => {
					window.location.reload();
				}, 2000);
			} catch (error) {
				console.log(error);
				toastr.error("Hubo un Error al Eliminar el Producto", "Error");
			}
		});
	});
});
