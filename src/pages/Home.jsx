import React from 'react';
import Hero from '../components/Hero';
import Education from '../components/Education';
import AboutSkills from '../components/AboutSkills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Education />
      <AboutSkills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
