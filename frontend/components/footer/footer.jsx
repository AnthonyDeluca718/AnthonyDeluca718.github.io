import React from 'react';
import { Link, hashHistory } from 'react-router';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <footer className="footer-content group">
        <text className="footer-left" >
          Design: Anthony Deluca &copy; Anthony Deluca
        </text>
        <text className="footer-right" >
          &#8710;u = 0
        </text>

        <text className="footer-mid" >
          Yolo
        </text>

      </footer>
    );
  }
}

export default Footer;
