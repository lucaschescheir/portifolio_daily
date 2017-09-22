import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom'

import NavBar from './components/nav-bar';
import Projects from './components/projects';
import Resume_Page from './components/resume-page';
import Contact_Page from './components/contact-page';
import Project from './components/project';
import Home from './components/home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />

          <switch>

              <Route path="/project/:id" component={ Project } />
              <Route path="/projects" component={Projects} />
              <Route path="/resume-page" component={Resume_Page} />
              <Route path="/contact-page" component={Contact_Page} />
              <Route path="/home" component={Home} />
          </switch>
      </div>


    );
  }
}

export default withRouter(App);
