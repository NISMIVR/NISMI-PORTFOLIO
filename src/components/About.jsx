import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <div className="about-placeholder">
            <span>👩‍💻</span>
          </div>
        </div>

        <div className="about-content">

          <p className="section-label">ABOUT ME</p>

          <h2>
            Turning ideas into
            <span> digital experiences.</span>
          </h2>

          <p>
            I'm Nismi, a Computer Science and Engineering graduate
            with hands-on experience in Full Stack Web Development.
          </p>

          <p>
            I have worked with technologies such as React.js,
            JavaScript, Node.js, Express.js, and MongoDB to build
            responsive web applications, REST APIs, authentication
            systems, and e-commerce functionality.
          </p>

          <p>
            I enjoy learning new technologies, working on practical
            projects, and continuously improving my development skills.
            I'm currently looking for opportunities where I can contribute
            to real-world software projects and grow as a developer.
          </p>

          <div className="about-info">

            <div>
              <span>Education</span>
              <strong>B.Tech CSE</strong>
            </div>

            <div>
              <span>Focus</span>
              <strong>Full Stack Development</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Kerala, India</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;