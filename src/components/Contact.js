import React from 'react';

// import Image from 'react-image-resizer';

// import Github from '../images/gitHub.jpg';
// import LinkedIn from '../images/linkedIn.jpg';
// import Twitter from '../images/twitter.jpg';
// import Medium from '../images/medium.jpg';


class Contact extends React.Component {
    render () {
        return(
            <div className="contact">
                <div className="heading">
                    Contact Me
                </div>
                <div className="collection">
                    <div className="git">
                        <a href="https://github.com/kaurgurcharan"><i className="fa fa-github"></i></a>
                    </div>
                    <div className="link">
                        <a href="https://www.linkedin.com/in/ikaurgurcharan/"><i className="fa fa-linkedin"></i></a>
                    </div>
                    <div className="tweet">
                        <a href="https://twitter.com/neena_panesar"><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
                <div className="hire"><a href="mailto:kaurgurcharan174@gmail.com" className="button_hire">Hire Me</a></div>
                <div className="copyright">&copy;Copyright 2020 Gurcharan Kaur</div>
            </div>
        );
    }
}


export default Contact;
