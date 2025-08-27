import React from "react";
import { UseLanguage } from "../../contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = UseLanguage();

  return (
    <div id="language-toggle">
      <button
        id="flag-en"
        onClick={() => toggleLanguage("en")}
        className={language === "en" ? "active" : ""}
      >
        <img src="https://i.goopics.net/rtz1dd.png" alt="English Flag" />
      </button>
      <button
        id="flag-fr"
        onClick={() => toggleLanguage("fr")}
        className={language === "fr" ? "active" : ""}
      >
        <img src="https://i.goopics.net/1bqoqe.png" alt="French Flag" />
      </button>
    </div>
  );
};

export default LanguageToggle;
