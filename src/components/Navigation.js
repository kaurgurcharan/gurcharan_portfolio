import React from 'react';
import {NavLink} from 'react-router-dom';

 
class Navigation extends React.Component {
    render () {
        return (
            <div className="container">                    
                <nav>
                    <div className="nav-container nav-align-center">
                        <a className="logo">GK</a>
                        <ul className="nav-links">
                            <li className="active"><NavLink className="nav-link" to="/">Home</NavLink></li>
                            <li><NavLink className="nav-link" to="/skills">Skills</NavLink></li>
                            <li><NavLink className="nav-link" to="/projects">Projects</NavLink></li>
                            <li><NavLink className="nav-link" to="/experience">Experience</NavLink></li>
                            <li><NavLink className="nav-link" to="/education">Education</NavLink></li>
                            <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                </nav>
                
         </div>
        );
    }
}

export default Navigation;

           