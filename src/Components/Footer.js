import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <Fade bottom>
                        <div className="twelve columns">
                            <ul className="social-links">
                                <li key="github">
                                    <a href="https://github.com/feonor21">
                                        <i className="fa fa-github"></i>
                                    </a>
                                </li>
                                <li key="linkedin">
                                    <a href="https://www.linkedin.com/in/vincent-perez-23b4b7114/">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li key="facebook">
                                    <a href="https://www.facebook.com/perez.vincent21">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                            </ul>

                            <ul className="copyright">
                                <li>&copy; Copyright 2022 Vincent Perez</li>
                            </ul>
                        </div>
                    </Fade>

                    <div id="go-top">
                        <a
                            className="smoothscroll"
                            title="Back to Top"
                            href="#home"
                        >
                            <i className="icon-up-open"></i>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
