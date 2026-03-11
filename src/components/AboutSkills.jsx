import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, BrainCircuit, Server } from 'lucide-react';
import './AboutSkills.css';

const skills = [
  {
    category: "Frontend",
    icon: <Code size={24} />,
    color: "var(--accent-primary)",
    items: ["React.js", "JavaScript", "HTML5/CSS3", "Tailwind/Vanilla CSS","Bootstrap"]
  },
  {
    category: "Backend & DB",
    icon: <Server size={24} />,
    color: "var(--accent-success)",
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "RESTful APIs"]
  },
  {
    category: "core & DSA",
    icon: <Database size={24} />,
    color: "var(--accent-warning)",
    items: ["C++", "Data Structures", "Algorithms", "Object Oriented Programming","Operating System","Computer Networks"]
  },
  {
    category: "GenAI & Tools",
    icon: <BrainCircuit size={24} />,
    color: "var(--accent-secondary)",
    items: ["Python", "LLM Integration", "LangChain", "Prompt Engineering", "Git/GitHub", "Docker"]
  }
];

const AboutSkills = () => {
  return (
    <section id="skills" className="skills-section section container">
      <div className="section-header text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About & <span className="text-gradient">Skills</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-description"
        >
          An engineering student passionate about solving complex problems. I bridge the gap between robust backend architectures and seamless user experiences, with a strong focus on algorithmic efficiency and modern AI solutions.
        </motion.p>
      </div>

      <div className="skills-grid grid grid-cols-2 gap-6 md:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="skill-card glass-card"
          >
            <div className="skill-icon-wrapper" style={{ color: skill.color, backgroundColor: `${skill.color}20` }}>
              {skill.icon}
            </div>
            <h3 className="skill-category">{skill.category}</h3>
            <ul className="skill-list flex flex-col gap-2">
              {skill.items.map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="bullet" style={{ backgroundColor: skill.color }}></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSkills;
