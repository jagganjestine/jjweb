import React from 'react';
import myPhoto from '../assets/images/my-photo.jpg';
import './About.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SkillsBubbleCluster from './SkillsBubbleCluster'; // Import the SkillsBubbleCluster component


const About = () => {
  const skillsData = [
    { name: 'HTML', value: 90 },
    { name: 'CSS', value: 80 },
    { name: 'JavaScript', value: 85 },
    { name: 'Java', value: 60 },
    { name: 'SQL', value: 70 },
    { name: 'C', value: 80 },
    { name: 'C++', value: 75 },
    { name: 'C#', value: 75 },
    { name: 'React', value: 70 },
    { name: 'Selenium', value: 100 },
    { name: 'CAD', value: 60 },
    { name: 'Agile', value: 60 },
    { name: 'AI', value: 60 },
    { name: 'Python', value: 70},
    { name: 'Swift', value: 70}
  ];
  return (
    <section id="about" className="container">
      <h2>About Me</h2>
      <img src={myPhoto} alt="Jaggan Jestine" />
      <p>
      Hello! I'm Jaggan, a software developer dedicated to creating exceptional digital experiences. 
      My background in design, development, and testing equips me to craft outstanding websites and applications from scratch. 
      I merge technical proficiency with a keen attention to detail to transform unique visions into reality, 
      guaranteeing a harmonious blend of functionality and creativity in every project. Let's build something excellent together!
      </p>
      <div className="education-container">
        <h3>Education</h3>
        <ul>
          <li>Bachelor's Degree in Computer Science, The University of Texas at Dallas, 2019-2023</li>
        </ul>
      </div>
      <h2>Skills</h2>
      <section className="skills-section">
        <SkillsBubbleCluster data={skillsData} />
      </section>
      <div className="experience-container">
        <h3>Experience</h3>
        <VerticalTimeline className="vertical-timeline-custom-line">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)', color: '#fff', borderRadius: '8px', padding: '15px' }}
            contentArrowStyle={{ borderRight: '7px solid #84fab0' }}
            //date="2024 - present"
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
            //date="2023 - present"
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
            //date="march 2022 - june 2023"
            iconStyle={{ background: '#607d8b', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            icon={<i className="fa fa-briefcase custom-icon fa-2x" aria-hidden="true"></i>}
          >
            <h3 style={{ fontSize: '1.5em' }} className="vertical-timeline-element-title">SWE Intern</h3>
            <h4 style={{ fontSize: '1.2em' }} className="vertical-timeline-element-subtitle">AI Drone Project</h4>
            <p>
              March 2022 - June 2023
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)', color: '#fff', borderRadius: '8px', padding: '15px' }}
            contentArrowStyle={{ borderRight: '7px solid #84fab0' }}
            //date="may 2019 - august 2019"
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
