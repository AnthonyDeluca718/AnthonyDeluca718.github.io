import React from 'react';
import {Link, hashHistory} from 'react-router';

class Error extends React.Component {
  render() {
    return(
      <div className="error">

        <header>

          <div className="header-content group">

            <div className="profile-name">
              <text className="profile-anthony">Anthony</text><text className="profile-deluca"> Deluca</text>
            </div>

            <center className="header-navigation-links group">
              <Link to="/resume" activeClassName="current" className="header-nav-link">Resume<nav className="hover-bar"></nav></Link>
              <Link to="/projects" activeClassName="current" className="header-nav-link">Projects<nav className="hover-bar"></nav></Link>
              <Link to="/skills" activeClassName="current" className="header-nav-link">Skills<nav className="hover-bar"></nav></Link>
              <Link to="/" activeClassName="current" className="header-nav-link">Home<nav className="hover-bar"></nav></Link>
            </center>

          </div>

        </header>

        <div className="error-content">
          <h1>404</h1>
          <h2 className="ohMy">OH MY GOODNESS</h2>
          <div className="message">
            We apologize but something's gone wrong&#45; an old link, a bad link, or some little glitch.
          </div>
        </div>

      </div>
    );
  }
}

export default Error;
