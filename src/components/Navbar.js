import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Headroom from "react-headroom";





function NavBar(props){
    let home, about, projects, resume, contact, sections;
    if( props.resumeBasicInfo){
        sections=Object.keys(props.resumeBasicInfo.section_name).map(function (section) {
            return(
                <Nav.Link href={"#"+section}>{props.resumeBasicInfo.section_name[section]}</Nav.Link>
            );
        });
        /*home=props.resumeBasicInfo.section_name.home;
        about=props.resumeBasicInfo.section_name.about;
        projects=props.resumeBasicInfo.section_name.projects;
        resume=props.resumeBasicInfo.section_name.resume;
        contact=props.resumeBasicInfo.section_name.contact;*/
    }

    return (
        <Headroom>
            <Navbar fixed="top" expand="sm">
                
                    <Navbar.Brand href="#home" style={{ marginLeft: "7%"}}>DS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto" style={{ marginRight: "6%"}}>
                            {sections}
                        </Nav>
                    </Navbar.Collapse>
                
            </Navbar>
        </Headroom>
    );

}   

export default NavBar;