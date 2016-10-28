import React from 'react';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <header className="header-content">

        <div className="profile-name">
          Anthony Deluca
        </div>

        <center className="header-navigation-links group">
          <Link to="/skills" activeClassName="current" className="header-nav-link">Skills<nav className="hover-bar"></nav></Link>
          <Link to="/projects" activeClassName="current" className="header-nav-link">Projects<nav className="hover-bar"></nav></Link>
          <Link to="/about" activeClassName="current" className="header-nav-link">About Me<nav className="hover-bar"></nav></Link>
          <Link to="/contact" activeClassName="current" className="header-nav-link">Contact<nav className="hover-bar"></nav></Link>
        </center>

      </header>
    );
  }
}

export default Header;
