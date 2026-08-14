import "./Experience.css";

function Experience() {
  const experiences = [
    {
      year: "June2026–August2026",
      role: "Full Stack Development Training",
      company: "Livewire,Kanhangad,Kerala",
      description:
        "Completed practical training in modern web development with hands-on experience in frontend and backend technologies. Worked on real-world style projects using React.js, JavaScript, Node.js, Express.js, and MongoDB.",
      skills: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },

   
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        <div className="experience-heading">
          <p className="section-label">MY JOURNEY</p>

          <h2>
            Experience & <span>Training.</span>
          </h2>

          <p>
            My learning journey and practical experience in software
            development.
          </p>
        </div>

        <div className="timeline">

          {experiences.map((experience, index) => (
            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span className="timeline-year">
                  {experience.year}
                </span>

                <h3>{experience.role}</h3>

                <h4>{experience.company}</h4>

                <p>{experience.description}</p>

                <div className="experience-skills">
                  {experience.skills.map((skill, skillIndex) => (
                    <span key={skillIndex}>
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;