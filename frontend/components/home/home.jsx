import React from 'react';
import { Link, hashHistory } from 'react-router';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="home-content group">

        <div className="home-left">
          <img src="images/profile_picture.jpeg" alt="profile image" className="profile-pic"/>
        </div>

        <div className="home-right">

          <div className="home-des home-des1">
            I'm a Software Engineer based in New York City.
          </div>

          <div className="home-des home-des2">
            Primarily working in Javascript, React, Ruby and Rails
          </div>

          <div className="home-des home-des3">
              I Studied Web Development at App Academy and Mathematics at Penn State
          </div >

          <div className="home-des home-des4">
            I'm interested in web development, algorithms, mathematics and game design.
          </div >

          <div className="home-des home-des5">
            Check out my site or shoot me an email
          </div>

          <div className="profile-contact-section group">

            <div className="profile-contact">
              Contact:
            </div>

            <div className="home-icons">
              <a href="https://github.com/AnthonyDeluca718"><i className="devicon-github-plain colored"></i></a>
              <a href="https://github.com/AnthonyDeluca718"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              <a href="mailto:mail@adeluca.io" ><i className="fa fa-envelope" aria-hidden="true"></i></a>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default Home;


// <img src="css/images/SettingSun.jpg" className="home-image">
// </img>
