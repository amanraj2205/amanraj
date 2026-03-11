import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section flex items-center justify-center container">
      <div className="hero-content flex flex-col items-center justify-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="badge glass-card flex items-center gap-2 mb-6"
        >
          <Terminal size={16} className="text-accent-primary" />
          <span>Engineering Student & Developer</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-title"
        >
          Building scalable solutions with<br />
          <span className="text-gradient">Full-Stack & GenAI</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-subtitle mb-8"
        >
          Hi, I'm Aman Raj. I specialize in React, Node.js, and GenAI integration, 
          with a strong foundation in Data Structures and Algorithms in C++.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero-actions flex items-center gap-4"
        >
          <a href="#projects" className="btn btn-primary flex items-center gap-2">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>
    </section>
  );
};

export default Hero;
