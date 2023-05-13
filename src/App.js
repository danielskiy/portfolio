import './App.css';
import { useState } from 'react'
import About from "./components/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import Projects from './components/Projects';
import Resume from './components/Resume';
import ParticlesBackground from './components/ParticlesBackground';
import Skills from './components/Skills';
import Contact from './components/Contact';
import $ from "jquery";
import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function App() {
  const [resumeData,setResumeData] = useState({});
  const [sharedData,setSharedData] = useState({});

  let resumePath = "con_primaryLanguage.json";
  
  function applyPickedLanguage(pickedLanguage, oppositeLangIconId){
    swapCurrentlyActiveLanguage(oppositeLangIconId);
    resumePath =
      pickedLanguage === "english"
        ? `con_primaryLanguage.json`
        : `con_secondaryLanguage.json`;
    loadResumeFromPath(resumePath);
  }

  function swapCurrentlyActiveLanguage(oppositeLangIconId) {
    let pickedLangIconId =
      oppositeLangIconId === "germanFlag"
        ? document.getElementById("ukFlag")
        : document.getElementById("germanFlag");
      let oppositeLangElement = document.getElementById(oppositeLangIconId);
      if (oppositeLangElement) {
        oppositeLangElement.style.filter = "";
        
      }
      if(pickedLangIconId){
        pickedLangIconId.style.filter = "brightness(40%)";
      }
    }
  
  
  useEffect(() => {   //prevents re-rendering
    loadSharedData();
    loadResumeFromPath(resumePath);
    applyPickedLanguage(
      "english",
      "germanFlag"
    );
  }, []);

  useEffect(() => {
    if (sharedData.basic_info) {
      document.title = `${sharedData.basic_info.name}`;
    }
  }, [sharedData]);

  function loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        setResumeData( data );
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  function loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        setSharedData(data);
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }




  return (
    <div>
      <ParticlesBackground/>
      <Navbar
        resumeBasicInfo={resumeData.basic_info}
      />
      <Header sharedData={sharedData.basic_info} />
      <div className="col-md-12 mx-auto center language">
          <div
            onClick={() =>
              applyPickedLanguage(
                "english",
                "germanFlag"
              )
            }
            style={{ display: "inline" }}
          >
            <Icon
              icon="twemoji:flag-united-kingdom"
              className='language-icon'
              id={"ukFlag"}
              style={{ marginRight: '2rem',
                       filter: "brightness(40%)"        
              }}
            ></Icon>
          </div>
          <div
            onClick={() =>
              applyPickedLanguage(
                "german",
                "ukFlag"
              )
            }
            style={{ display: "inline" }}
          >
            <Icon
              icon="twemoji:flag-germany"
              className='language-icon'
              id={"germanFlag"}
            ></Icon>
          </div>
      </div>
      <hr/>
      <AnimationOnScroll
        animateIn="animate__fadeIn"              
      >
        <About 
          resumeBasicInfo={resumeData.basic_info}
          sharedBasicInfo={sharedData.basic_info}
        />
      </AnimationOnScroll>
      <hr/>
      <AnimationOnScroll
        animateIn="animate__fadeIn"           
      >
        <Projects
          resumeProjects={resumeData.projects}
          resumeBasicInfo={resumeData.basic_info}
        />
      </AnimationOnScroll>
      <hr/>
      <AnimationOnScroll
        animateIn="animate__fadeIn"              
      >
        <Resume
          resumeExperience={resumeData.resume}
          resumeBasicInfo={resumeData.basic_info}
        />
      </AnimationOnScroll>
      <hr/>
      <AnimationOnScroll
        animateIn="animate__fadeIn"              
      >
      <Skills
        resumeSkills={resumeData.skills}
        resumeBasicInfo={resumeData.basic_info}
      />
      </AnimationOnScroll>
      <hr/>
      
        <Contact 
          resumeContact={resumeData.contact}
          sharedBasicInfo={sharedData.basic_info}
        />
      
      
        
      
    </div>
  );
}

export default App;
