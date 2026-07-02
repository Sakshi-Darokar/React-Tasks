// import "./Services.css";

// function Services() {
//   return (
//     <section className="services">

//       <h1>Our Services</h1>

//       <div className="service-container">

//         <div className="card">
//           <h2>💻</h2>
//           <h3>Web Development</h3>
//           <p>
//             Build modern and responsive websites using HTML, CSS, JavaScript and React.
//           </p>
//         </div>

//         <div className="card">
//           <h2>⚛️</h2>
//           <h3>React Development</h3>
//           <p>
//             Create fast and interactive single-page applications with React.
//           </p>
//         </div>

//         <div className="card">
//           <h2>🎨</h2>
//           <h3>UI / UX Design</h3>
//           <p>
//             Design attractive, user-friendly interfaces for web applications.
//           </p>
//         </div>

//         <div className="card">
//           <h2>📱</h2>
//           <h3>Responsive Design</h3>
//           <p>
//             Make websites look great on mobile, tablet, and desktop devices.
//           </p>
//         </div>

//       </div>

//     </section>
//   );
// }

// export default Services;


import { useEffect, useState } from "react";
import "./Services.css";

function Services() {

  const [services, setServices] = useState([]);

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("services"));

    if (data) {
      setServices(data);
    } else {

      const defaultServices = [

        {
          icon: "💻",
          title: "Web Development",
          description: "Build modern and responsive websites."
        },

        {
          icon: "⚛️",
          title: "React Development",
          description: "Develop fast React applications."
        },

        {
          icon: "🎨",
          title: "UI / UX Design",
          description: "Create attractive user interfaces."
        },

        {
          icon: "📱",
          title: "Responsive Design",
          description: "Websites for mobile, tablet and desktop."
        }

      ];

      localStorage.setItem(
        "services",
        JSON.stringify(defaultServices)
      );

      setServices(defaultServices);

    }

  }, []);

  return (
    <section className="services">

      <h1>Our Services</h1>

      <div className="service-container">

        {services.map((service, index) => (

          <div className="card" key={index}>

            <h2>{service.icon}</h2>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;