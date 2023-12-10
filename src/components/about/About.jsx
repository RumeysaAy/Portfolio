import React from "react";
import "./about.css";
import pp from "../../assets/me1.png";
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id="about" >
            <h2 className="section__title">Hakkımda</h2>

            <div className="about_container grid">
                <img src={pp} alt="" className="about_img" height="125" width="125"/>

                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description">
                        Ben Rumeysa Ay, yazılım mühendisliği öğrencisiyim.
                        Web sitesi tasarımı ve yapımı konusunda zengin deneyime sahibim.
                        </p>
                        <a href="" className="btn">CV'mi İndir</a>
                        
                    </div>

                    <div className="about_skills grid">

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">JavaScript</h3>
                                <span className="skills_number">90%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage javascript"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">C#</h3>
                                <span className="skills_number">85%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage c"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Java</h3>
                                <span className="skills_number">80%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage java"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About;