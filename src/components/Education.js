import React from 'react';

import Diploma from '../images/diploma.jpg';
import Bachelors from '../images/bachelors.jpeg';

class Education extends React.Component {
    render () {
        return(
           <div className="bg_education">
                 <div className="education">
                    <div className="heading">Education</div>
                    <div className="diploma"> 
                        <img className="diploma_image" src={Diploma} alt="conestoga_college_logo"/>
                        <div className="diploma_details">
                            <div className="name">Diploma in Information Technology and Business Analysis Operations</div>
                            <div className="dates"><span>Sept 2015-Dec 2016</span></div>
                            <div className="institute">Conestoga College, Kitchener ON Canada</div>
                        </div>
                    </div>
                    <div className="bachelors">
                        <img className="bachelors_image" src={Bachelors} alt="bachelors_logo"/>
                        <div className="bachelor_details">
                            <div className="name">Bachelors of Technology in Computer Science Engineering</div>
                            <div className="dates"><span>Aug 2009-May 2013</span></div>
                            <div className="institute">Punjab Technical University, Jalandar, Punjab India</div>
                        </div>
                    </div>
                </div>
           </div>
        );
    }
}

export default Education;
