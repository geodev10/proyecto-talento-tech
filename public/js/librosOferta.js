const cardsOferta = document.getElementById("libros-oferta");
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
    const librosOferta = libros.filter((libro) => libro.oferta);
    // Crear las tarjetas
    const marcadoLibrosOferta = librosOferta
      .map(({ id, titulo, autor, imagen, alt, precio, descripcion }) => {
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
    cardsOferta.insertAdjacentHTML("beforeend", marcadoLibrosOferta);

    // Configurar modal
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
        const libro = librosOferta.find((libro) => libro.id === id);

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

    // Función para actualizar el contador del carrito
    const actualizarContadorCarrito = () => {
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const cartCountEl = document.getElementById("cart-count");
      const cartCountMovil = document.getElementById("cart-count-movil");

      if (cartCountEl) cartCountEl.textContent = carrito.length;
      if (cartCountMovil) cartCountMovil.textContent = carrito.length;
    };

    // Activar los botones de añadir al carrito
    document.querySelectorAll(".btn-añadir").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        if (!carrito.includes(id)) {
          carrito.push(id);
          localStorage.setItem("carrito", JSON.stringify(carrito));

          Swal.fire({
            title: "¡Producto añadido!",
            text: "Agregado al carrito",
            icon: "success",
            timer: 1000,
            toast: true,
            position: "top-end",
            showConfirmButton: false,
          });

          // Actualizar el contador justo después de añadir
          actualizarContadorCarrito();
        }
      });
    });

    // Llamar una vez al cargar la sección
    actualizarContadorCarrito();
  })
  .catch((err) => console.error("Error al cargar libros:", err));
