import React, {
  Component,
} from 'react';
import Data from './data';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

export default class Project extends Component {
constructor(props) {
    super(props)
    this.state = {
        projects: Data
}
}
handleClick(url){
    window.location.href = url;
}
  render() {
      const rp = this.props.match.params;
const project= this.state.projects;
const link = project[rp.id].link
    return (
      <div>
          <Link to="/projects" ><button>Back</button></Link>
          <h1>{project[rp.id].name}</h1>
          <h2>{ project[rp.id].description }</h2>
          <h2><img src={ project[rp.id].image} height="100" width="100"/> </h2>
          <h2>Date of Completion: { project[rp.id].doc }</h2>
          <button onClick={() =>this.handleClick(link)}>Check it out on GitHub!</button>
      </div>
    );
}
  }
