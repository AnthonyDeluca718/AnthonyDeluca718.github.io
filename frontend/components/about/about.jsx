import React from 'react';
import { Link, hashHistory } from 'react-router';

class About extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="about-content">
        <div className="profile-info">
          <h2>About me</h2>
            <p>
              I am a software engineer primarily working in Javascript, React, Ruby and Rails.
              I'm interested in web development, algorithms, mathematics and game design.
              I studied mathematics at Penn State and web development at App Academy.
              Check out some of my projects or shoot me an email.
            </p>
            <ul className="icons major">
              <li> <a href="https://github.com/AnthonyDeluca718"><i className="fa fa-github-alt" id="about-icon1"aria-hidden="true"></i></a></li>
              <li> <a href="https://www.linkedin.com/in/a-deluca"><i className="fa fa-linkedin-square" id="about-icon2"aria-hidden="true"></i></a></li>
            </ul>
        </div>
      </div>
    )
  }

}

export default About;
