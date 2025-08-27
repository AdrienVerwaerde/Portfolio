import React from "react";
import { UseLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../data/translations";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const Contact = () => {
  const { language } = UseLanguage();
  const t = translations[language];
  const [ref, isVisible] = useIntersectionObserver();

  const handleEmailClick = () => {
    window.location.href = "mailto:verwaerdeadrien@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://linkedin.com/in/adrien-verwaerde-018ba4195/",
      "_blank"
    );
  };

  return (
    <section
      ref={ref}
      className={`${isVisible ? "visible" : "hidden"}`}
      id="contact"
    >
      <p className="section__text__p1">{t.contact.sectionTitle}</p>
      <h1 className="title">{t.contact.title}</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a
              href="mailto:verwaerdeadrien@gmail.com"
              onClick={handleEmailClick}
            >
              verwaerdeadrien@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src="/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a
              href="https://linkedin.com/in/adrien-verwaerde-018ba4195/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkedInClick}
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
