import React from 'react';
import './footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="neon-text">Pankaj Dev</h3>
          <p className="footer-copy">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-social">
          <a href="mailto:pankajyadv158@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://linkedin.com/in/pankajydv15" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/pankajydv15" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
