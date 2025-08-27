import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const UseLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("UseLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr");

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
