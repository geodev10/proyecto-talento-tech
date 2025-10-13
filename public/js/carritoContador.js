function actualizarContadorCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const cartCountEl = document.getElementById("cart-count");
  const cartCountMovil = document.getElementById("cart-count-movil");

  if (cartCountEl) cartCountEl.textContent = carrito.length;
  if (cartCountMovil) cartCountMovil.textContent = carrito.length;
}

actualizarContadorCarrito();

// Actualizar cuando añada libros en misma pagina
document.addEventListener("click", (e) => {
  if (e.target.closest(".btn-añadir")) {
    actualizarContadorCarrito();
  }
});
