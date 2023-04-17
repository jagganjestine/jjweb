import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="social-media-icons mb-3">
          <a href="https://github.com/jaj180010" className="mx-2 text-dark" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/jaggan-jestine" className="mx-2 text-dark" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://twitter.com/jagganj" className="mx-2 text-dark" target="_blank">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} Jaggan Abraham Jestine. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
