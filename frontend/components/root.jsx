import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';


import Home from './home/home';
import Skills from './skills/skills';
import Contact from './contact/contact';
import Projects from './projects/projects';
import About from './about/about';
import Error from './error/error';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/skills" component = {Skills} />
          <Route path="/contact" component = {Contact} />
          <Route path="/projects" component = {Projects} />
          <Route path="/about" component = {About} />
          <Route path="*" component={Error}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
