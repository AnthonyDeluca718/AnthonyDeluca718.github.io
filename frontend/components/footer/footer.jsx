import React from 'react';
import { Link, hashHistory } from 'react-router';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <footer className="footer-content">
        <ul className="copyright-list">
          <li>&copy; Anthony Deluca</li><li>Design: Anthony Deluca</li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
