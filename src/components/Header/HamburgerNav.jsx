import React, { useState } from "react";
import { UseLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../data/translations";

const HamburgerNav = () => {
  const { language } = UseLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="hamburger-nav">
      <div className="logo">{t.nav.welcome}</div>
      <div className="hamburger-menu">
        <div
          className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#about" onClick={toggleMenu}>
              {t.nav.about}
            </a>
          </li>
          <li>
            <a href="#experience" onClick={toggleMenu}>
              {t.nav.experience}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              {t.nav.projects}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              {t.nav.contact}
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default HamburgerNav;
