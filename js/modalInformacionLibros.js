const botonesVer = document.querySelectorAll(".btn-ver-libro");
const modalImagen = document.getElementById("modalImagen");
const modalTitulo = document.getElementById("modalTitulo");
const modalAutor = document.getElementById("modalAutor");
const modalDescripcion = document.getElementById("modalDescripcion");
const modalPrecio = document.getElementById("modalPrecio");
const btnAgregarCarrito = document.getElementById("btnAgregarCarrito");

botonesVer.forEach((boton) => {
  boton.addEventListener("click", () => {
    const id = parseInt(boton.dataset.id);
    const libro = libros.find((libro) => libro.id === id);

    if (!libro) return;

    modalImagen.src = libro.imagen;
    modalImagen.alt = libro.alt;
    modalTitulo.textContent = libro.titulo;
    modalAutor.textContent = libro.autor;
    modalDescripcion.textContent = libro.descripcion;
    modalPrecio.textContent = `$${libro.precio.toLocaleString()}`;
    btnAgregarCarrito.dataset.id = id;
  });
});
