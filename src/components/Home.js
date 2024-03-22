import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Particles from 'react-particles';
import particlesConfig from './particlesConfig.json';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Welcome to My Website'],
      typeSpeed: 100,
      backDelay: 5000, // Wait for 5 seconds before relooping
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-container">
      <Particles className="particles" params={particlesConfig} />
      <h1 className="hero-title">
        <span ref={typedRef}></span>
      </h1>
      <h2 className="hero-subtitle">Your one-stop solution for web development</h2>
      <Link to="/projects" className="cta-button">
        View My Projects
      </Link>
    </div>
  );
};

export default Home;
