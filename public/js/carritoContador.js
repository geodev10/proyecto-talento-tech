function actualizarContadorCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const cartCountEl = document.getElementById("cart-count");
  const cartCountMovil = document.getElementById("cart-count-movil");

  if (cartCountEl) cartCountEl.textContent = carrito.length;
  if (cartCountMovil) cartCountMovil.textContent = carrito.length;
}

// Ejecutar al cargar la página
actualizarContadorCarrito();

// Opcional: si quieres que se actualice cuando se añadan productos en la misma página
document.addEventListener("click", (e) => {
  if (e.target.closest(".btn-añadir")) {
    actualizarContadorCarrito();
  }
});
