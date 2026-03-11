import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Lightbulb, MapPin } from 'lucide-react';
import './Hackathons.css';

const hackathons = [
  {
    title: "Smart India Hackathon (SIH) 2024",
    role: "Team Leader & Full Stack Developer",
    project: "AI-Powered Financial Assistant",
    location: "National Level",
    achievement: "Finalist",
    description: "Built a comprehensive financial literacy and assistance platform using React, Node.js, and integrating LLMs for real-time advice."
  },
  {
    title: "HackTheBox CyberHack",
    role: "Backend Architect",
    project: "SecureVault",
    location: "Online",
    achievement: "Top 20%",
    description: "Developed a secure file sharing system with end-to-end encryption to solve data privacy challenges."
  }
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="hackathons-section section container">
      <div className="section-header text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient">Hackathons</span> & Competitions
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-description"
        >
          My participation in coding challenges and innovation events.
        </motion.p>
      </div>

      <div className="hackathons-container flex flex-col gap-6 max-w-4xl mx-auto">
        {hackathons.map((hackathon, index) => (
          <motion.div
            key={hackathon.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="hackathon-card glass-card"
          >
            <div className="hackathon-header">
              <div className="hackathon-title-group flex items-center gap-4">
                <div className="trophy-icon">
                  <Trophy size={28} />
                </div>
                <div>
                  <h3 className="hackathon-title">{hackathon.title}</h3>
                  <p className="hackathon-role text-gradient">{hackathon.role}</p>
                </div>
              </div>
              <div className="hackathon-achievement badge hidden md:flex">
                {hackathon.achievement}
              </div>
            </div>
            
            <div className="hackathon-body mt-4">
              <p className="hackathon-desc">{hackathon.description}</p>
              
              <div className="hackathon-meta flex flex-wrap gap-4 mt-4">
                <div className="meta-item flex items-center gap-2">
                  <Lightbulb size={16} className="text-accent-warning" />
                  <span><strong>Project:</strong> {hackathon.project}</span>
                </div>
                <div className="meta-item flex items-center gap-2">
                  <MapPin size={16} className="text-secondary-icon" />
                  <span>{hackathon.location}</span>
                </div>
                <div className="meta-item flex items-center gap-2 md:hidden">
                  <Trophy size={16} className="text-accent-primary" />
                  <span>{hackathon.achievement}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
