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

        <ul className="home-icons">
          <li> <a href="https://github.com/AnthonyDeluca718"><i className="devicon-github-plain colored"></i></a></li>
          <li> <a href="https://github.com/AnthonyDeluca718"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="mailto:mail@adeluca.io" ><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
        </ul>

      </section>
    )
  }
}
export default Contact;
