import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="hero-title">Welcome to My Website</h1>
      <h2 className="hero-subtitle">Your one-stop solution for web development</h2>
      <Link to="/projects" className="cta-button">
        View My Projects
      </Link>
    </div>
  );
};

export default Home;
