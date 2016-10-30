import React from 'react';
import { Link, hashHistory } from 'react-router';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="home-content">
        <img src="images/SettingSun.jpg" className="home-image" />
      </div>
    );
  }
}

export default Home;
