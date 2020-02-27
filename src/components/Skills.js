import React from 'react';

import FrontEnd from '../images/front_end_skills.jpg';
import Databases from '../images/databases.jpg';
import Tools from '../images/tools.jpg';


class Skills extends React.Component {
    render() {
        return (
            <div className="bg_skills">
                <div className= "skills">
                    <div className="skills__heading">
                        Skills
                    </div>
                    {/* <div className="frontData"> */}
                        <div className="skills__frontEnd">
                            {/* <Image src={FrontEnd}  width={240} height={240}>
                            </Image> */}
                        <img className="frontEnd" src={FrontEnd} alt="Front_end_languages" />
                        </div>
                        <div className="skills__databases">
                            {/* <Image src={Databases} width={240} height={240}>                           
                            </Image> */}
                            <img className="databases" src={Databases} alt="Databases" />
                        </div>
                        <div className="skills__tools">
                            {/* <Image src={Tools} width={240} height={240}/> */}
                            <img className="tools" src={Tools} alt="Tools" />
                        </div>  
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

export default Skills;
