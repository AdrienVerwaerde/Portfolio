import React, { useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import LanguageToggle from "./components/Header/LanguageToggle";
import DesktopNav from "./components/Header/DesktopNav";
import HamburgerNav from "./components/Header/HamburgerNav";
import Profile from "./components/sections/Profile";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import "./App.css";

function App() {
  useEffect(() => {
    // Add scroll animation classes after mount
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.remove("hidden");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with 'hidden' class
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <div id="body">
        <LanguageToggle />
        <DesktopNav />
        <HamburgerNav />
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
