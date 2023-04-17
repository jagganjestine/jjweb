import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-primary py-3">
        <nav className="navbar navbar-expand-lg container">
        <div className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
          </div>
        </nav>
      </header>
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link className="nav-link" to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/projects" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
