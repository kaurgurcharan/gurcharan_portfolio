import React from 'react';
// import Intro from '../images/intro.jpg'; for image on welcome page
// import BackGround from '../images/background.jpg';

class Home extends React.Component {
    render() {
        return (
                <div className="bg_home"> {/* for background */}
                    <div className="intro-container">
                        <div className="intro">
                            <div className="intro__heading">
                                   <p className="intro__message">Hello World!!</p>
                                   <p className="intro__name">I'm Gurcharan Kaur</p>
                                   <p className="intro__title">I'm a Front-End Web Developer</p>
                                   <i class="intro__arrow"></i>
                            </div>
                            <div>
                                {/* <div className="intro__image">
                               <img className="image" src={Intro} alt="introduction_image"></img>
                            </div> */}
                                    
                                </div>
                                
                            {/* <div className="objective">
                                <div className="intro__detail"> Creative and dependable Entry Level Front-End Developer with a stellar 
                                        customer service record and superb work ethic. Broadly and deeply knowledgeable in a wide variety
                                        of computer languages as well as the principles and techniques of making dynamic web projects. 
                                        Highly adept at conveying complex technical information to a variety of professional and make 
                                        audiences to be clear and understandable.
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
        );
    }
}

// const Home = () => {
//     return(
//         <div className="background">
//            {/* <img classname="background" src={BackGround}></img> */}
//             <div className="intro_section">
//                 <div className="intro">
//                     <div className="division">
//                         <div>
//                             <div className="intro__name">Gurcharan Kaur</div>
//                             <div className="intro__title">Front-End Developer</div>
//                         </div>
//                         <div>
//                             <div className="intro__image">
//                             <img className="image" src={Intro} alt="introduction_image"></img>
//                                         {/* <Image className="image" src={Intro}  width={150} height={150}></Image> */}
//                             </div>
//                         </div>
//                     </div>
                            
//                     <div className="objective">
//                         <div className="intro__detail"> Creative and dependable Entry Level Front-End Developer with a stellar 
//                             customer service record and superb work ethic. Broadly and deeply
//                             knowledgeable in a wide variety of computer languages as well as 
//                             the principles and techniques of making dynamic web projects. 
//                             Highly adept at conveying complex technical information to a 
//                             variety of professional and make audiences to be clear and 
//                             understandable.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default Home;
