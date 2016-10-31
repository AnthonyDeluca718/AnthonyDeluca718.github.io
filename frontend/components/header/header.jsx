import React from 'react';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
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
    );
  }
}

export default Header;
