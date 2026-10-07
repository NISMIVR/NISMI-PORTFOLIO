import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Bootstrap",
        "Responsive Design",
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "API Integration",
      ],
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: [
        "MongoDB",
        "MySQL",
        "Database Design",
        "CRUD Operations",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "🔧",
      skills: [
    
        "GitHub",
        "VS Code",
        "Postman",
        "Vercel",
        "Render",
      
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-label">MY SKILLS</p>

          <h2>
            Technologies I <span>work with.</span>
          </h2>

          <p>
            A collection of technologies and tools I use to build
            responsive, scalable, and user-friendly web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-icon">
                {category.icon}
              </div>

              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;