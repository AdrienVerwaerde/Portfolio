import React from "react";
import { UseLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../data/translations";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const Experience = () => {
  const { language } = UseLanguage();
  const t = translations[language];
  const [ref, isVisible] = useIntersectionObserver();

  const frontendSkills = [
    { name: "HTML", level: t.experience.advanced },
    { name: "CSS", level: t.experience.advanced },
    { name: "JavaScript", level: t.experience.advanced },
    { name: "React", level: t.experience.intermediate },
    { name: "NextJS", level: t.experience.intermediate },
  ];

  const backendSkills = [
    { name: "PHP", level: t.experience.advanced },
    { name: "SQL", level: t.experience.intermediate },
    { name: "Symfony", level: t.experience.basic },
    { name: "Git", level: t.experience.advanced },
  ];

  const SkillArticle = ({ skill }) => (
    <article>
      <img src=".././experience.png" alt="Experience icon" className="icon" />
      <div>
        <h3>{skill.name}</h3>
        <p>{skill.level}</p>
      </div>
    </article>
  );

  return (
    <section
      ref={ref}
      className={`${isVisible ? "visible" : "hidden"}`}
      id="experience"
    >
      <div className="section-container">
        <div className="experience-details-container">
          <p className="section__text__p1">{t.experience.sectionTitle}</p>
          <h1 className="title">{t.experience.title}</h1>
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">{t.experience.frontend}</h2>
              <div className="article-container">
                {frontendSkills.map((skill, index) => (
                  <SkillArticle key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">{t.experience.backend}</h2>
              <div className="article-container">
                {backendSkills.map((skill, index) => (
                  <SkillArticle key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
