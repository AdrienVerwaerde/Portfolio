import React from "react";
import { UseLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../data/translations";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const Profile = () => {
  const { language } = UseLanguage();
  const t = translations[language];
  const [ref, isVisible] = useIntersectionObserver();

  const handleDownloadCV = () => {
    window.open("/CV-AV.pdf");
  };

  const handleContact = () => {
    window.location.href = "./#contact";
  };

  const handleSocialClick = (url) => {
    window.open(url);
  };

  return (
    <section
      ref={ref}
      className={`${isVisible ? "visible" : "hidden"}`}
      id="profile"
    >
      <div className="section__pic-container">
        <img src="/profile-pic.png" alt="Profile picture of Adrien Verwaerde" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">{t.profile.greeting}</p>
        <h1 className="title">{t.profile.name}</h1>
        <p className="section__text__p2">{t.profile.title}</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={handleDownloadCV}>
            {t.profile.downloadCV}
          </button>
          <button className="btn btn-color-1" onClick={handleContact}>
            {t.profile.contactMe}
          </button>
        </div>
        <div id="socials-container">
          <img
            src="/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={() =>
              handleSocialClick(
                "https://linkedin.com/in/adrien-verwaerde-018ba4195/"
              )
            }
          />
          <img
            src="/github.png"
            alt="My GitHub profile"
            className="icon"
            onClick={() =>
              handleSocialClick("https://github.com/AdrienVerwaerde")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
