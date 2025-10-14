import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import bodyParser from "body-parser";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar rutas absolutas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 🔹 Conexión a MongoDB
const client = new MongoClient(process.env.MONGO_URI);
let db;

async function conectarDB() {
  try {
    await client.connect();
    db = client.db("libreria");
    console.log("✅ Conectado a MongoDB");
  } catch (err) {
    console.error("❌ Error al conectar a MongoDB:", err);
  }
}
conectarDB();

// 🔹 Rutas principales
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/whatsapp", (req, res) => {
  res.json({ numero: process.env.WHATSAPP_NUMBER });
});

// 🔹 Rutas para libros
app.get("/api/libros", async (req, res) => {
  try {
    const libros = await db.collection("libros").find().toArray();
    res.json(libros);
  } catch {
    res.status(500).json({ error: "Error al obtener libros" });
  }
});

// 🔹 Configuración de RESEND
const resend = new Resend(process.env.RESEND_API_KEY);

// 🔹 Ruta de contacto (envío de correo)
app.post("/contacto", async (req, res) => {
  const { nombre, email, telefono, motivo, mensaje } = req.body;

  try {
    await resend.emails.send({
      from: "Rincón Encantao <onboarding@resend.dev>", // 👈 remitente recomendado para evitar bloqueos
      to: process.env.EMAIL_PERSONAL, // destino en .env
      subject: `Nuevo mensaje de ${nombre || "Sin nombre"} - ${
        motivo || "Sin motivo"
      }`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color:#186a1e;">Nuevo mensaje desde el formulario</h2>
          <p><strong>Nombre:</strong> ${nombre || "No proporcionado"}</p>
          <p><strong>Correo:</strong> ${email || "No proporcionado"}</p>
          <p><strong>Teléfono:</strong> ${telefono || "No proporcionado"}</p>
          <p><strong>Motivo:</strong> ${motivo || "No proporcionado"}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${mensaje || "No proporcionado"}</p>
        </div>
      `,
    });

    console.log("📩 Correo enviado correctamente");
    res.json({ success: true, message: "Correo enviado correctamente" });
  } catch (err) {
    console.error("❌ Error al enviar correo:", err);
    res.status(500).json({ success: false, message: "Error al enviar correo" });
  }
});

// 🔹 Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
