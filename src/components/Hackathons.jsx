import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Lightbulb, MapPin } from 'lucide-react';
import './Hackathons.css';

const hackathons = [
  {
    title: "Smart India Hackathon (SIH) 2024",
    role: "Full Stack Developer",
    project: "KrishiVikash",
    location: "National Level",
    achievement: "Idea Submission Round",
    description: "KrishiVikash is a gamified digital platform using AI, IoT, and satellite data to provide localized farming insights. It boosts yields and sustainability through multilingual accessibility and behavioral engagement."
  },
  {
    title: "Rajasthan Digifest X TiE Global Hackathon",
    role: "Team Leader & Full Stack Developer",
    project: "SupplyWater",
    location: "Offline",
    achievement: "Top 5%",
    description: "SupplyWater helps farmers coordinate their irrigation schedules. By sharing information, they can manage water more efficiently and prevent conflicts."
  },
  {
    title: "Google Solution Challenge 2025", 
    role: "Frontend Developer",
    project: "AgriTech",
    location: "Online",
    achievement: "Project Evaluation",
    description: "Empowering Small and Marginal Farmers with AI-Driven Agricultural Solutions. Bulid a software for farmers to help them with their crops."
  },
  {
    title: "Hack Arya Verse",
    role: "Frontend Developer",
    project: "AI Chatbot for Farmers",
    location: "Offline",
    achievement: "Top 10%",
    description: "A chatbot that helps farmers to get information about their crops and the best way to take care of them."
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
