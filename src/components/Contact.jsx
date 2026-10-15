
import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section dark-section">
      <div className="container">
        <div className="card contact-card">
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <p className="muted">
            I'm Dev Gupta, an aspiring software engineer passionate
            about Data Analytics, programming, and web development.
            Feel free to connect with me for opportunities,
            collaborations, or professional discussions.
          </p>

          <div className="contact-links">
            <a
              href="mailto:vdev42547@gmail.com"
              className="icon-link icon-link-text"
            >
              <Mail size={18} />
              vdev42547@gmail.com
            </a>

            <a
              href="https://github.com/DevVarshney121/Certificate"
              className="icon-link icon-link-text"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              GitHub Profile
            </a>

            <a
              href="https://www.linkedin.com/in/dev-gupta-184aa936a/"
              className="icon-link icon-link-text"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
              LinkedIn Profile
            </a>
          </div>

          <a
            href="https://www.linkedin.com/in/dev-gupta-184aa936a/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Connect With Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
