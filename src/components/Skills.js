import React, { useState, useEffect } from "react";
import {Fade} from "react-reveal";
import Build from "../animation/build.json"
import DisplayLottie from "./DisplayLottie";



function Skills(props){
    const [animate, setAnimate] = useState(false);

    let skill;

    if(props.resumeSkills){
        skill = props.resumeSkills.map(function (skill,i) {
            const progressStyle = {
                width: skill.progressPercentage + "%"
            };
            return (
                <div key={i} className="skill">
                    <p className="text">{skill.language}</p>
                    <div className="meter">
                        <span style={progressStyle}/>
                    </div>
                </div>
            );
        });
    }
    
    
    
    return(
        <Fade bottom duration={1000} distance="20px">
            <section id="skills">
                <h1>Skills</h1>
                <div className="skills-container"> 
                    <div className="skills-bar" style={{ marginLeft: "7%" }}>
                            {skill}
                     </div>
                    <DisplayLottie animationData={Build} />
                </div>

            </section>
        </Fade>
    )
}

export default Skills