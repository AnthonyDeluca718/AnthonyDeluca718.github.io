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
            Anthony Deluca
          </div>

          <center className="header-navigation-links group">
            <Link to="/contact" activeClassName="current" className="header-nav-link group">Contact<nav className="hover-bar"></nav></Link>
            <Link to="/about" activeClassName="current" className="header-nav-link group">About<nav className="hover-bar"></nav></Link>
            <Link to="/projects" activeClassName="current" className="header-nav-link group">Projects<nav className="hover-bar"></nav></Link>
            <Link to="/skills" activeClassName="current" className="header-nav-link group">Skills<nav className="hover-bar"></nav></Link>

          </center>

        </div>

      </header>
    );
  }
}

export default Header;
