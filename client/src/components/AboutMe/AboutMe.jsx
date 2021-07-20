import React from "react";
import "./AboutMe.css"


function AboutMe() {
    return (
        <div className="about">
            <div>
                <h1>I developed this website for an individual project for Henry bootcamp.</h1>
                <h2>This project use information and images from the {<a href="https://rawg.io/apidocs">RAWG</a>} API.</h2>
            </div>
        </div>
    );
}


export default AboutMe;