import React from 'react';
import { Link, hashHistory } from 'react-router';

class Skills extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="skills-content">

        <div className="skills-header">
          <i className="devicon-ruby-plain colored skill-icon"></i>
          <i className="devicon-rails-plain colored skill-icon"></i>
          <i className="devicon-javascript-plain colored skill-icon"></i>
          <i className="devicon-react-original colored skill-icon"></i>
          <i className="devicon-cplusplus-line colored skill-icon"></i>
          <i className="devicon-jquery-plain skill-icon"></i>
          <i className="devicon-git-plain skill-icon"></i>
          <i className="devicon-css3-plain colored skill-icon"></i>
          <i className="devicon-html5-plain colored skill-icon"></i>
          <i className="devicon-heroku-original skill-icon"></i>
          <i className="devicon-postgresql-plain colored skill-icon"></i>
          <i className="devicon-amazonwebservices-original skill-icon"></i>
          <i className="devicon-chrome-plain colored"></i>
          <i className="devicon-atom-original colored skill-icon"></i>
          <i className="devicon-mysql-plain"></i>
          <i className="devicon-apple-original"></i>
        </div>

        <div className="skills-list">

        </div>


        <div className="skills-explanation">


        </div>

      </div>
    );
  }
}

export default Skills;
