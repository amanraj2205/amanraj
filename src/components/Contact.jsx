import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section container">
      <div className="section-header text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-description"
        >
          Currently open for internship and full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>
      </div>

      <div className="contact-content grid grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="contact-info flex flex-col gap-6"
        >
          <div className="info-card glass-card flex items-center gap-4">
            <div className="icon-box">
              <Mail size={24} className="text-accent-primary" />
            </div>
            <div>
              <h4 className="info-title">Email</h4>
              <p className="info-detail">amanraj@example.com</p>
            </div>
          </div>
          
          <div className="info-card glass-card flex items-center gap-4">
            <div className="icon-box">
              <Phone size={24} className="text-accent-success" />
            </div>
            <div>
              <h4 className="info-title">Phone</h4>
              <p className="info-detail">+91 98765 43210</p>
            </div>
          </div>

          <div className="info-card glass-card flex items-center gap-4">
            <div className="icon-box">
              <MapPin size={24} className="text-accent-warning" />
            </div>
            <div>
              <h4 className="info-title">Location</h4>
              <p className="info-detail">India</p>
            </div>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="contact-form glass-card flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="John Doe" className="form-input" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="john@example.com" className="form-input" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="Your message..." className="form-input"></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary flex items-center justify-center gap-2 mt-2">
            Send Message <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
