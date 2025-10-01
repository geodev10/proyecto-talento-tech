/*const cantidades = document.querySelectorAll(".cantidad");
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

//Renderizacion carrito

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const listaCarrito = document.getElementById("carrito");

listaCarrito.innerHTML = ""; // Limpia antes de renderizar

carrito.forEach((id) => {
  // Buscar el libro por id
  const libro = libros.find((l) => l.id == id);

  if (libro) {
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
              <h5 class="card-title mb-1">${libro.titulo}</h5>
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
  }
});
*/

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

//Renderizacion carrito
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const listaCarrito = document.getElementById("carrito");

listaCarrito.innerHTML = ""; // Limpia antes de renderizar

carrito.forEach((id) => {
  // Buscar el libro por id
  const libro = libros.find((l) => l.id == id);

  if (libro) {
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
              <h5 class="card-title mb-1">${libro.titulo}</h5>
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
  }
});

// Eventos para cantidades dinámicas
document.querySelectorAll(".cantidad").forEach((input) => {
  input.addEventListener("input", calcularSubtotal);
});

// Eventos para botones eliminar
document.querySelectorAll(".btn-eliminar").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    // 1. Eliminar del array carrito en localStorage
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito = carrito.filter((itemId) => itemId != id);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // 2. Eliminar del DOM
    const li = e.target.closest("li");
    if (li) li.remove();

    // 3. Recalcular subtotal
    calcularSubtotal();
  });
});

// Calcular al iniciar
calcularSubtotal();
