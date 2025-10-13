const form = document.querySelector("form");
// const API_URL = window.location.hostname.includes("localhost")
//   ? "http://localhost:3000"
//   : "https://proyecto-talento-tech-production.up.railway.app";
const API_URL = window.location.hostname.includes("localhost")
  ? "http://localhost:3000"
  : "https://proyecto-talento-tech-2eaj.onrender.com";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const datos = {
    nombre: form.nombre.value,
    email: form.email.value,
    telefono: form.telefono.value,
    motivo: form.motivo.value,
    mensaje: form.mensaje.value,
  };

  try {
    const res = await fetch(`${API_URL}/contacto`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    const data = await res.json();

    if (data.success) {
      Swal.fire("¡Listo!", "Correo enviado correctamente", "success");
      form.reset();
    } else {
      Swal.fire("Error", "Hubo un problema al enviar tu mensaje.", "error");
    }
  } catch (err) {
    console.error(err);
    Swal.fire("Error", "Hubo un problema al enviar tu mensaje.", "error");
  }
});
