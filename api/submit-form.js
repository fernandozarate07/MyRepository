// api/form-handler.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Valida los datos del formulario
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Configura el transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // o cualquier otro servicio de correo
      auth: {
        user: process.env.EMAIL_USER, // Tu correo de Google u otro
        pass: process.env.EMAIL_PASS, // Tu contraseña o aplicación específica
      },
    });

    // Define el contenido del correo
    const mailOptions = {
      from: process.env.EMAIL_USER, // El correo desde el que se enviará
      to: process.env.RECIPIENT_EMAIL, // Tu correo de destino
      subject: "Nuevo mensaje de contacto",
      text: `Tienes un nuevo mensaje de ${name} (${email}):\n\n${message}`,
    };

    // Enviar el correo
    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true, message: "Form submitted and email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error sending email" });
    }
  }

  // Si el método no es POST, responde con un error
  res.setHeader("Allow", ["POST"]);
  return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
