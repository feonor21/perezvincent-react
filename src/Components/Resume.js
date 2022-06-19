import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
    getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        return (
            <section id="resume">
                {/* <Slide left duration={1300}>
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1>
                                <span>Education</span>
                            </h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <div key="University">
                                        <h3>"University"</h3>
                                        <p className="info">
                                            degree
                                            <span>&bull;</span>
                                            <em className="date">April 2017</em>
                                        </p>
                                        <p>
                                            Describe your experience at school,
                                            what you learned, what useful skills
                                            you have acquired etc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide> */}

                <Slide left duration={1300}>
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1>
                                <span>Work</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            <div key="Awesome Design Studio">
                                <h3>Awesome Design Studio</h3>
                                <p className="info">
                                    Junior bug fixer
                                    <span>&bull;</span>
                                    <em className="date">
                                        March 2017 - February 2018
                                    </em>
                                </p>
                                <p>
                                    Describe work, special projects, notable
                                    achievements, what technologies you have
                                    been working with, and anything else that
                                    would be useful for an employer to know.
                                </p>
                            </div>
                        </div>
                    </div>
                </Slide>

                <Slide left duration={1300}>
                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1>
                                <span>Skills</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            <p>
                                Here are the languages that I know and that I am
                                passionate about.
                            </p>

                            <div className="bars">
                                <ul className="skills">
                                    <li key="C#">
                                        <span
                                            style={{
                                                width: "80%",
                                                background: "#622177",
                                            }}
                                            className="bar-expand C#"
                                        ></span>
                                        <em>C#</em>
                                    </li>
                                    <li key="VB.Net">
                                        <span
                                            style={{
                                                width: "75%",
                                                background: "#622177",
                                            }}
                                            className="bar-expand VB-Net"
                                        ></span>
                                        <em>VB.Net</em>
                                    </li>
                                    <li key="ASP.net">
                                        <span
                                            style={{
                                                width: "65%",
                                                background: "#622177",
                                            }}
                                            className="bar-expand ASP-net"
                                        ></span>
                                        <em>ASP.net</em>
                                    </li>
                                    <li key="javascript">
                                        <span
                                            style={{
                                                width: "25%",
                                                background: "#cfb430",
                                            }}
                                            className="bar-expand javascript"
                                        ></span>
                                        <em>JavaScript</em>
                                    </li>
                                    <li key="typescript">
                                        <span
                                            style={{
                                                width: "25%",
                                                background: "#2f74c0",
                                            }}
                                            className="bar-expand typescript"
                                        ></span>
                                        <em>TypeScript</em>
                                    </li>
                                    <li key="MySQL">
                                        <span
                                            style={{
                                                width: "80%",
                                                background: "#dd8a00",
                                            }}
                                            className="bar-expand MySQL"
                                        ></span>
                                        <em>MySQL</em>
                                    </li>
                                    <li key="TSQL">
                                        <span
                                            style={{
                                                width: "72%",
                                                background: "#9f0707",
                                            }}
                                            className="bar-expand TSQL"
                                        ></span>
                                        <em>microsoft SQL server</em>
                                    </li>
                                    <li key="Docker">
                                        <span
                                            style={{
                                                width: "65%",
                                                background: "#0db7ed",
                                            }}
                                            className="bar-expand Docker"
                                        ></span>
                                        <em>Docker</em>
                                    </li>
                                    <li key="docker swarm">
                                        <span
                                            style={{
                                                width: "37%",
                                                background: "#0db7ed",
                                            }}
                                            className="bar-expand docker_swarm"
                                        ></span>
                                        <em>docker swarm</em>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Slide>
            </section>
        );
    }
}

export default Resume;
