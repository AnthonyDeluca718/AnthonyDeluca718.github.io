import React from 'react';
import { Link, hashHistory } from 'react-router';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="home-content">

        <img src="css/images/SettingSun.jpg" className="home-image">
        </img>

        <div className="home-des home-des1">
          Software Engineer
        </div>

        <div className="home-des home-des2">
          Primarily working in Javascript, React, Ruby and Rails
        </div>

        <div className="home-des home-des3">
            Studied Web Development at App Academy and
        </div >

        <div className="home-des home-des4">
            Mathematics at Penn State
        </div >

        <div className="home-des home-des5">
          Check out my site or shoot me an email.
        </div>

      </div>
    );
  }
}

export default Home;

<img src="images/SettingSun.jpg" className="home-image">
</img>
