import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import nodemailer from "nodemailer"; // <-- NodeMailer
import bodyParser from "body-parser"; // Para recibir datos del formulario

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar ruta absoluta
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Permitir CORS
app.use(cors());

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Middleware para recibir datos de formularios
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conectar con MongoDB
const client = new MongoClient(process.env.MONGO_URI);
let db;

async function conectarDB() {
  try {
    await client.connect();
    db = client.db("libreria");
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
  }
}
conectarDB();

//Ruta index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//Ruta Whatsapp
app.get("/whatsapp", (req, res) => {
  res.json({ numero: process.env.WHATSAPP_NUMBER });
});

// Rutas para obtener los libros
app.get("/api/libros", async (req, res) => {
  try {
    const libros = await db.collection("libros").find().toArray();
    res.json(libros);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener libros" });
  }
});

app.get("/api/libros-nuevos", async (req, res) => {
  try {
    const librosNuevos = await db.collection("librosNuevos").find().toArray();
    res.json(librosNuevos);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener libros nuevos" });
  }
});

app.get("/api/libros-oferta", async (req, res) => {
  try {
    const librosOferta = await db.collection("librosOferta").find().toArray();
    res.json(librosOferta);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener libros en oferta" });
  }
});

// RUTA PARA EL FORMULARIO
app.post("/contacto", async (req, res) => {
  const { nombre, email, telefono, motivo, mensaje } = req.body;
  console.log("Enviando correo a:", process.env.EMAIL_PERSONAL);

  // Configuración del transporter de NodeMailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
    tls: { rejectUnauthorized: false },
    connectionTimeout: 10000, // 10s
  });

  const mailOptions = {
    from: `"Nuevo Contacto – Rincón Encantao" <${process.env.GMAIL_USER}>`,
    to: process.env.EMAIL_PERSONAL,
    subject: `Nuevo mensaje de ${nombre || "Sin nombre"} - ${
      motivo || "Sin motivo"
    }`,
    text: `
Nombre: ${nombre || "No proporcionado"}
Correo: ${email || "No proporcionado"}
Teléfono: ${telefono || "No proporcionado"}
Motivo: ${motivo || "No proporcionado"}
Mensaje: ${mensaje || "No proporcionado"}
  `,
    html: `
<h3>Nuevo mensaje de ${nombre || "No proporcionado"}</h3>
<p><strong>Correo:</strong> ${email || "No proporcionado"}</p>
<p><strong>Teléfono:</strong> ${telefono || "No proporcionado"}</p>
<p><strong>Motivo:</strong> ${motivo || "No proporcionado"}</p>
<p><strong>Mensaje:</strong> ${mensaje || "No proporcionado"}</p>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Correo enviado correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error al enviar correo" });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
