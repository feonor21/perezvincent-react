import React, { Component } from "react";
import Typed from "typed.js";

class Header extends Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
        // your desired props to this destructuring assignment.
        const strings = [
            "I'm a french junior developer.",
            "Welcome on my personal website.",
            "I create it for show my motivation.",
        ];
        // You can pass other options here, such as typing speed, back speed, etc.
        const options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 750,
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
        // to prevent memory leaks
        this.typed.destroy();
    }

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
                        <h1 className="responsive-headline">Vincent Perez</h1>
                        <h2>GNU nano 3.2</h2>
                        <h3>
                            <span
                                style={{ whiteSpace: "pre" }}
                                ref={(el) => {
                                    this.el = el;
                                }}
                            />
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
                                href="https://www.linkedin.com/in/vincentperezca/"
                                className="button btn linkedin-btn"
                            >
                                <i className="fa fa-linkedin"></i>LinkedIn
                            </a>
                            {/* <a
                                href="https://www.facebook.com/perez.vincent21"
                                className="button btn facebook-btn"
                            >
                                <i className="fa fa-facebook"></i>Facebook
                            </a> */}
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
