import React from 'react';
import { Github, Linkedin, Mail, Heart,X } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--glass-border)',
      padding: '3rem 0',
      marginTop: '4rem',
      backgroundColor: 'var(--bg-secondary)'
    }}>
      <div className="container flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-6" style={{ marginBottom: '1rem' }}>
          <a href="https://github.com/amanraj2205" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}><Github size={24} /></a>
          <a href="https://www.linkedin.com/in/amanraj2205/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}><Linkedin size={24} /></a>
          <a href="mailto:amanraj22052006@gmail.com" style={{ color: 'var(--text-secondary)' }}><Mail size={24} /></a>
          <a href="https://x.com/amanraj220" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}><X size={24} /></a>
        </div>
        
        <p style={{ color: 'var(--text-tertiary)', textAlign: 'center', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Aman Raj. All rights reserved. <br/>
          Built with React & <Heart size={14} style={{ display: 'inline', color: 'var(--accent-danger)' }} />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
