// const listaLibros = document.getElementById("lista-libros");

// // Elementos del modal
// const modalImagen = document.getElementById("modalImagen");
// const modalTitulo = document.getElementById("modalTitulo");
// const modalAutor = document.getElementById("modalAutor");
// const modalDescripcion = document.getElementById("modalDescripcion");
// const modalPrecio = document.getElementById("modalPrecio");
// const btnAgregarCarrito = document.getElementById("btnAgregarCarrito");

// // PUERTO FETCH DINAMICO
// const API_URL = window.location.hostname.includes("localhost")
//   ? "http://localhost:3000"
//   : "https://proyecto-talento-tech-production.up.railway.app";
// // const API_URL = window.location.hostname.includes("localhost")
// //   ? "http://localhost:3000"
// //   : "https://proyecto-talento-tech-2eaj.onrender.com";

// // Traer los libros desde el servidor
// fetch(`${API_URL}/api/libros`)
//   .then((res) => res.json())
//   .then((libros) => {
//     // Crear las tarjetas
//     const marcadoLibros = libros
//       .map(({ id, titulo, autor, imagen, alt, precio, descripcion }) => {
//         return `
//           <li class="col-12 col-md-6 col-lg-4 mb-4">
//             <article class="card text-center card-hover h-100">
//               <img class="card-img-top" src="${imagen}" alt="${alt}" />
//               <div class="card-body">
//                 <h2 class="card-title fs-6">${titulo}</h2>
//                 <h6 class="card-subtitle mb-2">${autor}</h6>
//                 <p class="card-text">$${precio}</p>
//               </div>
//               <footer class="card-footer d-flex gap-2">
//                 <button
//                   type="button"
//                   class="btn btn-outline-primary w-50 d-flex align-items-center justify-content-center btn-ver-libro"
//                   data-bs-toggle="modal"
//                   data-bs-target="#modalProducto"
//                   data-id="${id}"
//                 >
//                   <i class="bi bi-eye-fill" aria-hidden="true"></i>
//                   <span class="d-none d-sm-inline ms-2">Ver</span>
//                 </button>
//                 <button
//                   type="button"
//                   class="btn btn-success w-50 d-flex align-items-center justify-content-center btn-añadir"
//                   data-id="${id}"
//                 >
//                   <i class="bi bi-cart-fill" aria-hidden="true"></i>
//                   <span class="d-none d-sm-inline ms-2">Añadir</span>
//                 </button>
//               </footer>
//             </article>
//           </li>
//         `;
//       })
//       .join("");

//     // Insertar en el HTML
//     listaLibros.insertAdjacentHTML("beforeend", marcadoLibros);

//     // Activar botones de ver para llenar el modal
//     document.querySelectorAll(".btn-ver-libro").forEach((boton) => {
//       boton.addEventListener("click", () => {
//         const id = boton.dataset.id;
//         const libro = libros.find((libro) => libro.id == id);

//         if (!libro) return;

//         modalImagen.src = libro.imagen;
//         modalImagen.alt = libro.alt;
//         modalTitulo.textContent = libro.titulo;
//         modalAutor.textContent = libro.autor;
//         modalDescripcion.textContent = libro.descripcion || "Sin descripción";
//         modalPrecio.textContent = `$${libro.precio.toLocaleString()}`;
//         btnAgregarCarrito.dataset.id = id;
//       });
//     });

//     // Activar los botones de añadir al carrito
//     document.querySelectorAll(".btn-añadir").forEach((btn) => {
//       btn.addEventListener("click", (e) => {
//         const id = e.currentTarget.dataset.id;
//         let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//         if (!carrito.includes(id)) {
//           carrito.push(id);
//           localStorage.setItem("carrito", JSON.stringify(carrito));

//           // Disparar evento personalizado para actualizar el contador
//           document.dispatchEvent(new Event("carritoActualizado"));

//           Swal.fire({
//             title: "¡Producto añadido!",
//             text: "Agregado al carrito",
//             icon: "success",
//             timer: 1000,
//             toast: true,
//             position: "top-end",
//             showConfirmButton: false,
//           });
//         }
//       });
//     });

//     // Función de actualización del contador
//     const actualizarContador = () => {
//       const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//       const cartCountEl = document.getElementById("cart-count");
//       const cartCountMovil = document.getElementById("cart-count-movil");

//       if (cartCountEl) cartCountEl.textContent = carrito.length;
//       if (cartCountMovil) cartCountMovil.textContent = carrito.length;
//     };

//     // Escuchar el evento personalizado
//     document.addEventListener("carritoActualizado", actualizarContador);

//     // Llamar una vez al cargar la página
//     actualizarContador();
//   })
//   .catch((err) => console.error("Error al cargar libros:", err));
const listaLibros = document.getElementById("lista-libros");

// Elementos del modal
const modalImagen = document.getElementById("modalImagen");
const modalTitulo = document.getElementById("modalTitulo");
const modalAutor = document.getElementById("modalAutor");
const modalDescripcion = document.getElementById("modalDescripcion");
const modalPrecio = document.getElementById("modalPrecio");
const btnAgregarCarrito = document.getElementById("btnAgregarCarrito");

// Botón de aplicar filtros
const btnAplicarFiltros = document.getElementById("btnAplicarFiltros");

// Selects de filtros
const selectAutor = document.getElementById("selectAutor");
const selectEditorial = document.getElementById("selectEditorial");

// PUERTO FETCH DINAMICO
const API_URL = window.location.hostname.includes("localhost")
  ? "http://localhost:3000"
  : "https://proyecto-talento-tech-production.up.railway.app";

// Variables globales
let librosOriginales = [];

// Traer los libros desde el servidor
fetch(`${API_URL}/api/libros`)
  .then((res) => res.json())
  .then((libros) => {
    // Guardado de todos los libros
    librosOriginales = libros;

    // Generar opciones dinámicas de Autor y Editorial
    const autoresUnicos = [
      ...new Set(libros.map((libro) => libro.autor)),
    ].sort();
    const editorialesUnicas = [
      ...new Set(libros.map((libro) => libro.editorial)),
    ].sort();

    autoresUnicos.forEach((autor) => {
      const option = document.createElement("option");
      option.value = autor;
      option.textContent = autor;
      selectAutor.appendChild(option);
    });

    editorialesUnicas.forEach((ed) => {
      const option = document.createElement("option");
      option.value = ed;
      option.textContent = ed;
      selectEditorial.appendChild(option);
    });

    // Funcion para renderizar libros
    const renderizarLibros = (librosRender) => {
      listaLibros.innerHTML = "";
      const marcadoLibros = librosRender
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
      listaLibros.insertAdjacentHTML("beforeend", marcadoLibros);

      // Reactivar botones
      activarBotones(librosRender);
    };

    // Funcion para activar modales y carrito
    const activarBotones = (librosRender) => {
      document.querySelectorAll(".btn-ver-libro").forEach((boton) => {
        boton.addEventListener("click", () => {
          const id = boton.dataset.id;
          const libro = librosRender.find((libro) => libro.id == id);
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

      document.querySelectorAll(".btn-añadir").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = e.currentTarget.dataset.id;
          let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
          if (!carrito.includes(id)) {
            carrito.push(id);
            localStorage.setItem("carrito", JSON.stringify(carrito));
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
    };

    // Funcion de actualizar el contador del carrito
    const actualizarContador = () => {
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const cartCountEl = document.getElementById("cart-count");
      const cartCountMovil = document.getElementById("cart-count-movil");
      if (cartCountEl) cartCountEl.textContent = carrito.length;
      if (cartCountMovil) cartCountMovil.textContent = carrito.length;
    };
    document.addEventListener("carritoActualizado", actualizarContador);
    actualizarContador();

    // Funcion para filtros
    const aplicarFiltros = () => {
      let filtrados = [...librosOriginales];

      // Categoría
      const categorias = Array.from(
        document.querySelectorAll(".filtro-categoria:checked")
      ).map((item) => item.value);
      if (categorias.length)
        filtrados = filtrados.filter((libro) =>
          categorias.includes(libro.categoria)
        );

      // Autor
      const autorSel = selectAutor.value;
      if (autorSel)
        filtrados = filtrados.filter((libro) => libro.autor === autorSel);

      // Editorial
      const edSel = selectEditorial.value;
      if (edSel)
        filtrados = filtrados.filter((libro) => libro.editorial === edSel);

      // Precio
      const minPrecio =
        parseFloat(document.getElementById("precioMin").value) || 0;
      const maxPrecio =
        parseFloat(document.getElementById("precioMax").value) || Infinity;
      filtrados = filtrados.filter(
        (libro) => libro.precio >= minPrecio && libro.precio <= maxPrecio
      );

      // Año
      const anos = Array.from(
        document.querySelectorAll(".filtro-ano:checked")
      ).map((item) => item.value);

      if (anos.length) {
        filtrados = filtrados.filter((libro) => {
          const anoLibro = Number(libro.año); // ✅ usar libro.año
          if (anos.includes("<1950") && anoLibro < 1950) return true;
          if (
            anos.includes("1950-2000") &&
            anoLibro >= 1950 &&
            anoLibro <= 2000
          )
            return true;
          if (anos.includes(">2000") && anoLibro > 2000) return true;
          return false;
        });
      }

      // Idioma
      const idiomas = Array.from(
        document.querySelectorAll(".filtro-idioma:checked")
      ).map((item) => item.value);
      if (idiomas.length)
        filtrados = filtrados.filter((libro) => idiomas.includes(libro.idioma));

      // Stock
      const soloDisponibles = document.querySelector(".filtro-stock:checked");
      if (soloDisponibles)
        filtrados = filtrados.filter((libro) => libro.stock > 0);

      // Número de páginas
      const minPag = parseInt(document.getElementById("pagMin").value) || 0;
      const maxPag =
        parseInt(document.getElementById("pagMax").value) || Infinity;
      filtrados = filtrados.filter(
        (libro) => libro.paginas >= minPag && libro.paginas <= maxPag
      );

      renderizarLibros(filtrados);
    };

    btnAplicarFiltros.addEventListener("click", aplicarFiltros);

    // Renderizar todo inicialmente
    renderizarLibros(librosOriginales);
  })
  .catch((err) => console.error("Error al cargar libros:", err));
