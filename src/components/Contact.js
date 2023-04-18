import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !subject || !message) {
      setStatusMessage('Please fill out all fields.');
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Jaggan',
      subject: subject,
      message_html: message,
    };

    emailjs
      .send(
        'service_ki03vjd',
        'template_w1mjsf8',
        templateParams,
        'user_Mdmbtt2O5r0Ro5J2Gkw1c'
      )
      .then(
        (response) => {
          setStatusMessage('Your message has been sent!');
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          console.log('FAILED...', error);
          setStatusMessage('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>
    </section>
  );
};

export default Contact;
