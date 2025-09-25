const libros = [
    {
        id: 1,
        titulo: "Dios nunca se da por vencido contigo",
        autor: "Max Lucado",
        genero: "Inspiración / Religión / Fe Cristiana",
        precio: 63000,
        imagen: "./assets/img/mision-cristiana.webp",
        alt: "Portada del libro Dios nunca se da por vencido contigo"
    },
    {
        id: 2,
        titulo: "Dios nunca se da por vencido contigo",
        autor: "Max Lucado",
        genero: "Inspiración / Religión / Fe Cristiana",
        precio: 63000,
        imagen: "./assets/img/mision-cristiana.webp",
        alt: "Portada del libro Dios nunca se da por vencido contigo"
    },
    {
        id: 3,
        titulo: "Dios nunca se da por vencido contigo",
        autor: "Max Lucado",
        genero: "Inspiración / Religión / Fe Cristiana",
        precio: 63000,
        imagen: "./assets/img/mision-cristiana.webp",
        alt: "Portada del libro Dios nunca se da por vencido contigo"
    },
    {
        id: 4,
        titulo: "Dios nunca se da por vencido contigo",
        autor: "Max Lucado",
        genero: "Inspiración / Religión / Fe Cristiana",
        precio: 63000,
        imagen: "./assets/img/mision-cristiana.webp",
        alt: "Portada del libro Dios nunca se da por vencido contigo"
    },
    {
        id: 5,
        titulo: "Dios nunca se da por vencido contigo",
        autor: "Max Lucado",
        genero: "Inspiración / Religión / Fe Cristiana",
        precio: 63000,
        imagen: "./assets/img/mision-cristiana.webp",
        alt: "Portada del libro Dios nunca se da por vencido contigo"
    },
    {
        id: 6,
        titulo: "Dios nunca se da por vencido contigo",
        autor: "Max Lucado",
        genero: "Inspiración / Religión / Fe Cristiana",
        precio: 63000,
        imagen: "./assets/img/mision-cristiana.webp",
        alt: "Portada del libro Dios nunca se da por vencido contigo"
    },
    {
        id: 7,
        titulo: "Dios nunca se da por vencido contigo",
        autor: "Max Lucado",
        genero: "Inspiración / Religión / Fe Cristiana",
        precio: 63000,
        imagen: "./assets/img/mision-cristiana.webp",
        alt: "Portada del libro Dios nunca se da por vencido contigo"
    },
    {
        id: 8,
        titulo: "Dios nunca se da por vencido contigo",
        autor: "Max Lucado",
        genero: "Inspiración / Religión / Fe Cristiana",
        precio: 63000,
        imagen: "./assets/img/mision-cristiana.webp",
        alt: "Portada del libro Dios nunca se da por vencido contigo"
    },
    {
        id: 9,
        titulo: "Dios nunca se da por vencido contigo",
        autor: "Max Lucado",
        genero: "Inspiración / Religión / Fe Cristiana",
        precio: 63000,
        imagen: "./assets/img/mision-cristiana.webp",
        alt: "Portada del libro Dios nunca se da por vencido contigo"
    }
];


const listaLibros = document.getElementById("lista-libros");

console.log(listaLibros);

const marcadoLibros = libros.map(({ titulo, autor, imagen, alt, precio }) => {
    return `
    <li class="col-12 col-md-6 col-lg-4 mb-4">
              <article class="card text-center card-hover h-100">
                <img
                  class="card-img-top"
                  src="${imagen}"
                  alt="${alt}" />

                <div class="card-body">
                  <h6 class="card-subtitle text-muted mb-2">${autor}</h6>
                  <h2 class="card-title fs-6">
                    ${titulo}
                  </h2>
                  <p class="card-text">$${precio}</p>
                </div>

                <footer class="card-footer">
                  <a href="#" class="btn text-light">Comprar</a>
                </footer>
              </article>
            </li>
    `
}).join("");

listaLibros.insertAdjacentHTML("beforeend", marcadoLibros)