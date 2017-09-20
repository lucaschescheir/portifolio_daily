import React, { Component } from 'react';
import StarBar from './starbar'

class Projects extends Component {
    handleClick(url){
        window.location.href = url;
    }

    render(){
        return(
            <section>
                <div className="container">
                    <div className="projects">
                        <h2>iTunes Search Page</h2>
                        <img src="/placeholder4.png" height="100" width="100" alt="image of project" />
                        <h3>Description:</h3><p>a site for searching your favorite music</p>
                        <button onClick={() =>this.handleClick("https://github.com/lucaschescheir/Itunes-music-search-project")}>Check it out on GitHub!</button>
                        <StarBar  />
                    </div>
                    <div className="projects">
                        <h2>Bent Creek Ceramics Website</h2>
                        <img src="/placeholder4.png" height="100" width="100" alt="image of project"></img>
                        <h3>Description:</h3><p> a website for Bent Creek Ceramics.</p>
                        <button onClick={() =>this.handleClick("https://github.com/lucaschescheir/Week-one-Project")}>Check it out on GitHub!</button>
                        <StarBar  />
                    </div>
                    <div className="projects">
                        <h2> Gabble App</h2>
                        <img src="/placeholder4.png" height="100" width="100" alt="image of project"></img>
                        <h3>Description:</h3><p> a group messaging app with a sign in page.</p>
                        <button onClick={() =>this.handleClick("https://github.com/lucaschescheir/Gabble_App")}>Check it out on GitHub!</button>
                        <StarBar  />
                    </div>
                    <div className="projects">
                        <h2> Snippit App</h2>
                        <img src="/placeholder4.png" height="100" width="100" alt="image of project"></img>
                        <h3>Description:</h3><p> a app for storing and searching your collection of snippits!</p>
                        <button onClick={() =>this.handleClick("https://github.com/lucaschescheir/Snippet_Daily")}>Check it out on GitHub!</button>
                        <StarBar  />
                    </div>
                </div>
            </section>
        )
    }
}
export default Projects
