import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Verificación básica de datos
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // Depuración: Muestra los datos recibidos
    console.log("Received Form Data:", { name, email, message });

    try {
      // Configuración del transportador de Nodemailer
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER, // Tu correo
          pass: process.env.EMAIL_PASS, // Clave de la aplicación de Google
        },
      });

      // Configuración del correo
      const mailOptions = {
        from: process.env.EMAIL_USER, // El correo desde el que se enviará
        to: process.env.RECIPIENT_EMAIL, // El correo de destino
        subject: "Nuevo mensaje de contacto",
        text: `Tienes un nuevo mensaje de ${name} (${email}):\n\n${message}`,
      };

      // Depuración: Muestra la configuración del correo
      console.log("Sending Email:", mailOptions);

      // Enviar el correo
      await transporter.sendMail(mailOptions);
      console.log("Email Sent Successfully!");
      return res.status(200).json({ success: true, message: "¡Correo enviado con éxito!" });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      return res.status(500).json({ error: "Error al enviar el correo" });
    }
  }

  // Si el método no es POST, responde con un error 405
  res.setHeader("Allow", ["POST"]);
  return res.status(405).json({ error: `Método ${req.method} no permitido` });
}
