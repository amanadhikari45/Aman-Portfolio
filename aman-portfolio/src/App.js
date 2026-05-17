// ============================================================
// App.js — Root component
// ============================================================

import React, { useEffect } from 'react';
import './styles/globals.css';

// Components
import ScrollBar  from './components/ScrollBar/ScrollBar';
import Cursor     from './components/Cursor/Cursor';
import Navbar     from './components/Navbar/Navbar';
import Footer     from './components/Footer/Footer';

// Sections
import Hero       from './sections/Hero/Hero';
import About      from './sections/About/About';
import Skills     from './sections/Skills/Skills';
import Projects   from './sections/Projects/Projects';
import Experience from './sections/Experience/Experience';
import Education  from './sections/Education/Education';
import Contact    from './sections/Contact/Contact';

// Hooks
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

export default function App() {
  // Trigger fade-in animations on scroll
  useIntersectionObserver('.fade-in');

  return (
    <>
      {/* Global UI chrome */}
      <ScrollBar />
      <Cursor />
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
