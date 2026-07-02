import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">

      <h1>Our Portfolio</h1>

      <div className="portfolio-container">

        <div className="project-card">
          <img
            src="https://picsum.photos/400/250?random=1"
            alt="Project 1"
          />

          <h3>Portfolio Website</h3>

          <p>
            A modern portfolio website built using React and CSS.
          </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <img
            src="https://picsum.photos/400/250?random=2"
            alt="Project 2"
          />

          <h3>E-Commerce App</h3>

          <p>
            Online shopping website with responsive design.
          </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <img
            src="https://picsum.photos/400/250?random=3"
            alt="Project 3"
          />

          <h3>Student Management</h3>

          <p>
            CRUD application using React and LocalStorage.
          </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <img
            src="https://picsum.photos/400/250?random=4"
            alt="Project 4"
          />

          <h3>Weather App</h3>

          <p>
            Weather forecast app with a clean and modern UI.
          </p>

          <button>View Project</button>
        </div>

      </div>

    </section>
  );
}

export default Portfolio;