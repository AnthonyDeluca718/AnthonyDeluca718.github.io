import React from 'react';
import { Link, hashHistory } from 'react-router';

class Projects extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="projects-content">

        <section className="project-spotlight  group">
          <div className="image project-image left">
            <a href="http://adeluca.io/JS_Chess">
              <img src="images/BoardState.png" alt="" className="chess-pic"/>
            </a>
          </div>
          <div className="project-show right">
            <a href="https://github.com/AnthonyDeluca718/JS_Chess" className="project-link">
              <h2>JavaScript Chess</h2>
            </a>
            <div className="project-sentence">Javascript Chess built with React/Redux. Supports both normal chess and chess with random starting board.</div>
            <div className="project-sentence">The chess rules were written in JavaScript with a heavily object-oriented design. Each piece is an object as is the board itself. Even empty spaces are respresented by null-pieces. The frontend user interface is written in React/Redux.</div>
            <div className="project-sentence">The object oriented design makes it easy to add features. For example the random mode was easy to set up. The only required code was a funciton to randomly set up the board and the react/redux code to handle the randomizer button.</div>
            <div className="project-sentence"> <a href="http://adeluca.io/JS_Chess" className="text-link">Live</a> <a href="https://github.com/AnthonyDeluca718/JS_Chess" className="text-link">Github</a></div>
          </div>
        </section>

        <section className="project-spotlight group">

          <div className="project-show left">
            <a href="https://github.com/AnthonyDeluca718/Kickstarter" className="project-link">
              <h2>ClonedStarter</h2>
            </a>
            <div className="project-sentence">Kickstarter inspired Full Stack Application. Rails on the backend, React.js on the frontend. </div>
            <div className="project-sentence">A combination of database management and frontend controls prevents users from crashing the database</div>
            <div className="project-sentence">Many errors are caught on the frontend to save database queries.</div>
            <div className="project-sentence"> <a href="https://adeluca-kickstarter.herokuapp.com/#/?_k=2k3ypc" className="text-link">Live</a> <a href="https://github.com/AnthonyDeluca718/Kickstarter" className="text-link">Github</a></div>
          </div>
          <div className="image project-image right">
            <a href="https://adeluca-kickstarter.herokuapp.com/#/?_k=2k3ypc">
              <img src="images/ClonedStarter.png" alt="" className="cloned-starter-pic" />
            </a>
          </div>
        </section>

        <section className="project-spotlight group">
          <div className="image project-image left">
            <a href="http://adeluca.io/MiniJQuery">
              <img src="images/TicTacToe.png" alt="" className="ttt-pic"/>
            </a>
          </div>
          <div className="project-show right">
            <a href="https://github.com/AnthonyDeluca718/MiniJQuery" className="project-link">
              <h2>MiniJQuery</h2>
            </a>
            <div className="project-sentence">A miniture build of JQuery that cpatures the main fucnitonality.</div>
            <div className="project-sentence">Built with vanilla Javascript and native DOM manipulations.</div>
            <div className="project-sentence">.ajax method was used in ClonedStarter. Ajax method handles both form objects and json.</div>
            <div className="project-sentence">Tic Tac Toe game demonstrates the effectiveness of the code.</div>
            <div className="project-sentence"> <a href="http://adeluca.io/MiniJQuery" className="text-link">Live</a> <a href="https://github.com/AnthonyDeluca718/MiniJQuery" className="text-link">Github</a></div>
          </div>
        </section>

      </section>
    )
  }
}

export default Projects;
