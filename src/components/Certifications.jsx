import "./Certifications.css";

function Certifications() {
  const certifications = [

    {
      title: "Data Analytics ",
      organization: "MetaLoop Global IT Services",
      year: "2023",
      description:
 "Explored data analysis workflows and analytical techniques for solving data-driven problems." ,     
 certificate: "/certificates/data analytics.jpeg",
    },
    {
      title: "App Development With Flutter",
      organization: "MetaLoop Global IT Services",
      year: "2024",
      description:
        "Built cross-platform mobile applications using Flutter and Dart with responsive UI, navigation, reusable components, and core app functionalities.",
      certificate: "/certificates/app.jpeg",
    },

    {
      title: "Data Science & Machine Learning ",
      organization: "Cyborg AI  Gen Automation",
      year: "2025",
      description:
        "Worked with python for data analysis,preprocessing,visualization,and machine learning,using libraries such as pandas,Numpy,Scikit-learn,TensorFlow,and Keras.",
      certificate: "/certificates/data science.jpeg",
    },

    {
      title: "Back-End Technologies ",
      organization: "Full Stack Developer Academy",
      year: "2025",
      description:
        "Worked with Node.js,Express.js,and MongoDB to build REST APIs,authentication system,database opertion,and backend services for web applications.",
      certificate: "#",
    },
    {
      title: "Front-End Technologies ",
      organization: "Full Stack Developer Academy",
      year: "2025",
      description:
        "Built responsive web interfaces using React.js,javascript,HTML,CSS,and Bootstrap with reusable components,routing,API integration,and modern UI design",
      certificate: "/certificates/full.jpeg",
    },

    {
      title: "Robotics With AI & Embedded System",
      organization: "MetaLoop Global IT Services",
      year: "2025",
      description:
        "Explored robotics,AI,and embedded systems with hands-on exposure to sensors, microcontrollers,automation,and intelligent hardware-software integration.",
      certificate: "/certificates/robotics.jpeg",
    },

  
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">

        <div className="certifications-heading">
          <p className="section-label">CERTIFICATIONS</p>

          <h2>
            Learning & <span>Certifications.</span>
          </h2>

          <p>
            Certifications and training that support my technical
            skills and continuous learning.
          </p>
        </div>

        <div className="certifications-grid">

          {certifications.map((certificate, index) => (
            <div
              className="certificate-card"
              key={index}
            >

              <div className="certificate-top">

                <div className="certificate-icon">
                  📜
                </div>

                <span className="certificate-year">
                  {certificate.year}
                </span>

              </div>

              <h3>
                {certificate.title}
              </h3>

              <h4>
                {certificate.organization}
              </h4>

              <p>
                {certificate.description}
              </p>

              <a
                href={certificate.certificate}
                target="_blank"
                rel="noreferrer"
              >
                View Certificate ↗
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;