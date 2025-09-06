import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import LanguageToggle from './components/Header/LanguageToggle';
import DesktopNav from './components/Header/DesktopNav';
import HamburgerNav from './components/Header/HamburgerNav';
import Profile from './components/sections/Profile';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import './App.css';

function AppContent() {
  // Initialize scroll animations
  useScrollAnimation();

  return (
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
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
