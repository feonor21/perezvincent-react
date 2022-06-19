import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img
                            className="profile-pic"
                            src="images/profilepic.gif"
                            alt="Vincent perez Profile Pic"
                        />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>
                            I am a developer, I develop tools to improve my
                            life. I like computer science for all the challenges
                            that our generation has to face.
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Vincent Perez</span>
                                    <br />
                                    <span>
                                        Salaberry-de-valleyfield, Quebec,
                                        Canada, J6S3K9
                                    </span>
                                    <br />
                                    {/* <span>{phone}</span> */}
                                    <br />
                                    <span>perez.vincent21@gmail.com</span>
                                </p>
                            </div>
                            {/* <div className="columns download">
                                    <p>
                                        <a
                                            href={resumeDownload}
                                            className="button"
                                        >
                                            <i className="fa fa-download"></i>
                                            Download Resume
                                        </a>
                                    </p>
                                </div> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
