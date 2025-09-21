import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Certifications from './Certifications';
import Contact from './Contact';
import Footer from './Footer';
import { Toaster } from './ui/toaster';
import { portfolioData } from '../data/mockData';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home">
          <Hero data={portfolioData.hero} />
        </section>
        <section id="about">
          <About data={portfolioData.about} />
        </section>
        <section id="experience">
          <Experience data={portfolioData.experience} />
        </section>
        <section id="skills">
          <Skills data={portfolioData.skills} />
        </section>
        <section id="projects">
          <Projects data={portfolioData.projects} />
        </section>
        <section id="certifications">
          <Certifications data={portfolioData.certifications} />
        </section>
        <section id="contact">
          <Contact data={portfolioData.contact} />
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Portfolio;