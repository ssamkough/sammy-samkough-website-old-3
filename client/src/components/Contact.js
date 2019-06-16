import React from "react";

const Contact = props => {
  return (
    <div className="container center">
      <h3>Contact Me</h3>
      <form action="">
        <div className="input-field">
          <i className="material-icons prefix">person</i>
          <input type="text" id="name" />
          <label for="name">Your Name</label>
        </div>
        <div className="input-field">
          <i className="material-icons prefix">email</i>
          <input type="email" id="email" />
          <label for="email">Your Email</label>
        </div>
        <div className="input-field">
          <i className="material-icons prefix">message</i>
          <textarea id="message" className="materialize-textarea" />
          <label for="message">Your Message</label>
        </div>
      </form>
    </div>
  );
};

export default Contact;
