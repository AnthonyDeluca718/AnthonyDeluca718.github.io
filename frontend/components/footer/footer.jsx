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
          &#8747;&#402;(x,y)&#961;(x) dx = C
        </text>

        <text className="footer-mid" >
          &#8710;u = &#402;
        </text>

      </footer>
    );
  }
}

export default Footer;
