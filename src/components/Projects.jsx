import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react'; 
import './Projects.css';

const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "A generative AI chatbot built with React, Node.js, and OpenAI API, featuring context-aware conversations and natural language processing.",
    tags: ["React", "FastAPI", "OpenAI", "Tailwind CSS","RAG","Python"],
    github: "https://github.com/amanraj2205",
    demo: "#",
    image: "https://images.unsplash.com/photo-1762330465857-07e4c81c0dfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFpJTIwY2hhdHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Student Portal",
    description: "Students benefit from a personalized dashboard and a unique public profile URL. The platform facilitates connections with Job opening via an auto-matching feature and an integrated AI chat system.",
    tags: ["React","Node.js", "Express", "Postgress", "JWT"],
    github: "https://github.com/amanraj2205/Student_Portal.git",
    demo: "#",
    image: "https://drive.google.com/file/d/1vF41IPt-CTVbugkq_ghlc_9QLpByAwe3/view?usp=drive_link"
  },
  {
    title: "DSA Visualizer",
    description: "Interactive web application to visualize complex Data Structures and Algorithms (like sorting and pathfinding) written in C++ and ported to WebAssembly.",
    tags: ["C++", "WebAssembly", "React", "Algorithms"],
    github: "https://github.com/amanraj2205/DSA_Visualizer.git",
    demo: "#",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxwckKUcOGcUnywTu5VbIuiIfpWhucBeLSmw&s"
      },
  {
    title: "Agri-Connect",
    description: " A personal dashboard for farmers \nShopping for farmer products \nA section for buyers to purchase farm crops \n An AI Chatbot that provides answers to any queries related to this platform.", 
    tags: ["JavaScript", "React", "Mongodb","Express"],
    github: "https://github.com/amanraj2205/Agri_connect.git",
    demo: "#",
    image: "https://drive.google.com/file/d/15NJx_zBGbRiEWn6EC0qS2aNAxNzK8QvJ/view?usp=drive_link"
  },
  {
    title: "Real Time Weather App",
    description: "A modern, responsive weather application built with vanilla JavaScript that provides real-time weather information for any city worldwide.",
    tags: ["HTML","CSS", "Javascript","OpenWeather API", "RestAPI"],
    github: "https://github.com/amanraj2205/weather-app-using-js.git",
    demo: "https://amanraj2205.github.io/weather-app-using-js/",
    image: "https://drive.google.com/file/d/1eLC7bYQRTceOuFBY8PoAqbUUWgb8Za5o/view?usp=drive_link"
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
