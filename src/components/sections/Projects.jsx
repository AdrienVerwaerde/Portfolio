import React from "react";
import { UseLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../data/translations";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const Projects = () => {
  const { language } = UseLanguage();
  const t = translations[language];
  const [ref, isVisible] = useIntersectionObserver();

  const projects = [
    {
      id: 1,
      title: t.projects.moviepedia.title,
      description: t.projects.moviepedia.description,
      image: "/moviepedia.jpg",
      imageClass: "img-container-1",
      github: "https://github.com/AdrienVerwaerde/moviepedia",
      demo: "https://adrienverwaerde.github.io/moviepedia",
    },
    {
      id: 2,
      title: t.projects.gamechamp.title,
      description: t.projects.gamechamp.description,
      image: "/gamechamp-desktop.png",
      imageClass: "img-container-2",
      github: "https://github.com/AdrienVerwaerde/gamechamp",
      demo: "https://gamechamp.vercel.app",
    },
    {
      id: 3,
      title: t.projects.dabeatz.title,
      description: t.projects.dabeatz.description,
      image: "/dabeatz-desktop.png",
      imageClass: "img-container-3",
      github: "https://github.com/AdrienVerwaerde/dabeatz",
      demo: "https://dabeatz.vercel.app/",
    },
  ];

  const ProjectCard = ({ project }) => (
    <div className="details-container color-container">
      <div className="article-container">
        <div className={project.imageClass}>
          <img
            src={project.image}
            alt={project.title}
            className="project-img"
          />
        </div>
      </div>
      <h2 className="experience-sub-title project-title">{project.title}</h2>
      <div className="project-details">
        <p>{project.description}</p>
        <br />
        <div className="btn-container">
          {project.github && (
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open(project.github)}
            >
              GitHub
            </button>
          )}
          {project.demo && (
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open(project.demo)}
            >
              {t.projects.demo}
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={ref}
      className={`${isVisible ? "visible" : "hidden"}`}
      id="projects"
    >
      <div className="section-container">
        <div className="experience-details-container">
          <p className="section__text__p1">{t.projects.sectionTitle}</p>
          <h1 className="title">{t.projects.title}</h1>
          <p className="section__text__p1">{t.projects.hoverText}</p>
          <div className="about-containers">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
