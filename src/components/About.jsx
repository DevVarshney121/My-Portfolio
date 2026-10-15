
function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>

          <p className="muted">
            Hi, I'm Dev Gupta, a BCA student and aspiring software
            engineer with a strong interest in Data Analytics and
            web development.
          </p>

          <p className="muted">
            I enjoy analyzing data, creating interactive dashboards,
            building responsive websites, and solving real-world
            problems. I continuously learn new technologies to
            improve my technical skills.
          </p>
        </div>

        <div className="card">
          <h3>My Skills & Interests</h3>

          <p className="muted">
            My goal is to transform raw data into meaningful insights
            and build useful, innovative software solutions.
          </p>

          <div className="badges">
            <span className="badge">Advanced Excel</span>
            <span className="badge">Power BI</span>
            <span className="badge">Python</span>
            <span className="badge">Pandas</span>
            <span className="badge">NumPy</span>
            <span className="badge">MySQL</span>
            <span className="badge">SQL</span>
            <span className="badge">HTML</span>
            <span className="badge">CSS</span>
            <span className="badge">JavaScript</span>
            <span className="badge">React</span>
            <span className="badge">Data Visualization</span>
            <span className="badge">Problem Solving</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
