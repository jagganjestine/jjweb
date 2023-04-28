import React from 'react';
import myPhoto from '../assets/images/git.jpg';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="container my-5">
      <h2>Projects</h2>
      <div className="projects-container">
    <div className="project-card">
  <img src={myPhoto} alt="Git" className="card-img-top" />
  <div className="card-body card-padding">
    <h5 className="card-title">Personal Website</h5>
    <p className="card-text">A React-based personal website showcasing my experience, projects, and contact information. </p>
    <div className="language-dot"><span className="dot dot-js"></span><p>JavaScript</p></div>
    <a href="https://github.com/jaj180010/jjweb" className="btn btn-github" target="_blank" rel="noreferrer">View on GitHub</a>
  </div>
</div>    
<div className="project-card">
        <img src={myPhoto} alt="Git" className="card-img-top" />
          <div className="card-body card-padding">
            <h5 className="card-title">Stock Portfolio Optimization</h5>
            <p className="card-text">A machine learning project that predicts stock market trends using historical data and sentiment analysis.</p>
            <div className="language-dot"><span className="dot dot-python"></span><p>Python</p></div>
            <a href="https://github.com/dhruvbpatel/aim-s23-quant" className="btn btn-github" target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
        </div>
<div className="project-card">
        <img src={myPhoto} alt="Git" className="card-img-top" />
          <div className="card-body card-padding">
            <h5 className="card-title">SQL Database</h5>
            <p className="card-text">A SQL database populated on a MySQL server for query testing purposes, with data generated from Python scripting.</p>
            <div className="language-dot"><span className="dot dot-sql"></span><p>SQL</p></div>
            <a href="https://github.com/jaj180010/shoetopia" className="btn btn-github" target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
        </div>
        <div className="project-card">
        <img src={myPhoto} alt="Git" className="card-img-top" />
          <div className="card-body text-center">
            <h5 className="card-title card-padding">Text Editor</h5>
            <p className="card-text">A cross-platform desktop text editor with support for syntax highlighting and collaborative editing.</p>
            <div className="language-dot"><span className="dot dot-java"></span><p>Java</p></div>
            <a href="https://github.com/jagganjestine/text-editor" className="btn btn-github" target="_blank" rel="noreferrer"> View on GitHub</a>
          </div>
        </div>
        <div className="project-card">
        <img src={myPhoto} alt="Git" className="card-img-top" />
           <div className="card-body card-padding">
           <h5 className="card-title">Calendar</h5>
            <p className="card-text">A simple console-based calendar application that helps users manage their schedules and events.</p>
            <div className="language-dot"><span className="dot dot-java"></span><p>Java</p></div>
            <a href="https://github.com/jagganjestine/simple-calendar" className="btn btn-github" target="_blank" rel="noreferrer">View on GitHub</a>
           </div>
        </div>  
        <div className="project-card">
        <img src={myPhoto} alt="Git" className="card-img-top" />
          <div className="card-body card-padding">
            <h5 className="card-title">Language Learner</h5>
            <p className="card-text">A language learning platform with interactive lessons, quizzes, and a chatbot for practicing conversations.</p>
            <div className="language-dot"><span className="dot"></span><p>C</p></div>
            <a href="https://github.com/jagganjestine/language-learner" className="btn btn-github" target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
        </div>
        
       
      </div>
    </section>
  );
};

export default Projects;
