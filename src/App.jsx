import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { BentoHero } from './components/BentoHero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { ProjectsCerts } from './components/ProjectsCerts';
// import { Gallery } from './components/Gallery'; // Certifications hidden — files kept
import { FooterGrid } from './components/FooterGrid';

function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Analytics />
      <ThemeToggle theme={theme} onToggle={toggle} />

      <div className="page page-enter">
        <BentoHero />
        <About />
        <Experience />
        <TechStack />
        <ProjectsCerts />
        {/* <Gallery /> — Certifications hidden, files kept in /public/certificates/ */}
        <FooterGrid />
      </div>
    </>
  );
}

export default App;
