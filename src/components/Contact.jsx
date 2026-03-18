import React, { useState } from 'react'; // Added useState
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { Send, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react'; // Added CheckCircle2
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    // Be sure to replace this with your actual Access Key from Web3Forms
    formData.append("access_key", "dc05d293-71d1-4ba3-ab7a-ab02549dfd9c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setResult("Form Submitted Successfully");
      event.target.reset();
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      console.log("Error", data);
      setStatus("error");
      setResult(data.message);
    }
  };

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
              <p className="info-detail">amanraj22052006@gmail.com</p>
            </div>
          </div>
          
          <div className="info-card glass-card flex items-center gap-4">
            <div className="icon-box">
              <Phone size={24} className="text-accent-success" />
            </div>
            <div>
              <h4 className="info-title">Phone</h4>
              <p className="info-detail">+91 74887 42145</p>
            </div>
          </div>

          <div className="info-card glass-card flex items-center gap-4">
            <div className="icon-box">
              <MapPin size={24} className="text-accent-warning" />
            </div>
            <div>
              <h4 className="info-title">Location</h4>
              <p className="info-detail">Jaipur, India</p>
            </div>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="contact-form glass-card flex flex-col gap-4 relative"
          onSubmit={onSubmit}
        >
          {/* Success Overlay */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0a0f1a]/80 backdrop-blur-sm rounded-2xl"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12 }}
                >
                  <CheckCircle2 size={64} className="text-accent-success mb-4" />
                </motion.div>
                <h3>Message Sent!</h3>
                <p className="text-gray-400 mt-2">I'll get back to you soon.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" // Added name attribute
              placeholder="John Doe" 
              className="form-input" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" // Added name attribute
              placeholder="john@example.com" 
              className="form-input" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" // Added name attribute
              rows="4" 
              placeholder="Your message..." 
              className="form-input" 
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status === "sending"}
            className="btn btn-primary flex items-center justify-center cursor-pointer gap-2 mt-2"
          >
            {status === "sending" ? "Sending..." : "Send Message"} 
            <Send size={18} />
          </button>
          
          {status === "error" && (
            <p className="text-red-500 text-sm mt-2">{result}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

