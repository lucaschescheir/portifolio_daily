import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class NavBar extends Component {
    render(){
        return(
            <div className="nav_bar">
                <nav>
                    <img src="/mushroom.jpg" height="100" width="100" alt="Logo" />
                    <ul className="bar">
                        <li className="item" ><Link to="/home" className="hyper" id="active" href="">Home </Link></li>
                        <li className="item"><Link to="/projects" className="hyper" href="">Projects </Link></li>
                        <li className="item"><Link to="/resume-page" className="hyper" href="">Resume Page</Link></li>
                        <li className="item"><Link to="/contact-page" className="hyper" href="">Contact Page</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default NavBar;
