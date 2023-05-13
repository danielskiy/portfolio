import React, { useState } from "react";
import "../App.css"
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import jsIcon from "@iconify/icons-logos/javascript";
import html5Icon from "@iconify/icons-logos/html-5";



function About(props){
    let sectionName, hello, about, profilePic;

    if(props.sharedBasicInfo){
        profilePic = "images/" + props.sharedBasicInfo.image;
    }

    if (props.resumeBasicInfo) {
        sectionName = props.resumeBasicInfo.section_name.about;
        hello = props.resumeBasicInfo.description_header;
        about = props.resumeBasicInfo.description;
        
    }
    
    return(
        <section id="about">
            <div className="col-md-12">
                <h1>{sectionName}</h1>
                <div className="row center mx-auto">
                    <div className="col-md-4 center">
                        <div className="polaroid" > 
                            <span>
                                <img
                                    height="250px"
                                    src={profilePic}
                                    alt="Avatar Plaveholder"
                                />
                                <Icon
                                    icon={html5Icon}
                                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                                />
                                <Icon
                                    icon={jsIcon}
                                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                                />   
                                <Icon
                                    icon={reactIcon}
                                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                                />             
                            </span>
                        </div>
                    </div>

                    <div className="col-md-8 center">
                        <div className="col-md-10">
                            <div className="card">
                                <div className="card-header">
                                    <Icon
                                        icon="emojione:red-circle"
                                        data-inline="false"
                                        height="13px"
                                    />{" "}
                                    &nbsp;
                                    <Icon
                                        icon="twemoji:yellow-circle"
                                        data-inline="false"
                                        height="12px"
                                    />{" "}
                                    &nbsp;
                                    <Icon
                                        icon="twemoji:green-circle"
                                        data-inline="false"
                                        height="12px"
                                    />
                                
                                </div>
                                <div className="card-body font-trebuchet text-justify ml-3 mr-3"
                                    style={{
                                        height: "auto",
                                        fontSize: "90%",
                                        lineHeight: "200%",
                                    }}
                                >
                                <h4>{hello}</h4>
                                    {about}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );



}


export default About;