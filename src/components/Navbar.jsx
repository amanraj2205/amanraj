import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Menu, X, Github, Linkedin} from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Education', path: '#education' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header className={`navbar flex items-center justify-between container ${scrolled ? 'nav-scrolled glass-card' : ''}`}>
      <Link to="/" className="logo flex items-center gap-2">
        <Code2 className="logo-icon" size={32} />
        <span className="logo-text">Aman<span className="text-gradient">.dev</span></span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="desktop-nav flex items-center gap-6">
        {navLinks.map((link) => (
          <a key={link.name} href={link.path} className="nav-link">{link.name}</a>
        ))}
      </nav>

      {/* Social Links & Mobile Toggle */}
      <div className="nav-actions flex items-center gap-4">
        <div className="social-links flex items-center gap-4 desktop-only">
          <a href="https://github.com/amanraj2205" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
          <a href="https://linkedin.com/in/amanraj2205" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href='https://x.com/amanraj2205' target="_blank" rel="noreferrer" aria-label="X"><X size={20} /></a>
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav glass-card flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path} 
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="social-links flex items-center gap-4 mt-4">
            <a href="https://github.com/amanraj2205" target="_blank" rel="noreferrer"><Github size={24} /></a>
            <a href="https://linkedin.com/in/amanraj2205" target="_blank" rel="noreferrer"><Linkedin size={24} /></a>
            <a href='https://x.com/amanraj220' target="_blank" rel="noreferrer"><X size={24} /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
