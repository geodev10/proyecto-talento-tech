
const libros = [
  {
    id: 1,
    titulo: "Carrie Ed. Aniversario 50",
    autor: "Stephen King",
    precio: 63000,
    imagen: "./assets/img/libros/carrie.webp",
    alt: "Portada del libro Carrie Ed. Aniversario 50",
    descripcion:
      "Carrie, una joven acosada por sus compañeras y oprimida por su madre fanática, desata un poder devastador.",
    paginas: 368,
  },
  {
    id: 2,
    titulo: "Vampiros, caníbales y payasos asesinos",
    autor: "Esteban Cruz Niño",
    precio: 62000,
    imagen: "./assets/img/libros/vampiros-canibales.webp",
    alt: "Portada del libro Vampiros, caníbales y payasos asesinos",
    descripcion:
      "Una enciclopedia de la maldad humana que mezcla mitos urbanos y hechos reales del terror latinoamericano.",
    paginas: 224,
  },
  {
    id: 3,
    titulo: "El castillo de Barbazul",
    autor: "Javier Cercas",
    precio: 59000,
    imagen: "./assets/img/libros/barbazul.webp",
    alt: "Portada del libro El castillo de Barbazul",
    descripcion:
      "Melchor Marín regresa para cerrar la trilogía con una historia de secretos, poder y redención.",
    paginas: 400,
  },
  {
    id: 4,
    titulo: "Edgar Allan Poe, Cuentos completos",
    autor: "Edgar Allan Poe",
    precio: 54000,
    imagen: "./assets/img/libros/edgar-completos.webp",
    alt: "Portada del libro Edgar Allan Poe, Cuentos completos",
    descripcion:
      "Relatos inmortales de misterio, locura y horror que marcaron la literatura universal.",
    paginas: 600,
  },
  {
    id: 5,
    titulo: "C.A.L.I",
    autor: "Carolina Andújar",
    precio: 55000,
    imagen: "./assets/img/libros/cali.webp",
    alt: "Portada del libro C.A.L.I",
    descripcion:
      "Una novela oscura ambientada en Cali, donde el crimen y lo sobrenatural se mezclan en una trama inquietante.",
    paginas: 168,
  },
  {
    id: 6,
    titulo: "Cortázar Cuentos Completos I",
    autor: "Julio Cortázar",
    precio: 48000,
    imagen: "./assets/img/libros/cortazar.webp",
    alt: "Portada del libro Cortázar Cuentos Completos I",
    descripcion:
      "Una selección de relatos que definen el estilo único y surrealista de Cortázar.",
    paginas: 320,
  },
  {
    id: 7,
    titulo: "Cortázar Cuentos Completos II",
    autor: "Julio Cortázar",
    precio: 49000,
    imagen: "./assets/img/libros/cortazar2.webp",
    alt: "Portada del libro Cortázar Cuentos Completos II",
    descripcion:
      "Relatos donde lo cotidiano se vuelve extraordinario y lo absurdo cobra vida.",
    paginas: 330,
  },
  {
    id: 8,
    titulo: "La llamada de Cthulhu",
    autor: "H. P. Lovecraft",
    precio: 45000,
    imagen: "./assets/img/libros/cthulhu.webp",
    alt: "Portada del libro La llamada de Cthulhu",
    descripcion:
      "El relato más emblemático del horror cósmico y las fuerzas que duermen bajo el mar.",
    paginas: 128,
  },
  {
    id: 9,
    titulo: "Cuentos de fantasmas",
    autor: "Edgar Allan Poe",
    precio: 42000,
    imagen: "./assets/img/libros/cuentos-fantasmas.webp",
    alt: "Portada del libro Cuentos de fantasmas",
    descripcion:
      "Una colección de historias sobrenaturales con el inconfundible toque oscuro de Poe.",
    paginas: 200,
  },
  {
    id: 10,
    titulo: "Cujo",
    autor: "Stephen King",
    precio: 46000,
    imagen: "./assets/img/libros/cujo.webp",
    alt: "Portada del libro Cujo",
    descripcion:
      "Un perro rabioso siembra el terror en una pequeña ciudad atrapando a una madre y su hijo.",
    paginas: 288,
  },
  {
    id: 11,
    titulo: "Drácula",
    autor: "Bram Stoker",
    precio: 50000,
    imagen: "./assets/img/libros/dracula.webp",
    alt: "Portada del libro Drácula",
    descripcion:
      "El clásico de la literatura gótica que dio vida al vampiro más famoso del mundo.",
    paginas: 416,
  },
  {
    id: 12,
    titulo: "Dune",
    autor: "Frank Herbert",
    precio: 75000,
    imagen: "./assets/img/libros/dune.webp",
    alt: "Portada del libro Dune",
    descripcion:
      "Una epopeya de poder, religión y ecología en el planeta desértico de Arrakis.",
    paginas: 896,
  },
  {
    id: 13,
    titulo: "Pablo Escobar y los patrones de la brujería",
    autor: "Esteban Cruz Niño",
    precio: 62000,
    imagen: "./assets/img/libros/escobar-brujeria.webp",
    alt: "Portada del libro Pablo Escobar y los patrones de la brujería",
    descripcion:
      "Un relato que une el narcotráfico colombiano con rituales de magia negra y superstición.",
    paginas: 350,
  },
  {
    id: 14,
    titulo: "El fantasma de Canterville y otros relatos",
    autor: "Oscar Wilde",
    precio: 43000,
    imagen: "./assets/img/libros/fantasma-canterville.webp",
    alt: "Portada del libro El fantasma de Canterville y otros relatos",
    descripcion:
      "Historias donde el ingenio y la ironía de Wilde se mezclan con lo sobrenatural.",
    paginas: 200,
  },
  {
    id: 15,
    titulo: "El fantasma de la ópera",
    autor: "Gaston Leroux",
    precio: 52000,
    imagen: "./assets/img/libros/fantasma-opera.webp",
    alt: "Portada del libro El fantasma de la ópera",
    descripcion:
      "Amor, misterio y tragedia en los túneles ocultos de la ópera de París.",
    paginas: 352,
  },
  {
    id: 16,
    titulo: "Harry Potter",
    autor: "J. K. Rowling",
    precio: 68000,
    imagen: "./assets/img/libros/harry-potter.webp",
    alt: "Portada del libro Harry Potter",
    descripcion:
      "La historia de un joven mago que descubre su destino en un mundo lleno de hechicería.",
    paginas: 780,
  },
  {
    id: 17,
    titulo: "El hobbit",
    autor: "J. R. R. Tolkien",
    precio: 57000,
    imagen: "./assets/img/libros/hobbit.webp",
    alt: "Portada del libro El hobbit",
    descripcion:
      "Bilbo Bolsón emprende un viaje inesperado que cambiará la historia de la Tierra Media.",
    paginas: 310,
  },
  {
    id: 18,
    titulo: "De hombres a monstruos",
    autor: "Patrick Ness",
    precio: 50000,
    imagen: "./assets/img/libros/hombres-monstruos.webp",
    alt: "Portada del libro De hombres a monstruos",
    descripcion:
      "Una poderosa reflexión sobre la violencia, la identidad y la transformación interior.",
    paginas: 280,
  },
  {
    id: 19,
    titulo: "Inmortal Dark",
    autor: "Tigest Girma",
    precio: 48000,
    imagen: "./assets/img/libros/inmortal.webp",
    alt: "Portada del libro Inmortal Dark",
    descripcion:
      "Una novela donde la oscuridad y la inmortalidad se entrelazan en un mundo de secretos.",
    paginas: 300,
  },
  {
    id: 20,
    titulo: "El invitado de Drácula y otros relatos",
    autor: "Bram Stoker",
    precio: 46000,
    imagen: "./assets/img/libros/invitado-dracula.webp",
    alt: "Portada del libro El invitado de Drácula y otros relatos",
    descripcion:
      "Cuentos góticos que amplían el universo de Drácula con nuevas pesadillas literarias.",
    paginas: 240,
  },
  {
    id: 21,
    titulo: "It",
    autor: "Stephen King",
    precio: 70000,
    imagen: "./assets/img/libros/it.webp",
    alt: "Portada del libro It",
    descripcion:
      "El mal adopta la forma de un payaso que atormenta a un grupo de niños en Derry.",
    paginas: 1138,
  },
  {
    id: 22,
    titulo: "Dr. Jekyll y Mr. Hyde",
    autor: "Robert L. Stevenson",
    precio: 45000,
    imagen: "./assets/img/libros/jekyll-hyde.webp",
    alt: "Portada del libro Dr. Jekyll y Mr. Hyde",
    descripcion:
      "Un clásico sobre la dualidad humana y los monstruos que habitan en cada uno de nosotros.",
    paginas: 144,
  },
  {
    id: 23,
    titulo: "Leviatán",
    autor: "Shiro Kuroi",
    precio: 52000,
    imagen: "./assets/img/libros/leviatan.webp",
    alt: "Portada del libro Leviatán",
    descripcion:
      "Fantasía oscura y acción en una historia de monstruos, secretos y redención.",
    paginas: 320,
  },
  {
    id: 24,
    titulo: "Metamorfosis",
    autor: "Franz Kafka",
    precio: 47000,
    imagen: "./assets/img/libros/metamorfosis.webp",
    alt: "Portada del libro Metamorfosis",
    descripcion:
      "Gregor Samsa despierta convertido en insecto y enfrenta el absurdo de la existencia humana.",
    paginas: 201,
  },
  {
    id: 25,
    titulo: "Los mitos de Cthulhu",
    autor: "H. P. Lovecraft",
    precio: 53000,
    imagen: "./assets/img/libros/mitos-cthulhu.webp",
    alt: "Portada del libro Los mitos de Cthulhu",
    descripcion:
      "Colección de relatos sobre los dioses antiguos y el terror cósmico de Lovecraft.",
    paginas: 320,
  },
  {
    id: 26,
    titulo: "Muertes y muertecitas",
    autor: "Humberto de la Calle",
    precio: 42000,
    imagen: "./assets/img/libros/muertes-muertecitas.webp",
    alt: "Portada del libro Muertes y muertecitas",
    descripcion:
      "Cuentos breves con humor negro, tragedia y una mirada aguda sobre la muerte.",
    paginas: 180,
  },
  {
    id: 27,
    titulo: "El libro de los portales",
    autor: "Laura Gallego",
    precio: 58000,
    imagen: "./assets/img/libros/portales.webp",
    alt: "Portada del libro El libro de los portales",
    descripcion:
      "Una historia de magia y misterios en un mundo donde los portales conectan lugares y destinos.",
    paginas: 396,
  },
  {
    id: 28,
    titulo: "El psicoanalista",
    autor: "John Katzenbach",
    precio: 60000,
    imagen: "./assets/img/libros/psicoanalista.webp",
    alt: "Portada del libro El psicoanalista",
    descripcion:
      "Un thriller psicológico donde un terapeuta se ve obligado a descubrir la identidad de su enemigo.",
    paginas: 448,
  },
  {
    id: 29,
    titulo: "La reina de los condenados",
    autor: "Anne Rice",
    precio: 65000,
    imagen: "./assets/img/libros/reina-condenados.webp",
    alt: "Portada del libro La reina de los condenados",
    descripcion:
      "El despertar de la reina Akasha amenaza con cambiar el destino de todos los vampiros.",
    paginas: 416,
  },
  {
    id: 30,
    titulo: "Relatos de vampiros",
    autor: "Meritxell Ribas",
    precio: 43000,
    imagen: "./assets/img/libros/relatos-vampiros.webp",
    alt: "Portada del libro Relatos de vampiros",
    descripcion:
      "Una recopilación de relatos que exploran la figura del vampiro desde distintas perspectivas.",
    paginas: 240,
  },
  {
    id: 31,
    titulo: "Sherlock Holmes",
    autor: "Sir Arthur Doyle",
    precio: 55000,
    imagen: "./assets/img/libros/sherlock.webp",
    alt: "Portada del libro Sherlock Holmes",
    descripcion:
      "Los casos más brillantes del detective más famoso de la historia.",
    paginas: 384,
  },
  {
    id: 32,
    titulo: "El último graduado",
    autor: "Naomi Novik",
    precio: 62000,
    imagen: "./assets/img/libros/ultimo-graduado.webp",
    alt: "Portada del libro El último graduado",
    descripcion:
      "Magia, peligro y decisiones difíciles en la continuación de una de las sagas de fantasía más originales.",
    paginas: 450,
  },

];

// 📚 Libros en oferta
const librosOferta = [
  {
    id: 1,
    titulo: "Carrie Ed. Aniversario 50",
    autor: "Stephen King",
    precio: 63000,
    imagen: "./assets/img/libros/carrie.webp",
    alt: "Portada del libro Carrie Ed. Aniversario 50",
    descripcion:
      "Carrie, una joven acosada por sus compañeras y oprimida por su madre fanática, desata un poder devastador.",
    paginas: 368,
  },
  {
    id: 4,
    titulo: "Edgar Allan Poe, Cuentos completos",
    autor: "Edgar Allan Poe",
    precio: 54000,
    imagen: "./assets/img/libros/edgar-completos.webp",
    alt: "Portada del libro Edgar Allan Poe, Cuentos completos",
    descripcion:
      "Relatos inmortales de misterio, locura y horror que marcaron la literatura universal.",
    paginas: 600,
  },
  {
    id: 8,
    titulo: "La llamada de Cthulhu",
    autor: "H. P. Lovecraft",
    precio: 45000,
    imagen: "./assets/img/libros/cthulhu.webp",
    alt: "Portada del libro La llamada de Cthulhu",
    descripcion:
      "El relato más emblemático del horror cósmico y las fuerzas que duermen bajo el mar.",
    paginas: 128,
  },
  {
    id: 11,
    titulo: "Drácula",
    autor: "Bram Stoker",
    precio: 50000,
    imagen: "./assets/img/libros/dracula.webp",
    alt: "Portada del libro Drácula",
    descripcion:
      "El clásico de la literatura gótica que dio vida al vampiro más famoso del mundo.",
    paginas: 416,
  },
  {
    id: 14,
    titulo: "El fantasma de Canterville y otros relatos",
    autor: "Oscar Wilde",
    precio: 43000,
    imagen: "./assets/img/libros/fantasma-canterville.webp",
    alt: "Portada del libro El fantasma de Canterville y otros relatos",
    descripcion:
      "Historias donde el ingenio y la ironía de Wilde se mezclan con lo sobrenatural.",
    paginas: 200,
  },
  {
    id: 17,
    titulo: "El hobbit",
    autor: "J. R. R. Tolkien",
    precio: 57000,
    imagen: "./assets/img/libros/hobbit.webp",
    alt: "Portada del libro El hobbit",
    descripcion:
      "Bilbo Bolsón emprende un viaje inesperado que cambiará la historia de la Tierra Media.",
    paginas: 310,
  },
  {
    id: 21,
    titulo: "It",
    autor: "Stephen King",
    precio: 70000,
    imagen: "./assets/img/libros/it.webp",
    alt: "Portada del libro It",
    descripcion:
      "El mal adopta la forma de un payaso que atormenta a un grupo de niños en Derry.",
    paginas: 1138,
  },
  {
    id: 24,
    titulo: "Metamorfosis",
    autor: "Franz Kafka",
    precio: 47000,
    imagen: "./assets/img/libros/metamorfosis.webp",
    alt: "Portada del libro Metamorfosis",
    descripcion:
      "Gregor Samsa despierta convertido en insecto y enfrenta el absurdo de la existencia humana.",
    paginas: 201,
  },
  {
    id: 28,
    titulo: "El psicoanalista",
    autor: "John Katzenbach",
    precio: 60000,
    imagen: "./assets/img/libros/psicoanalista.webp",
    alt: "Portada del libro El psicoanalista",
    descripcion:
      "Un thriller psicológico donde un terapeuta se ve obligado a descubrir la identidad de su enemigo.",
    paginas: 448,
  },
];


// 🆕 Libros nuevos
const librosNuevos = [
  {
    id: 5,
    titulo: "C.A.L.I",
    autor: "Carolina Andújar",
    precio: 55000,
    imagen: "./assets/img/libros/cali.webp",
    alt: "Portada del libro C.A.L.I",
    descripcion:
      "Una novela oscura ambientada en Cali, donde el crimen y lo sobrenatural se mezclan en una trama inquietante.",
    paginas: 168,
  },
  {
    id: 9,
    titulo: "Cuentos de fantasmas",
    autor: "Edgar Allan Poe",
    precio: 42000,
    imagen: "./assets/img/libros/cuentos-fantasmas.webp",
    alt: "Portada del libro Cuentos de fantasmas",
    descripcion:
      "Una colección de historias sobrenaturales con el inconfundible toque oscuro de Poe.",
    paginas: 200,
  },
  {
    id: 12,
    titulo: "Dune",
    autor: "Frank Herbert",
    precio: 75000,
    imagen: "./assets/img/libros/dune.webp",
    alt: "Portada del libro Dune",
    descripcion:
      "Una epopeya de poder, religión y ecología en el planeta desértico de Arrakis.",
    paginas: 896,
  },
  {
    id: 13,
    titulo: "Pablo Escobar y los patrones de la brujería",
    autor: "Esteban Cruz Niño",
    precio: 62000,
    imagen: "./assets/img/libros/escobar-brujeria.webp",
    alt: "Portada del libro Pablo Escobar y los patrones de la brujería",
    descripcion:
      "Un relato que une el narcotráfico colombiano con rituales de magia negra y superstición.",
    paginas: 350,
  },
  {
    id: 15,
    titulo: "El fantasma de la ópera",
    autor: "Gaston Leroux",
    precio: 52000,
    imagen: "./assets/img/libros/fantasma-opera.webp",
    alt: "Portada del libro El fantasma de la ópera",
    descripcion:
      "Amor, misterio y tragedia en los túneles ocultos de la ópera de París.",
    paginas: 352,
  },
  {
    id: 20,
    titulo: "El invitado de Drácula y otros relatos",
    autor: "Bram Stoker",
    precio: 46000,
    imagen: "./assets/img/libros/invitado-dracula.webp",
    alt: "Portada del libro El invitado de Drácula y otros relatos",
    descripcion:
      "Cuentos góticos que amplían el universo de Drácula con nuevas pesadillas literarias.",
    paginas: 240,
  },
  {
    id: 23,
    titulo: "Leviatán",
    autor: "Shiro Kuroi",
    precio: 52000,
    imagen: "./assets/img/libros/leviatan.webp",
    alt: "Portada del libro Leviatán",
    descripcion:
      "Fantasía oscura y acción en una historia de monstruos, secretos y redención.",
    paginas: 320,
  },
  {
    id: 30,
    titulo: "Relatos de vampiros",
    autor: "Meritxell Ribas",
    precio: 43000,
    imagen: "./assets/img/libros/relatos-vampiros.webp",
    alt: "Portada del libro Relatos de vampiros",
    descripcion:
      "Una recopilación de relatos que exploran la figura del vampiro desde distintas perspectivas.",
    paginas: 240,
  },
  {
    id: 32,
    titulo: "El último graduado",
    autor: "Naomi Novik",
    precio: 62000,
    imagen: "./assets/img/libros/ultimo-graduado.webp",
    alt: "Portada del libro El último graduado",
    descripcion:
      "Magia, peligro y decisiones difíciles en la continuación de una de las sagas de fantasía más originales.",
    paginas: 450,
  },
];
