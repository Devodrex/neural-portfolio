import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="noise" style={{ background: '#020510', minHeight: '100vh' }}>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <div className="grid-overlay">
          <Projects />
          <Experience />
          <Skills />
          <Research />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
