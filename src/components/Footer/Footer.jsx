import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo" onClick={() => handleScrollTo('hero')}>
          NAVINKUMAR C<span className="dot">.</span>
        </div>
        
        <ul className="footer-links">
          <li><button className="footer-link-btn" onClick={() => handleScrollTo('hero')}>Home</button></li>
          <li><button className="footer-link-btn" onClick={() => handleScrollTo('about')}>About</button></li>
          <li><button className="footer-link-btn" onClick={() => handleScrollTo('skills')}>Skills</button></li>
          <li><button className="footer-link-btn" onClick={() => handleScrollTo('projects')}>Projects</button></li>
          <li><button className="footer-link-btn" onClick={() => handleScrollTo('achievements')}>Achievements</button></li>
          <li><button className="footer-link-btn" onClick={() => handleScrollTo('education')}>Education</button></li>
          <li><button className="footer-link-btn" onClick={() => handleScrollTo('contact')}>Contact</button></li>
        </ul>

        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:navin@example.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Navin. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
