import React from 'react';
import myPhoto from 'C:/Users/jaggan/jjweb/src/assets/images/my-photo.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about" className="container">
      <h2>About Me</h2>
      <img src={myPhoto} alt="Jaggan Jestine" />
      <p>
        Hi! My name is Jaggan, and I'm a software developer specializing
        in building (and occasionally designing) exceptional websites,
        applications, and everything in between.
      </p>
      <div className="education-container">
        <h3>Education</h3>
        <ul>
          <li>Bachelor's Degree in Computer Science, The University of Texas at Dallas, 2019-2023</li>
        </ul>
      </div>
      <div className="skills-container">
        <h3>Skills</h3>
        <div className="skill-list">
          <div className="skill-item">
            <span className="skill-name">HTML5</span>
          </div>
          <div className="skill-item">
            <span className="skill-name">CSS3</span>
          </div>
          <div className="skill-item">
            <span className="skill-name">JavaScript</span>
          </div>
          <div className="skill-item">
            <span className="skill-name">React</span>
          </div>
          <div className="skill-item">
            <span className="skill-name">Node.js</span>
          </div>
          <div className="skill-item">
            <span className="skill-name">Python</span>
          </div>
          <div className="skill-item">
            <span className="skill-name">Java</span>
          </div>
          <div className="skill-item">
            <span className="skill-name">MySQL</span>
          </div>
          <div className="skill-item">
            <span className="skill-name">C/C++/C#</span>
          </div>
        </div>
      </div>
      <div className="experience-container">
        <h3>Experience</h3>
        <ul>
          <li>Test Engineer, Blue Cross Blue Shield, 2023-Present</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
