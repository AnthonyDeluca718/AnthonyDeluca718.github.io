import React from 'react';
import { Link, hashHistory } from 'react-router';

class Projects extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="projects-content">

        <section className="project-spotlight">

          <div className="project-show">
            <a href="https://adeluca-kickstarter.herokuapp.com" className="project-link">
              <h2>ClonedStarter</h2>
            </a>
            <p>A fullstack application inspired by AirBnB, built with Ruby on Rails on the backend and with React.js and Redux on the front end.  This app integrates the Google Maps API to allow users to search, filter, and display bookings by location.</p>
          </div>
          <div className="image project-image">
            <a href="https://adeluca-kickstarter.herokuapp.com">
              <img src="image project-images/ClonedStarter.png" alt="" className="cloned-starter-pic" />
            </a>
          </div>
        </section>

        <section className="project-spotlight">
          <div className="project-show">
            <a href="https://anthonydeluca718.github.io/JS_Chess/" className="project-link">
              <h2>JavaScript Chess</h2>
            </a>
            <p>Javascript Chess built with React/Redux. Supports both normal chess and chess with random starting board.</p>
            <p>The chess rules were written in JavaScript with a heavily object-oriented deisgn. Each piece is an object as is the board itself. Even empty spaces are respresented by null-pieces. The frontend user interface is written in React/Redux.</p>
            <p>The object oriented design makes it easy to add features. For example the random mode was easy to set up. The only required code was a funciton to randomly set up the board and the react/redux code to handle the randomizer button.</p>
            <p>Checkout the code: <a href="https://github.com/AnthonyDeluca718/JS_Chess" className="text-link">Github</a></p>
          </div>
          <div className="image project-image">
            <a href="https://anthonydeluca718.github.io/JS_Chess/">
              <img src="images/BoardState.png" alt="" className="chess-pic"/>
            </a>
          </div>
        </section>

        <section className="project-spotlight">
          <div className="project-show">
            <a href="https://anthonydeluca718.github.io/MiniJQuery/" className="project-link">
              <h2>MiniJQuery</h2>
            </a>
            <p>A miniture build of JQuery that cpatures the main fucnitonality.</p>
          </div>
          <div className="image">
            <a href="https://anthonydeluca718.github.io/MiniJQuery/">
              <img src="images/TicTacToe.png" alt="" className="ttt-pic"/>
            </a>
          </div>
        </section>

      </section>
    )
  }
}

export default Projects;
