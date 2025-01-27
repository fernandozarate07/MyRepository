import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const mailOptions = {
      to: process.env.RECIPIENT_EMAIL,
      from: process.env.EMAIL_USER,
      subject: "Nuevo mensaje de contacto",
      text: `Tienes un nuevo mensaje de ${name} (${email}):\n\n${message}`,
    };

    try {
      await sendgrid.send(mailOptions);
      return res.status(200).json({ success: true, message: "¡Correo enviado con éxito!" });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      return res.status(500).json({ error: "Error al enviar el correo" });
    }
  }

  res.setHeader("Allow", ["POST"]);
  return res.status(405).json({ error: `Método ${req.method} no permitido` });
}
