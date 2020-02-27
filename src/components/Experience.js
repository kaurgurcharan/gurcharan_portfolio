import React from 'react';



class Experience extends React.Component {
    render() {
        return (
            <div className="bg_exp">
                <div className="experience">
                    <div className="heading">Experience</div>
                    <div className="company"><strong>Software Developer&nbsp;|&nbsp;Proud Technologies Pvt Ltd, New Delhi India&nbsp;|&nbsp;2014-2015</strong></div>
                    <div className="project">Hotel Booking System</div>
                    <div className="description">
                        <ul>
                            <li>Used technologies: Java, JavaScript,JQuery, HTML and CSS, Rest API, MySQL</li>
                            <li>Implemented hotel booking system from scratch</li>
                            <li>Responsible to implement the use case which persisted the end user's booking details into hotel's POS</li>
                            <li>Designed and developed the UI using JavaScript and HTML/CSS for styling</li>
                            <li>Implemented the business logic: process the booking information and interacted with hotel's <br></br>POS to persist the processed data</li>
                            <li>Used Google GeoLocation API to get the current location of the user which part of the business logic</li>
                            <li>The project is deployed on private server</li>
                        </ul>
                    </div>
                    <div className="company"><strong>Lecturer&nbsp;|&nbsp;Guru Gobind Singh College, New Delhi India&nbsp;|&nbsp;2013-2014</strong></div>
                    <div className="project">Taught Courses</div>
                    <div className="description">
                        <ul>
                            <li>Data Structures, C++, JavaScript, Html/css, Software Engineering, Computer Networks,<br></br>Database Management Systems and System Analysis and Design</li>
                        </ul>
                    </div>
                    <div className="company"><strong>Software Developer Intern&nbsp;|&nbsp;National Informatic Center, New Delhi India&nbsp;|&nbsp;2012</strong></div>
                    <div className="description">
                        <ul>
                            <li>Assisted in software development, prototyping, debugging and testing</li>
                            <li>Full participation in Agile software development team</li>
                            <li>Installed and troubleshooted test environment</li>
                            <li>Reviewed product feature specification and created design documentation and test plans</li>
                            <li>Hands on coding with C-sharp, JavaScript and HTML/CSS</li>
                        </ul>
                    </div>
            </div>
            </div>
        );
    }
}


export default Experience;


