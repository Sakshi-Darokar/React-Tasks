import { useEffect, useState } from "react";
import "./Admin.css";

function Admin() {

  // Contact Messages
  const [contacts, setContacts] = useState([]);

  // Services
  const [services, setServices] = useState([]);

  // Service Form
  const [service, setService] = useState({
    icon: "",
    title: "",
    description: "",
  });

  // Edit Index
  const [editIndex, setEditIndex] = useState(null);

  // Load LocalStorage Data
  useEffect(() => {

    const contactData =
      JSON.parse(localStorage.getItem("contacts")) || [];

    setContacts(contactData);

    const serviceData =
      JSON.parse(localStorage.getItem("services")) || [];

    setServices(serviceData);

  }, []);

  // Delete Contact
  const deleteMessage = (index) => {

    const updatedContacts = contacts.filter((item, i) => i !== index);

    setContacts(updatedContacts);

    localStorage.setItem(
      "contacts",
      JSON.stringify(updatedContacts)
    );

  };

  // Input Change
  const handleChange = (e) => {

    setService({
      ...service,
      [e.target.name]: e.target.value,
    });

  };

  // Add or Update Service
  const addService = () => {

    if (
      service.icon === "" ||
      service.title === "" ||
      service.description === ""
    ) {
      alert("Please Fill All Fields");
      return;
    }

    let updatedServices = [...services];

    if (editIndex === null) {

      updatedServices.push(service);

      alert("Service Added Successfully");

    } else {

      updatedServices[editIndex] = service;

      alert("Service Updated Successfully");

      setEditIndex(null);

    }

    setServices(updatedServices);

    localStorage.setItem(
      "services",
      JSON.stringify(updatedServices)
    );

    setService({
      icon: "",
      title: "",
      description: "",
    });

  };

  // Edit Service
  const editService = (index) => {

    setService(services[index]);

    setEditIndex(index);

  };

  // Delete Service
  const deleteService = (index) => {

    const updatedServices = services.filter((item, i) => i !== index);

    setServices(updatedServices);

    localStorage.setItem(
      "services",
      JSON.stringify(updatedServices)
    );

    if (editIndex === index) {
      setEditIndex(null);

      setService({
        icon: "",
        title: "",
        description: "",
      });
    }

  };

  return (
    <section className="admin">

      <h1>Admin Panel</h1>

      {/* Contact Messages */}

      <h2>Contact Messages</h2>

      {
        contacts.length === 0 ? (
          <p>No Messages Found</p>
        ) : (
          contacts.map((item, index) => (

            <div className="message-card" key={index}>

              <h3>{item.name}</h3>

              <p>
                <strong>Email :</strong> {item.email}
              </p>

              <p>
                <strong>Subject :</strong> {item.subject}
              </p>

              <p>
                <strong>Message :</strong> {item.message}
              </p>

              <button onClick={() => deleteMessage(index)}>
                Delete
              </button>

            </div>

          ))
        )
      }

      <hr />

      {/* Add Service */}

      <h2>
        {editIndex === null ? "Add New Service" : "Edit Service"}
      </h2>

      <div className="service-form">

        <input
          type="text"
          name="icon"
          placeholder="Enter Emoji"
          value={service.icon}
          onChange={handleChange}
        />

        <input
          type="text"
          name="title"
          placeholder="Enter Service Title"
          value={service.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Enter Service Description"
          value={service.description}
          onChange={handleChange}
        ></textarea>

        <button onClick={addService}>
          {editIndex === null ? "Add Service" : "Update Service"}
        </button>

      </div>

      <hr />

      {/* Manage Services */}

      <h2>Manage Services</h2>

      {
        services.length === 0 ? (
          <p>No Services Found</p>
        ) : (
          services.map((item, index) => (

            <div className="service-card" key={index}>

              <h3>
                {item.icon} {item.title}
              </h3>

              <p>{item.description}</p>

              <button
                className="edit-btn"
                onClick={() => editService(index)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteService(index)}
              >
                Delete
              </button>

            </div>

          ))
        )
      }

    </section>
  );
}

export default Admin;