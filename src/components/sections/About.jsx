import React from "react";
import { UseLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../data/translations";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const About = () => {
  const { language } = UseLanguage();
  const t = translations[language];
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section
      ref={ref}
      className={`${isVisible ? "visible" : "hidden"}`}
      id="about"
    >
      <div className="section-container">
        <div className="about-details-container">
          <p className="section__text__p1">{t.about.sectionTitle}</p>
          <h1 className="title">{t.about.title}</h1>
          <div className="about-containers">
            <div className="details-container">
              <img
                src="./assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>{t.about.experience}</h3>
              <p
                dangerouslySetInnerHTML={{ __html: t.about.experienceDesc }}
              ></p>
            </div>
            <div className="details-container">
              <img
                src="./assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>{t.about.education}</h3>
              <p
                dangerouslySetInnerHTML={{ __html: t.about.educationDesc }}
              ></p>
            </div>
          </div>
          <div className="text-container">
            <p dangerouslySetInnerHTML={{ __html: t.about.description }}></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
