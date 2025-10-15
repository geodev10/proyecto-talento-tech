const listaLibros = document.getElementById("lista-libros");

// Elementos del modal
const modalImagen = document.getElementById("modalImagen");
const modalTitulo = document.getElementById("modalTitulo");
const modalAutor = document.getElementById("modalAutor");
const modalDescripcion = document.getElementById("modalDescripcion");
const modalPrecio = document.getElementById("modalPrecio");
const btnAgregarCarrito = document.getElementById("btnAgregarCarrito");

// PUERTO FETCH DINAMICO
const API_URL = window.location.hostname.includes("localhost")
  ? "http://localhost:3000"
  : "https://proyecto-talento-tech-production.up.railway.app";
// const API_URL = window.location.hostname.includes("localhost")
//   ? "http://localhost:3000"
//   : "https://proyecto-talento-tech-2eaj.onrender.com";

// Traer los libros desde el servidor
fetch(`${API_URL}/api/libros`)
  .then((res) => res.json())
  .then((libros) => {
    // Crear las tarjetas
    const marcadoLibros = libros
      .map(({ id, titulo, autor, imagen, alt, precio, descripcion }) => {
        return `
          <li class="col-12 col-md-6 col-lg-4 mb-4">
            <article class="card text-center card-hover h-100">
              <img class="card-img-top" src="${imagen}" alt="${alt}" />
              <div class="card-body">
                <h2 class="card-title fs-6">${titulo}</h2>
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

    // Insertar en el HTML
    listaLibros.insertAdjacentHTML("beforeend", marcadoLibros);

    // Activar botones de ver para llenar el modal
    document.querySelectorAll(".btn-ver-libro").forEach((boton) => {
      boton.addEventListener("click", () => {
        const id = boton.dataset.id;
        const libro = libros.find((libro) => libro.id == id);

        if (!libro) return;

        modalImagen.src = libro.imagen;
        modalImagen.alt = libro.alt;
        modalTitulo.textContent = libro.titulo;
        modalAutor.textContent = libro.autor;
        modalDescripcion.textContent = libro.descripcion || "Sin descripción";
        modalPrecio.textContent = `$${libro.precio.toLocaleString()}`;
        btnAgregarCarrito.dataset.id = id;
      });
    });

    // Activar los botones de añadir al carrito
    document.querySelectorAll(".btn-añadir").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        if (!carrito.includes(id)) {
          carrito.push(id);
          localStorage.setItem("carrito", JSON.stringify(carrito));

          // Disparar evento personalizado para actualizar el contador
          document.dispatchEvent(new Event("carritoActualizado"));

          Swal.fire({
            title: "¡Producto añadido!",
            text: "Agregado al carrito",
            icon: "success",
            timer: 1000,
            toast: true,
            position: "top-end",
            showConfirmButton: false,
          });
        }
      });
    });

    // Función de actualización del contador
    const actualizarContador = () => {
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const cartCountEl = document.getElementById("cart-count");
      const cartCountMovil = document.getElementById("cart-count-movil");

      if (cartCountEl) cartCountEl.textContent = carrito.length;
      if (cartCountMovil) cartCountMovil.textContent = carrito.length;
    };

    // Escuchar el evento personalizado
    document.addEventListener("carritoActualizado", actualizarContador);

    // Llamar una vez al cargar la página
    actualizarContador();
  })
  .catch((err) => console.error("Error al cargar libros:", err));
