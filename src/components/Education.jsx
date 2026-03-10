import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section section container">
      <div className="section-header text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-gradient">Education</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-description"
        >
          My academic background and qualifications.
        </motion.p>
      </div>

      <div className="education-content flex justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="education-card glass-card"
        >
          <div className="edu-icon-wrapper">
            <GraduationCap size={32} className="text-accent-primary" />
          </div>
          
          <div className="edu-details">
            <h3 className="degree">B.Tech in Information Technology</h3>
            <h4 className="college text-gradient">Arya College of Engg. & I.T</h4>
            
            <div className="edu-meta flex flex-wrap gap-4 mt-4">
              <div className="meta-item flex items-center gap-2">
                <BookOpen size={16} className="text-secondary-icon" />
                <span>2nd Year Student</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <Calendar size={16} className="text-secondary-icon" />
                <span>Batch: 2024 - 2028</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <MapPin size={16} className="text-secondary-icon" />
                <span>Kukas, Jaipur</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
