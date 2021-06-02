import React from "react";
import Common from "./common";
import web from "../src/images/about.svg";
const About =()=>{
    return(
        <Common
        name="HEY THIS IS ABOUT PAGE"
        imgsrc={web}
        link="https://www.youtube.com/watch?v=7lUG04-4v3I"
        btn_name="Home"
        />
    );

}
export default About;
