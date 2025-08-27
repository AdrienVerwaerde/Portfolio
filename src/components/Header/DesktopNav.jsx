import React from "react";
import { UseLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../data/translations";

const DesktopNav = () => {
  const { language } = UseLanguage();
  const t = translations[language];

  return (
    <nav id="desktop-nav">
      <div className="logo">{t.nav.welcome}</div>
      <div>
        <ul className="nav-links">
          <li>
            <a href="#about">{t.nav.about}</a>
          </li>
          <li>
            <a href="#experience">{t.nav.experience}</a>
          </li>
          <li>
            <a href="#projects">{t.nav.projects}</a>
          </li>
          <li>
            <a href="#contact">{t.nav.contact}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNav;
