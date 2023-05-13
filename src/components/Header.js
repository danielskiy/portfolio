import React, { useState } from "react";
import Typical from "react-typical";
import { Icon } from "@iconify/react";
import Switch from "react-switch";


function Header(props){
  let titles=[];
  let name;

  const[checked, setChecked] = useState(false);

  function onThemeSwitchChange(checked){
    setChecked(checked);
    setTheme();
  }

  function setTheme(){
    let dataThemeAttribute = "data-theme";
    let body = document.body;
    let newTheme = body.getAttribute(dataThemeAttribute) === "light" ? "dark" : "light";
    body.setAttribute(dataThemeAttribute, newTheme);
    document.body.dispatchEvent(new CustomEvent("data-theme-changed"));

  }
  
  const navbarStyle = getComputedStyle(document.documentElement);
  const navbarHeight = parseInt(navbarStyle.getPropertyValue("--navbar-height"));

  if (props.sharedData) {
    name = props.sharedData.name;
    titles = props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
  }

  

  const HeaderTitleTypeAnimation = React.memo( () => {                                                       //prevents re-rendering
    return <Typical className="title-styles" steps={titles} loop={Infinity} />
  });                                                                                   

  return(                                                                                                    //language div is 160px high
    <header id="home" style={{ height: window.innerHeight - 160, display: 'block' }}> 
      <div className="row center" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <Icon icon="la:laptop-code" style={{fontSize: "1000%"}}/>
              
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={checked}
                onChange={onThemeSwitchChange}
                offColor="#aaaaaa"
                onColor="#343a40"
                className="react-switch mt-3"
                width={90}
                height={40}
                uncheckedIcon={
                  <Icon
                    icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  />
                }
                checkedIcon={
                  
                  <Icon
                    icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  />
                }
                id="icon-switch"
              />
            </div>
          </div>
      </div>
    </header>
  );

}
export default Header;