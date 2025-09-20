import React, { useState } from "react";
import { mockData } from "../mock";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Footer from "./Footer";
import { Toaster } from "./ui/toaster";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home">
          <Hero personal={mockData.personal} />
        </section>
        <section id="about">
          <About personal={mockData.personal} education={mockData.education} />
        </section>
        <section id="experience">
          <Experience workExperience={mockData.workExperience} />
        </section>
        <section id="skills">
          <Skills skills={mockData.skills} />
        </section>
        <section id="certifications">
          <Certifications certifications={mockData.certifications} />
        </section>
        <section id="contact">
          <Contact personal={mockData.personal} />
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Portfolio;