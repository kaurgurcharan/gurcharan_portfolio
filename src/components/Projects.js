import React from 'react';
import calculator from '../images/calculator.jpg';
import responsive from '../images/responsive.jpg';
import weather from '../images/weather.jpg';



class Projects extends React.Component {
    render () {
        return (
            <div className="bg_projects">
                <div className="projects">
                    <h1 className="heading">Personal Projects</h1>
                    <div className="pro_description">
                        <div className="project_one">
                            <a href=" https://kaurgurcharan.github.io/calculator/"><img className="all_image" src={calculator} alt="calculator"/></a>
                        </div>
                        <div className="project_two">
                            <a href="https://kaurgurcharan.github.io/"><img className="all_image" src= {responsive} alt="responsive_Design"/></a>
                        </div>
                        <div className="project_three">
                            <a href="https://kaurgurcharan.github.io/weather-react-app/"><img className="all_image" src={weather} alt=""/></a>
                        </div>
                        <div className="project_four">
                            {/* <a href=""><img className="" src="" alt=""/></a> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;