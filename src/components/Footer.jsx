
import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          I'm Dev Gupta, a BCA student and aspiring software engineer
          passionate about Data Analytics, web development, and
          building innovative projects.
        </p>

        <div className="social-icons">
          <a
            className="icon-link"
            href="https://github.com/DevVarshney121"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            className="icon-link"
            href="https://www.linkedin.com/in/dev-gupta-184aa936a/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
