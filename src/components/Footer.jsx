import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            Nismi Mahamood<span></span>
          </a>

          <p>
              Passionate about creating clean, responsive,
  and user-friendly web experiences.
          </p>

        </div>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-socials">

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

          <a href="mailto:nismivr2004@gmail.com">
            Email
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Nismi Mahamood. All rights reserved.
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;