import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">

        <div className="education-heading">
          <p className="section-label">EDUCATION</p>

          <h2>
            My <span>Education.</span>
          </h2>

          <p>
            My academic background and foundation in computer science
            and technology.
          </p>
        </div>

        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <div className="education-content">

            <span className="education-year">
              2022–2026
            </span>

            <h3>
              Bachelor of Technology
            </h3>

            <h4>
              Computer Science & Engineering
            </h4>

            <p className="education-institute">
APJ Abdul Kalam Technological University (KTU)
<br></br>
KMCT College of Engineering for Women           
 </p>

            <p className="education-description">
              Built a Strong foundationin computer science,Programming,Databases,and web development through academic and project-based learning.
            </p>

            <div className="education-tags">
              <span>Computer Science</span>
              <span>Web Development</span>
              <span>Programming</span>
              <span>Database</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;