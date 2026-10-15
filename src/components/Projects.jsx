
import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 3;

  const projects = [
    {
      title: "PGFinder – PG & Hostel Finder",
      description:
        "A responsive platform to discover PG accommodations and hostels in Greater Noida, with property listings, room details, pricing, and facilities.",
      image: "/pgFinder.png",
      tech: ["HTML", "CSS", "JavaScript", "Vercel"],
      github: "https://github.com/DevVarshney121/Certificate",
      live: "https://pgfinder-vercel-fix-r4z4.vercel.app/",
    },
    {
      title: "InfiniteQuestion – Learning Platform",
      description:
        "An educational platform for exploring questions and learning resources through a user-friendly interface.",
      image: "/infint.png",
      tech: ["HTML", "CSS", "JavaScript", "Vercel"],
      github: "https://github.com/DevVarshney121",
      live: "https://infinitequestion.vercel.app/",
    },
    {
      title: "Pari PG – PG Management System",
      description:
        "A PG management website focused on resident information, room management, rent tracking, payments, and dashboard-based management.",
      image: "/par.png",
      tech: ["Flask", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/DevVarshney121",
      live: "https://pari-pg-beta-1.vercel.app/",
    },
    {
      title: "Tutor Tree – Tuition Platform",
      description:
        "A responsive tuition and home tutor website designed to connect students with learning opportunities.",
      image: "/tutortree.png",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/DevVarshney121",
      live: "https://tutortree-sand.vercel.app/",
    },
    {
      title: "Coffee Sales Analysis Dashboard",
      description:
        "An Excel dashboard project focused on analyzing coffee sales, tracking performance, and identifying sales trends.",
      image: "/coffee-dashboard.png",
      tech: ["Advanced Excel", "Data Analysis", "Dashboard"],
      github: "https://github.com/DevVarshney121",
      live: "https://github.com/DevVarshney121",
    },
  ];

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const startIndex = (currentPage - 1) * projectsPerPage;

  const visibleProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const changePage = (page) => {
    setCurrentPage(page);
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>

        <p className="muted">
          Explore my projects in web development, PG management,
          education, and data analytics.
        </p>

        <div className="grid project-grid">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

        <div className="pagination">
          <button
            className="page-btn"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                className={`page-btn ${
                  currentPage === page ? "active" : ""
                }`}
                onClick={() => changePage(page)}
                aria-label={`Go to page ${page}`}
                aria-current={
                  currentPage === page ? "page" : undefined
                }
              >
                {page}
              </button>
            );
          })}

          <button
            className="page-btn"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        <p className="pagination-info">
          Showing {startIndex + 1}–
          {Math.min(startIndex + projectsPerPage, projects.length)} of{" "}
          {projects.length} projects
        </p>
      </div>
    </section>
  );
}

export default Projects;
