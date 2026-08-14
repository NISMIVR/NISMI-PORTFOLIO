import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "VeeyaR",
      category: "E-Commerce Web Application",
      description:
        "A responsive vegetables and fruits e-commerce website where users can browse products, search and sort items, manage their cart and wishlist, proceed to checkout, and view their orders.",
      tech: ["React.js", "Vite", "JavaScript", "CSS", "LocalStorage"],
      image: "/projects/veeyar.png",
      github: "#",
      live: "#",
    },

    {
      title: "Food Ordering Website",
      category: "Full Stack Web Application",
      description:
        "A food ordering web application with user authentication, menu browsing, cart management, checkout, order management, and user profile functionality.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      image: "/projects/food-ordering.png",
      github: "https://online-food-ordering-website-sepia.vercel.app/",
      live: "https://online-food-ordering-website-b4y9e7xm4-nismivr1.vercel.app/",
    },

    {
      title: "Heart Disease Prediction",
      category: "Machine Learning Project",
      description:
        "A machine learning project that predicts the likelihood of heart disease based on selected medical and demographic features using a trained classification model.",
      tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
      image: "/projects/heart-disease.png",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p className="section-label">MY WORK</p>

          <h2>
            Featured <span>Projects.</span>
          </h2>

          <p>
            Here are some of the projects I've built while developing
            my skills in web development and machine learning.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <article className="project-card" key={index}>

              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-overlay">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>

              <div className="project-content">

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((technology, techIndex) => (
                    <span key={techIndex}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project ↗
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;