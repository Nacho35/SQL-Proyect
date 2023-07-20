document.addEventListener("DOMContentLoaded", function () {
	const datosLink = document.querySelector(
		".nav-link.text-warning.text-center"
	);
	datosLink.addEventListener("click", mostrarTabla);
});

function mostrarTabla() {
	const tabla = document
		.getElementById("tabla-datos")
		.getElementsByTagName("tbody")[0];
	tabla.innerHTML = "";

	fetch("/productos")
		.then((response) => response.json())
		.then((data) => {
			data.forEach((producto) => {
				const nuevaFila = tabla.insertRow();
				nuevaFila.innerHTML = `
          <td>${producto.id}</td>
          <td>${producto.nombre}</td>
          <td>${producto.precio}</td>
          <td>${producto.stock}</td>
          <td>${producto.descripcion}</td>
          <td><img src="${producto.imagen}" alt="Imagen del producto"></td>
        `;
			});
		})
		.catch((error) => {
			console.error("Error al obtener los datos:", error);
		});
}
