import React, { Component } from "react";

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

                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Projects</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <div key="Awesome Design Studio">
                            <h3>Eve Mining Fleet</h3>
                            <p className="info">
                                C#, ASP.NET, MySQL, API REST
                                {/* <span>&bull;</span>
                                <em className="date">
                                    March 2017 - February 2018
                                </em> */}
                            </p>
                            <p>
                                I developed this site because I needed a tool to
                                manage payments on eve online in order to gather
                                more than ten players efficiently.
                                <br />I first learned C# to create low
                                complexity software.
                                <br />
                                Then, I learned ASP.net and MVC coding to
                                upgrade my software to a website.
                                <br />
                                All data is stored in a MySQL database.
                                <br />
                                C# used the entity framework as an interface to
                                the database.
                                <br />
                                To get all the data from eve online, I use its
                                REST API.
                                <br />
                                After that, I divided my website into 3
                                services, a cronjob for all background
                                calculations, a backend that responds to a
                                frontend.
                                <br />
                                <a href="https://eveminingfleet.ovh/">
                                    go to eveminingfleet.
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="nine columns main-col">
                        <div key="Awesome Design Studio">
                            <h3>My Resume Website</h3>
                            <p className="info">
                                React, JS, Docker, Github Action
                                {/* <span>&bull;</span>
                                <em className="date">
                                    March 2017 - February 2018
                                </em> */}
                            </p>
                            <p>
                                I developed this site because I needed a website
                                to present myself. It was created in React. To
                                simplify my deployment I make a github action
                                that deploys it for me at each update.
                            </p>
                        </div>
                    </div>
                </div>

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
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
