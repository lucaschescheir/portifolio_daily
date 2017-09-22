import React, { Component } from 'react';
import StarBar from './starbar';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import Project from './project';
import Data from './data';

class Projects extends Component {
    constructor(props){
        super( props )
        this.state={
items: Data,
        }
    }
/*I think i could of mapped over the Data and just had one template 4 times but I ran out of time....*/
    render(){
console.log(Data[0].id)
        return(
            <section>
                <div className="container">
                    <div className="projects">
                        <h2><Link to={"/project/" + "0"}>{Data[0].name}</Link></h2>
                        <img src={Data[0].image} height="100" width="100" alt="image of project" />
                        <h3>Description:</h3><p>{Data[0].description}</p>
                        <StarBar  />
                    </div>
                    <div className="projects">
                        <Link to={"/project/" +"1"}><h2>{Data[1].name}</h2></Link>
                        <img src={Data[1].image} height="100" width="100" alt="image of project"></img>
                        <h3>Description:</h3><p>{Data[1].description}</p>
                        <StarBar  />
                    </div>
                    <div className="projects">
                        <Link to={"/project/" + "2"}><h2>{Data[2].name}</h2></Link>
                        <img src={Data[2].image} height="100" width="100" alt="image of project"></img>
                        <h3>Description:</h3><p>{Data[2].description}</p>
                        <StarBar  />
                    </div>
                    <div className="projects">
                        <Link to={"/project/" + "3"}><h2>{Data[3].name}</h2></Link>
                        <img src={Data[3].image} height="100" width="100" alt="image of project"></img>
                        <h3>Description:</h3><p>{Data[3].description}</p>
                        <StarBar  />
                    </div>
                </div>
            </section>
        )
    }
    }
export default Projects
