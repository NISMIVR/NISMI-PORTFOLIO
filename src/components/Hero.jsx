import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            Nismi <span>👋</span>
          </h1>

          <h2>
            Full Stack <span>Developer</span>
          </h2>

          <p className="hero-description">
            I build responsive, user-friendly web applications
            using modern technologies and clean development practices.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a href="/nismi.CV.pdf" className="secondary-btn" download>
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/NISMIVR"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/nismi-mahamood-vr"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-card">
            <div className="code-dot"></div>
            <div className="code-dot"></div>
            <div className="code-dot"></div>

            <div className="code-content">
              <p><span>&lt;</span>developer<span>&gt;</span></p>
              <p className="indent">
                <span>name:</span> "Nismi Mahamood"
              </p>
              <p className="indent">
                <span>role:</span> "Full Stack Developer"
              </p>
              <p className="indent">
                <span>passion:</span> "Building Web Apps"
              </p>
              <p><span>&lt;/</span>developer<span>&gt;</span></p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;