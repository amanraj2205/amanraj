import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "A generative AI chatbot built with React, Node.js, and OpenAI API, featuring context-aware conversations and natural language processing.",
    tags: ["React", "Node.js", "OpenAI", "Tailwind CSS"],
    github: "https://github.com/amanraj2205",
    demo: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    title: "E-Commerce Backend System",
    description: "Robust REST API for an e-commerce platform handling user authentication, product management, and secure payment processing.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/amanraj2205",
    demo: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    title: "Algorithm Visualizer",
    description: "Interactive web application to visualize complex Data Structures and Algorithms (like sorting and pathfinding) written in C++ and ported to WebAssembly.",
    tags: ["C++", "WebAssembly", "React", "Algorithms"],
    github: "https://github.com/amanraj2205",
    demo: "#",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    title: "Stock Market Dashboard",
    description: "Real-time stock monitoring application with interactive charts, financial news integration, and portfolio tracking features.",
    tags: ["React", "Chart.js", "Financial APIs", "Firebase"],
    github: "https://github.com/amanraj2205",
    demo: "#",
    image: "https://images.unsplash.com/photo-1611974717482-58a00a9d1872?auto=format&fit=crop&q=80&w=800&h=500"
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
