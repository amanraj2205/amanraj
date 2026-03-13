import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import './Certifications.css';

const certifications = [
  {
    title: "Data Structures and Algorithms Design",
    issuer: "NPTEL",
    date: "Jul-Oct 2025",
    link: "https://drive.google.com/file/d/1IEDMQo4mNY298rC_B1jBnQD_vk7coqp3/view?usp=drive_link"
  },
  {
    title: "C Essentials 1",
    issuer: "CISCO Networking Academy",
    date: "01 Jul 2025",
    link: "https://drive.google.com/file/d/1l0xLRnkg8dGcOcMyGoy3gZf5hEQiNrcA/view?usp=drive_link"
  },
  {
    title: "Programming in C",
    issuer: "Infosys",
    date: "June 16,2025",
    link: "https://drive.google.com/file/d/1kU1Hagou59XGPe1nismw1niLyrdUAjgI/view?usp=drive_link"
  },
  {
    title: "Relational to Document Model",
    issuer: "MongoDB University",
    date: "09 March,2025",
    link: "https://drive.google.com/file/d/1UBkeQB4ReQazqH1U5aXktrfrbNYMQ-ZJ/view?usp=drive_link"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section section container">
      <div className="section-header text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-gradient">Certifications</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-description"
        >
          Professional certifications and achievements that validate my technical skills.
        </motion.p>
      </div>

      <div className="certifications-grid grid gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="certification-card glass-card"
          >
            <div className="cert-header flex justify-between items-start">
              <div className="cert-icon-wrapper">
                <Award size={28} className="text-accent-primary" />
              </div>
              <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">
                <ExternalLink size={20} />
              </a>
            </div>
            <div className="cert-content">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer text-gradient">{cert.issuer}</p>
              <div className="cert-meta flex items-center gap-2 mt-4">
                <Calendar size={16} className="text-secondary-icon" />
                <span>{cert.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
