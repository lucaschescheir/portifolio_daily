import React, { Component } from 'react';

class Contact_Page extends Component {
    render(){
        return(
            <div className="title">
                <img id="contact" src="/photo.jpg" height="200" width="250" alt="image of person" />
                <h1 style={{color: 'lightgrey'}}>Lucas Chescheir</h1>
                <h3>Hometown: Houston, Tx</h3>
                <h3>Highschool: Kempner Highschool, Class of 2004</h3>
                <h3>College: San Antonio Community College, Houst Community College</h3>
                <h3>Code School: The Iron Yard, Front End</h3>
                <h3>Skills: Javascript, React, Redux, Sql, Mongoose</h3>

            </div>
        )
    }
}
export default Contact_Page;
