const cardsNuevos = document.getElementById("libros-nuevos");

const marcadoLibrosNuevos = librosNuevos
  .map(({ id, titulo, autor, imagen, alt, precio, descripcion, paginas }) => {
    return `
      <li class="swiper-slide">
        <article class="card text-center card-hover h-100">
          <img class="card-img-top" src="${imagen}" alt="${alt}" />
          <div class="card-body">
          <h3 class="card-title fs-6">${titulo}</h3>
            <h6 class="card-subtitle mb-2">${autor}</h6>
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
              class="btn btn-success w-50 d-flex align-items-center justify-content-center"
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

cardsNuevos.insertAdjacentHTML("beforeend", marcadoLibrosNuevos);
