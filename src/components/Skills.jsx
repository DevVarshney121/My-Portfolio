
function Skills() {
  return (
    <section id="skills" className="section dark-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>

        <p className="muted">
          My technical skills and tools that I use to analyze data,
          develop applications, and solve real-world problems.
        </p>

        <div className="grid">
          <div className="card">
            <h3>Data Analytics</h3>
            <div className="badges">
              <span className="badge">Advanced Excel</span>
              <span className="badge">Power BI</span>
              <span className="badge">Python</span>
              <span className="badge">Pandas</span>
              <span className="badge">NumPy</span>
              <span className="badge">Matplotlib</span>
              <span className="badge">MySQL</span>
              <span className="badge">SQL</span>
              <span className="badge">Data Visualization</span>
            </div>
          </div>

          <div className="card">
            <h3>Web Development</h3>
            <div className="badges">
              <span className="badge">HTML</span>
              <span className="badge">CSS</span>
              <span className="badge">JavaScript</span>
              <span className="badge">React</span>
              <span className="badge">Bootstrap</span>
              <span className="badge">Tailwind CSS</span>
              <span className="badge">Flask</span>
            </div>
          </div>

          <div className="card">
            <h3>Tools & Professional Skills</h3>
            <div className="badges">
              <span className="badge">VS Code</span>
              <span className="badge">Git</span>
              <span className="badge">GitHub</span>
              <span className="badge">Problem Solving</span>
              <span className="badge">Communication</span>
              <span className="badge">Client Handling</span>
              <span className="badge">Continuous Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
