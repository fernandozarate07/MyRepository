import { useState } from "react";

const Formcontact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    // Depuración: Muestra los datos del formulario antes de enviarlo
    console.log("Form Data Sent:", formData);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Depuración: Muestra la respuesta recibida del backend
      console.log("Response from API:", data);

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
      } else {
        setResponseMessage(data.error || "An error occurred while sending the message.");
      }
    } catch (error) {
      setResponseMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required></textarea>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send"}
      </button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
};

export default Formcontact;
