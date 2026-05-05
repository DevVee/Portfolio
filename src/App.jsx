import React from 'react';
import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { ProfileHeader } from './components/ProfileHeader';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { OJTHighlights } from './components/OJTHighlights';
import { ProjectsCerts } from './components/ProjectsCerts';
import { Gallery } from './components/Gallery';
import { FooterGrid } from './components/FooterGrid';
import { Sidebar } from './components/Sidebar';
import ContactForm from './components/ContactForm';

function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
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
            <Gallery />
            <ContactForm />
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
