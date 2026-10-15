
import { Github, Linkedin } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="glow glow-purple"></div>
      <div className="glow glow-blue"></div>

      <div className="container hero-inner">
        <div>
          <p className="hero-greeting">
            Hi, I'm Dev Gupta 👋
          </p>

          <h1 className="hero-title gradient-text">
            Data Analyst & Web Developer
          </h1>

          <p className="hero-text">
            I'm passionate about transforming data into meaningful
            insights and building responsive web applications.
            My skills include Advanced Excel, Power BI, Python,
            MySQL, HTML, CSS, JavaScript, and React. I enjoy
            learning new technologies and building real-world projects.
          </p>

          <a href="#projects" className="btn btn-primary">
            Explore My Projects
          </a>

          <div className="social-icons">
            <a
              className="icon-link"
              href="https://github.com/DevVarshney121"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              className="icon-link"
              href="https://www.linkedin.com/in/dev-gupta-184aa936a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <img src="/ansh.png" alt="Dev Gupta" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
