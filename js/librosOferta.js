const cardsOferta = document.getElementById("libros-oferta");

const marcadoLibrosOferta = libros
  .map(({ id, titulo, autor, imagen, alt, precio, descripcion, paginas }) => {
    return `
      <li class="swiper-slide">
        <article class="card text-center card-hover h-100">
          <img class="card-img-top" src="${imagen}" alt="${alt}" />
          <div class="card-body">
            <h6 class="card-subtitle text-muted mb-2">${autor}</h6>
            <h2 class="card-title fs-6">${titulo}</h2>
            <p class="card-text">$${precio}</p>
          </div>
          <footer class="card-footer d-flex gap-2">
           <button
              type="button"
              class="btn btn-outline-primary w-50 d-flex align-items-center justify-content-center btn-ver-libro"
              data-bs-toggle="modal"
              data-bs-target="#modalProducto"
              data-id="${id}"
            >
              <i class="bi bi-eye-fill" aria-hidden="true"></i>
              <span class="d-none d-sm-inline ms-2">Ver</span>
          </button>
            <button
              type="button"
              class="btn btn-success w-50 d-flex align-items-center justify-content-center btn-añadir"
              data-id="${id}"
            >
              <i class="bi bi-cart-fill" aria-hidden="true"></i>
              <span class="d-none d-sm-inline ms-2">Añadir</span>
            </button>
          </footer>
        </article>
      </li>
    `;
  })
  .join("");

cardsOferta.insertAdjacentHTML("beforeend", marcadoLibrosOferta);

// Logica improvisada-BORRAR SI ES NECESARIO

document.querySelectorAll(".btn-añadir").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const titulo = e.currentTarget.dataset.titulo;
    const precio = e.currentTarget.dataset.precio;

    Swal.fire({
      title: "¡Producto añadido!",
      text: `Agregado al carrito`,
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
      toast: true,
      position: "top-end",
    });
  });
});

let cartCount = 0;
const cartCountEl = document.getElementById("cart-count");
const cartCountMovil = document.getElementById("cart-count-movil");

document.addEventListener("click", (e) => {
  if (e.target.closest(".btn-añadir")) {
    cartCount++;
    cartCountEl.textContent = cartCount;
    cartCountMovil.textContent = cartCount;
  }
});
