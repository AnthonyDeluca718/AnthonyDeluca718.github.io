import React from 'react';
import { Link, hashHistory } from 'react-router';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <footer className="footer-content group">
        <ul className="footer-copyright" >
          <li className="footer-element">Design: Anthony Deluca</li>
          <li className="footer-element">&copy; Anthony Deluca</li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
