import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <a href="#contact">
        <h2>Contact Me</h2>
      </a>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="jsName" />
          <small>Please enter your name</small>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="jsEmail" />
          <small>Please enter email address</small>
        </div>
        <div className="form-group">
          <label htmlFor="message">Send me a quick message</label>
          <textarea type="text" name="message" id="jsMessage" />
        </div>
        <button className="btn btn-primary">Submit Request</button>
      </form>
    </section>
  );
};

export default Contact;
