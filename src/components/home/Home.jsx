import React from "react";
import "./home.css";
import resmim from "../../assets/me1.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={resmim} alt="" className="home_img" height="125" width="125" />
                <h1 className="home_name">Rumeysa Ay</h1>
                <span className="home_education">Yazılım Mühendisiyim</span>

                <HeaderSocials />

                <a href="#contact" className="btn">Benimle İletişime Geç</a>

                <ScrollDown />
            </div>
            <Shapes />
        </section>
    )
}

export default Home;