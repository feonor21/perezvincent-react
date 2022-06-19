import React, { Component } from "react";

class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>

                        <div
                            id="portfolio-wrapper"
                            className="bgrid-quarters s-bgrid-thirds cf"
                        >
                            <div
                                key="EveMiningFleet"
                                className="columns portfolio-item"
                            >
                                <div className="item-wrap">
                                    <a href="https://eveminingfleet.ovh/">
                                        <img
                                            src="images/portfolio/eveminingfleet.jpg"
                                            alt="EveMiningFleet"
                                        ></img>
                                    </a>

                                    <div style={{ textAlign: "center" }}>
                                        Eve Mining Fleet, for eve online. C#,
                                        ASP.net and MySQL
                                    </div>
                                </div>
                            </div>

                            <div
                                key="ResumeCv"
                                className="columns portfolio-item"
                            >
                                <div className="item-wrap">
                                    <img
                                        src="images/portfolio/resumecv.jpg"
                                        alt="Resume Cv"
                                    ></img>

                                    <div style={{ textAlign: "center" }}>
                                        my resume website with autodeploy by
                                        github action.
                                    </div>
                                </div>
                            </div>

                            <div
                                key="HomeAssistant"
                                className="columns portfolio-item"
                            >
                                <div className="item-wrap">
                                    <img
                                        src="images/portfolio/homeassistant.jpg"
                                        alt="Home assistant"
                                    ></img>

                                    <div style={{ textAlign: "center" }}>
                                        HomeAssistant for my house.
                                    </div>
                                </div>
                            </div>

                            <div
                                key="dockerswarm"
                                className="columns portfolio-item"
                            >
                                <div className="item-wrap">
                                    <img
                                        src="images/portfolio/dockerswarm.png"
                                        alt="Cluster Swarm"
                                    ></img>

                                    <div style={{ textAlign: "center" }}>
                                        Cluster docker swarm on 6 raspberry pi
                                        4.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
