import React from 'react';
import { Link, hashHistory } from 'react-router';

class Contact extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="contact-content">

        <div className="contact-details">
          <h2>Contact Me</h2>
          <p>Staten Island, NY 10312 <br/>
            mail@adeluca.io <br />
          </p>
        </div>

        <ul className="contact-actions">
          <li><a href="mailto:mail@adeluca.io" className="mail-button button">Email</a></li>
          <li><a href="assets/resume.pdf" className="resume-button button">Resume</a></li>
        </ul>

      </section>
    )
  }
}
export default Contact;
