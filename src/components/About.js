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
        Hello! My name is Jaggan, and I am a software developer specializing in crafting exceptional digital experiences. My expertise encompasses the design, development,
        and testing of outstanding websites and applications. Leveraging a detailed understanding of the intricate processes involved in building web solutions 
        from the ground up, I am committed to bringing unique visions to life through meticulous attention to detail and technical proficiency. Whether it's a website or an application, 
        I deliver nothing short of excellence, ensuring functionality meets creativity in every project I undertake.
      </p>
      <div className="education-container">
        <h3>Education</h3>
        <ul>
          <li>Bachelor's Degree in Computer Science, The University of Texas at Dallas, 2019-2023</li>
        </ul>
      </div>
      <section className="skills-section">
        <div className="skill-bubble">HTML</div>
        <div className="skill-bubble">CSS</div>
        <div className="skill-bubble">JavaScript</div>
        <div className="skill-bubble">Java</div>
        <div className="skill-bubble">SQL</div>
        <div className="skill-bubble">C/C++/C#</div>
        <div className="skill-bubble">React</div>
        <div className="skill-bubble">Selenium</div>
        <div className="skill-bubble">CAD</div>
        
      </section>
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
