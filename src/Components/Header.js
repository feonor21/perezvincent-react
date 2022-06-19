import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header
                id="home"
                style={{
                    backgroundImage: "url(images/ezgif-5-98d2702d4c.gif)",
                    backgroundSize: "cover",
                }}
            >
                <nav id="nav-wrap">
                    <a
                        className="mobile-btn"
                        href="#nav-wrap"
                        title="Show navigation"
                    >
                        Show navigation
                    </a>
                    <a
                        className="mobile-btn"
                        href="#home"
                        title="Hide navigation"
                    >
                        Hide navigation
                    </a>

                    <ul id="nav" className="nav">
                        <li className="current">
                            <a className="smoothscroll" href="#home">
                                Home
                            </a>
                        </li>

                        <li>
                            <a className="smoothscroll" href="#about">
                                About
                            </a>
                        </li>

                        <li>
                            <a className="smoothscroll" href="#resume">
                                Resume
                            </a>
                        </li>

                        {/* <li>
                            <a className="smoothscroll" href="#portfolio">
                                Works
                            </a>
                        </li> */}
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">
                            Vincent Perez Resume Website
                        </h1>
                        <h3>
                            I'm a french junior developer. This project is my
                            resume website.
                        </h3>
                        <hr />
                        <ul className="social">
                            {/* <a
                                    href={project}
                                    className="button btn project-btn"
                                >
                                    <i className="fa fa-book"></i>Project
                                </a> */}
                            <a
                                href="https://github.com/feonor21"
                                className="button btn github-btn"
                            >
                                <i className="fa fa-github"></i>Github
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vincent-perez-23b4b7114/"
                                className="button btn linkedin-btn"
                            >
                                <i className="fa fa-linkedin"></i>LinkedIn
                            </a>
                            <a
                                href="https://www.facebook.com/perez.vincent21"
                                className="button btn facebook-btn"
                            >
                                <i className="fa fa-facebook"></i>Facebook
                            </a>
                        </ul>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle"></i>
                    </a>
                </p>
            </header>
        );
    }
}

export default Header;
