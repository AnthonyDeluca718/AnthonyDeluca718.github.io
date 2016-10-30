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

        <div className="home-des1">
          I am a software engineer primarily working in Javascript, React, Ruby and Rails.
          I'm interested in web development, algorithms, mathematics and game design.
          I studied mathematics at Penn State and web development at App Academy.
          Check out some of my projects or shoot me an email.
        </div>

      </div>
    );
  }
}

export default Home;

<img src="images/SettingSun.jpg" className="home-image">
</img>
