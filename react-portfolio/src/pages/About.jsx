import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
          alt="About"
        />
      </div>

      <div className="about-content">

        <h1>About Our Company</h1>

        <h3>We Build Modern Websites Using React</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Doloremque, dignissimos. Quisquam, saepe. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>

        <button>Read More</button>

      </div>

    </section>
  );
}

export default About;