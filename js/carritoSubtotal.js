const cantidades = document.querySelectorAll(".cantidad");
const subtotalEl = document.getElementById("subtotal");

function calcularSubtotal() {
  let subtotal = 0;
  document.querySelectorAll("#carrito li").forEach((item) => {
    const input = item.querySelector(".cantidad");
    const precioEl = item.querySelector(".precio");
    const precioUnitario = parseFloat(precioEl.dataset.precio);
    const cantidad = parseInt(input.value) || 0;
    const totalProducto = precioUnitario * cantidad;

    // Actualizar el precio mostrado por producto
    precioEl.textContent = `$${totalProducto.toLocaleString("es-CO")}`;

    subtotal += totalProducto;
  });
  subtotalEl.textContent = `$${subtotal.toLocaleString("es-CO")}`;
}

cantidades.forEach((input) => {
  input.addEventListener("input", calcularSubtotal);
});

calcularSubtotal();
