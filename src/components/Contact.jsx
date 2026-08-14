import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    const formData = new FormData(e.target);

    formData.append(
      "access_key",
      "4f02d9e4-5f1d-49eb-96c8-7dacd97aee6b"
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setStatus("Message sent successfully! ✅");
      e.target.reset();
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p className="section-label">GET IN TOUCH</p>

          <h2>
            Let's work on something
            <span> great together.</span>
          </h2>

          <p>
            I'm currently open to opportunities in software and
            full stack development. If you have a project, opportunity,
            or just want to connect, feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">

          {/* Contact Information */}

          <div className="contact-info">

            <div className="contact-item">
              <div className="contact-icon">
                ✉️
              </div>

              <div>
                <span>Email</span>
                <a href="mailto:nismivr2004@gmail.com">
                  nismivr2004@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                💼
              </div>

              <div>
                <span>LinkedIn</span>
                <a
                  href="https://linkedin.com/in/nismi-mahamood-vr"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/nismi-mahamood-vr ↗
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                💻
              </div>

              <div>
                <span>GitHub</span>
                <a
                  href="https://github.com/NISMIVR"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/NISMIVR ↗
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label htmlFor="name">
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                required
              ></textarea>
            </div>

            <button type="submit">
              Send Message ↗
            </button>

            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;