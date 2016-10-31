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

        <div className="skills-list group">

          <ul className="skills-sub-list">
            <li>Javascript   </li>
            <li>Ruby    </li>
            <li>Rails   </li>
            <li>C++    </li>
            <li>Matlab </li>
          </ul>

          <ul className="skills-sub-list">
            <li>React   </li>
            <li>Redux    </li>
            <li>HTML5    </li>
            <li>CSS</li>
            <li>JQuery</li>
          </ul>

          <ul className="skills-sub-list">
            <li>Numerical Optimization    </li>
            <li>Stochstic Differential Equations </li>
            <li>PDEs </li>
            <li>Latex  </li>
          </ul>

        </div>


        <div className="skills-explanation">
          <div className="skills-explanation-title">
            History
          </div>

          <p>
            YOLO
          </p>

          <p>
            More yolo
          </p>

          <p>
            Most Yolo
          </p>

        </div>

      </div>
    );
  }
}

export default Skills;
