import React from 'react';
import Hero from '../components/Hero';
import Education from '../components/Education';
import AboutSkills from '../components/AboutSkills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Courses from '../components/Courses';
import Hackathons from '../components/Hackathons';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Education />
      <Courses />
      <Certifications />
      <AboutSkills />
      <Hackathons />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
