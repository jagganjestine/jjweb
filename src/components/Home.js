import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="hero-title">Welcome to My Website</h1>
      <h2 className="hero-subtitle">Your one-stop solution for web development</h2>
      <a href={process.env.PUBLIC_URL + "/projects"} className="cta-button">
        View My Projects
      </a>
    </div>
  );
};

export default Home;
