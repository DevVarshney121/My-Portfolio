
import { Github, ExternalLink } from "lucide-react";

function ProjectCard({
  title = "My Project",
  description = "Project description coming soon.",
  image = "/profile.png",
  tech = [],
  github = "https://github.com/DevVarshney121",
  live = "https://pgfinder-vercel-fix-r4z4.vercel.app/",
}) {
  return (
    <div className="card project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>

      <p className="muted">{description}</p>

      <div className="badges">
        {tech.map((item) => (
          <span className="badge small" key={item}>
            {item}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a
          className="btn btn-ghost btn-small"
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${title} source code`}
        >
          <Github size={16} />
        </a>

        <a
          className="btn btn-primary btn-small"
          href={live}
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
