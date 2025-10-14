const listaCarrito = document.getElementById("carrito");
const subtotalEl = document.getElementById("subtotal");
const cartCountEl = document.getElementById("cart-count");
const cartCountMovil = document.getElementById("cart-count-movil");

// PUERTO FETCH DINAMICO
// const API_URL = window.location.hostname.includes("localhost")
//   ? "http://localhost:3000"
//   : "https://proyecto-talento-tech-production.up.railway.app";
const API_URL = window.location.hostname.includes("localhost")
  ? "http://localhost:3000"
  : "https://proyecto-talento-tech-2eaj.onrender.com";

// Función para actualizar el contador del carrito
function actualizarContador() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  cartCountEl.textContent = carrito.length;
  cartCountMovil.textContent = carrito.length;
}

// Función para calcular subtotal
function calcularSubtotal() {
  let subtotal = 0;
  document.querySelectorAll("#carrito li").forEach((item) => {
    const input = item.querySelector(".cantidad");
    const precioEl = item.querySelector(".precio");
    const precioUnitario = parseFloat(precioEl.dataset.precio);
    const cantidad = parseInt(input.value) || 0;
    const totalProducto = precioUnitario * cantidad;
    precioEl.textContent = `$${totalProducto.toLocaleString("es-CO")}`;
    subtotal += totalProducto;
  });
  subtotalEl.textContent = `$${subtotal.toLocaleString("es-CO")}`;
}

// Traer el carrito del localStorage
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Traer los libros desde la API
fetch(`${API_URL}/api/libros`)
  .then((res) => res.json())
  .then((libros) => {
    // Renderizar los productos que están en el carrito
    listaCarrito.innerHTML = "";
    carrito.forEach((id) => {
      const libro = libros.find((l) => l.id == id);
      if (!libro) return;

      const li = document.createElement("li");
      li.classList.add("card", "mb-3");
      li.innerHTML = `
        <div class="row g-0">
          <div class="col-md-3">
            <img src="${libro.imagen}" class="img-fluid rounded-start" alt="${
        libro.alt
      }">
          </div>
          <div class="col-md-9">
            <div class="card-body d-flex justify-content-between align-items-center">
              <div>
                <h3 class="card-title mb-1">${libro.titulo}</h3>
                <p class="card-text mb-0">${libro.descripcion}</p>
              </div>
              <div class="d-flex align-items-center text-end">
                <input type="number" class="form-control form-control-sm me-3 cantidad"
                       style="width: 70px" value="1" min="1">
                <div>
                  <span class="fw-bold d-block precio" data-precio="${
                    libro.precio
                  }">
                    $${libro.precio.toLocaleString("es-CO")}
                  </span>
                  <button class="btn btn-sm btn-danger mt-2 btn-eliminar" data-id="${
                    libro.id
                  }">Eliminar</button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
      listaCarrito.appendChild(li);
    });

    // Delegación de eventos para cantidades y eliminar
    listaCarrito.addEventListener("input", (e) => {
      if (e.target.classList.contains("cantidad")) {
        calcularSubtotal();
      }
    });

    listaCarrito.addEventListener("click", (e) => {
      if (e.target.closest(".btn-eliminar")) {
        const btn = e.target.closest(".btn-eliminar");
        const id = btn.dataset.id;

        // Eliminar del carrito en localStorage
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito = carrito.filter((itemId) => itemId != id);
        localStorage.setItem("carrito", JSON.stringify(carrito));

        // Eliminar del DOM
        const li = btn.closest("li");
        if (li) li.remove();

        // Recalcular subtotal y actualizar contador
        calcularSubtotal();
        actualizarContador();
      }
    });

    // Calcular subtotal inicial y actualizar contador
    calcularSubtotal();
    actualizarContador();
  })
  .catch((err) => console.error("Error al cargar libros:", err));

// Terminar el pago en Whatsapp
const btnPagar = document.getElementById("btn-pagar");

btnPagar.addEventListener("click", async () => {
  const carritoItems = document.querySelectorAll("#carrito li");
  if (carritoItems.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  // Construir lista de libros con cantidad y subtotal por libro
  let mensajeLibros = "";
  let subtotalPedido = 0;
  carritoItems.forEach((item) => {
    const titulo = item.querySelector(".card-title").textContent;
    const cantidad = parseInt(item.querySelector(".cantidad").value) || 0;
    const precioUnitario = parseFloat(
      item.querySelector(".precio").dataset.precio
    );
    const totalLibro = cantidad * precioUnitario;
    subtotalPedido += totalLibro;
    mensajeLibros += `\n- ${titulo} x ${cantidad} = $${totalLibro.toLocaleString(
      "es-CO"
    )}`;
  });

  const texto = `Qhubo parcer@, Quiero pagar el siguiente pedido:\nLibros:${mensajeLibros}\nSubtotal: $${subtotalPedido.toLocaleString(
    "es-CO"
  )}`;
  const textoCodificado = encodeURIComponent(texto);

  // Traer el número de WhatsApp desde backend
  `${API_URL}/api/libros`;
  try {
    const res = await fetch(`${API_URL}/whatsapp`);
    const data = await res.json();
    const telefono = data.numero;

    window.open(`https://wa.me/${telefono}?text=${textoCodificado}`, "_blank");
  } catch (err) {
    console.error("No se pudo obtener el número de WhatsApp:", err);
    alert("Ocurrió un error al intentar abrir WhatsApp");
  }
});
