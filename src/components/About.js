import React from 'react';
import myPhoto from '../assets/images/my-photo.jpg';
import './About.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)', color: '#fff', borderRadius: '8px', padding: '15px' }}
            contentArrowStyle={{ borderRight: '7px solid #84fab0' }}
            date="2024 - present"
            iconStyle={{ background: '#607d8b', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            icon={<i className="fa fa-briefcase custom-icon fa-2x" aria-hidden="true"></i>}
          >
            <h3 style={{ fontSize: '1.5em' }} className="vertical-timeline-element-title">Associate Test Engineer</h3>
            <h4 style={{ fontSize: '1.2em' }} className="vertical-timeline-element-subtitle">Blue Cross Blue Shield of Illinois, Montana, New Mexico, Oklahoma & Texas</h4>
            <p>
              January 2024 - Present
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)', color: '#fff', borderRadius: '8px', padding: '15px' }}
            contentArrowStyle={{ borderRight: '7px solid #84fab0' }}
            date="2023 - present"
            iconStyle={{ background: '#607d8b', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            icon={<i className="fa fa-briefcase custom-icon fa-2x" aria-hidden="true"></i>}
          >
            <h3 style={{ fontSize: '1.5em' }} className="vertical-timeline-element-title">Test Engineer Intern</h3>
            <h4 style={{ fontSize: '1.2em' }} className="vertical-timeline-element-subtitle">Blue Cross Blue Shield of Illinois, Montana, New Mexico, Oklahoma & Texas</h4>
            <p>
              June 2023 - August 2023
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)', color: '#fff', borderRadius: '8px', padding: '15px' }}
            contentArrowStyle={{ borderRight: '7px solid #84fab0' }}
            date="march 2022 - june 2023"
            iconStyle={{ background: '#607d8b', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            icon={<i className="fa fa-briefcase custom-icon fa-2x" aria-hidden="true"></i>}
          >
            <h3 style={{ fontSize: '1.5em' }} className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 style={{ fontSize: '1.2em' }} className="vertical-timeline-element-subtitle">AI Drone Project</h4>
            <p>
              March 2022 - June 2023
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)', color: '#fff', borderRadius: '8px', padding: '15px' }}
            contentArrowStyle={{ borderRight: '7px solid #84fab0' }}
            date="may 2019 - august 2019"
            iconStyle={{ background: '#607d8b', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            icon={<i className="fa fa-briefcase custom-icon fa-2x" aria-hidden="true"></i>}
          >
            <h3 style={{ fontSize: '1.5em' }} className="vertical-timeline-element-title">App Developer Intern</h3>
            <h4 style={{ fontSize: '1.2em' }} className="vertical-timeline-element-subtitle">ApollyOnX</h4>
            <p>
              May 2019 - August 2019
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default About;
