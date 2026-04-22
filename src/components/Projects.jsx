import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react'; 
import './Projects.css';

const projects = [
  {
    title: "NextHire.ai: AI Interview Platform",
    description: "End-to-end MERN application that leverages Gemini 3 Flash to generate AI interview strategy reports and dynamic ATS-friendly resumes via Puppeteer.",
    tags: ["MERN Stack", "Google GenAI", "Puppeteer", "Zod", "MongoDB"],
    github: "https://github.com/amanraj2205/NextHire.ai.git",
    demo: "#",
    image: "https://res.cloudinary.com/dcconf1h6/image/upload/v1776858521/Screenshot_2026-04-22_171756_wgh5jk.png"
  },
  {
    title: "Student Project Portal",
    description: "A comprehensive portfolio builder that integrates GitHub activity, manages project media via Cloudinary, and generates shareable public URLs.",
    tags: ["React js", "PostgreSQL", "Prisma", "Node.js", "Cloudinary"],
    github:"https://github.com/amanraj2205/Student-Portal.git",
    demo: "https://project-eb8l.onrender.com/",
    image: "https://res.cloudinary.com/dcconf1h6/image/upload/v1774615273/Screenshot_2026-03-27_181028_fcn0m1.png"
  },
  {
    title: "Krishi Sahayak: AI Agriculture Ecosystem",
    description: "Advanced microservices-based platform providing farmers with AI-driven market rates, crop yield tracking, and seasonal financial analytics.",
    tags: ["React", "Node.js", "MongoDB", "Gemini AI"],
    github: "https://github.com/amanraj2205/AgriConnect.git",
    demo: "#",
    image: "https://res.cloudinary.com/dcconf1h6/image/upload/v1774615623/Screenshot_2026-03-27_181621_k82wis.png"
  },
  {
    title: "Real-Time Weather App",
    description: "Modern, responsive weather application built with vanilla JavaScript using the OpenWeatherMap API for live global weather tracking.",
    tags: ["JavaScript", "OpenWeatherMap API", "HTML5", "CSS3"],
    github: "https://github.com/amanraj2205/weather-app-using-js.git",
    demo: "https://amanraj2205.github.io/weather-app-using-js/",
    image: "https://res.cloudinary.com/dcconf1h6/image/upload/v1774374441/student_portals/projects/pljd1dsmxnborgr36alh.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section section container">
      <div className="section-header text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-description"
        >
          A selection of my recent work focusing on full-stack development, API design, and AI integrations.
        </motion.p>
      </div>

      <div className="projects-grid grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="project-card glass-card"
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.github} target="_blank" rel="noreferrer" className="icon-btn">
                  <Github size={20} />
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="icon-btn">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags flex gap-2 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="tag badge text-accent-primary" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
