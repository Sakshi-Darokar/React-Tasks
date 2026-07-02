import { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all fields.");
      return;
    }

    const oldData =
      JSON.parse(localStorage.getItem("contacts")) || [];

    oldData.push(formData);

    localStorage.setItem(
      "contacts",
      JSON.stringify(oldData)
    );

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

  };

  return (
    <section className="contact">

      <h1>Contact Us</h1>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="subject"
          placeholder="Enter Subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Write Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;