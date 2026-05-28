import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { ProfileHeader } from './components/ProfileHeader';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { OJTHighlights } from './components/OJTHighlights';
import { ProjectsCerts } from './components/ProjectsCerts';
// import { Gallery } from './components/Gallery'; // Certifications hidden — files kept
import { FooterGrid } from './components/FooterGrid';
import { Sidebar } from './components/Sidebar';

function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Analytics />
      <ThemeToggle theme={theme} onToggle={toggle} />

      <div className="page page-enter">
        <div className="main-grid">

          {/* LEFT COLUMN */}
          <div className="left-col">
            <ProfileHeader />
            <About />
            <TechStack />
            <OJTHighlights />
            <ProjectsCerts />
            {/* <Gallery /> — Certifications hidden, files kept in /public/certificates/ */}
            <FooterGrid />
          </div>

          {/* SIDEBAR */}
          <div className="right-col">
            <Sidebar />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
