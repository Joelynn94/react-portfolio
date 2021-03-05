import React from 'react';
import Form from './Form';

const Contact = () => {

  return (
    <section id="contact">
      <a href="#contact">
        <h2>Contact Me</h2>
      </a>
      <div className="contact-info">
        <p className="text-center">If you would like to contact me for a job opportunity or a project, please send me a quick message - Connect with me on <a className="special-link" href="https://www.linkedin.com/in/joseph-lynn/" target="_blank" rel='noopener noreferrer'>LinkedIn</a>, view what I'm coding on <a className="special-link" href="https://github.com/Joelynn94" target="_blank" rel='noopener noreferrer'>GitHub</a>, or <a className="special-link" href="./Dev_Joseph-Lynn_Resume.pdf" rel='noopener noreferrer' download>Download my resume</a> </p>
      </div>
      <Form />
    </section>
  );
};

export default Contact;
