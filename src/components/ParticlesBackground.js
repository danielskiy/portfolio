import React, {useState, useEffect} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import darkParticlesConfig from "./config/darkParticlesConfig";
import lightParticlesConfig from "./config/lightParticlesConfig";



const ParticlesBackground= () => {

    const [particlesConfig, setParticlesConfig] = useState(darkParticlesConfig);
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
      
      const particlesLoaded = (container) => {
        console.log(container);
      };

      useEffect(() => {
        
        const handleThemeChange = (e) => {
          if (e.target.getAttribute("data-theme") === "light" ) {
            console.log("s")
            setParticlesConfig(lightParticlesConfig);
          } 
          else if(e.target.getAttribute("data-theme") === "dark") {
            setParticlesConfig(darkParticlesConfig);
          }
        };
    
        document.body.addEventListener("data-theme-changed", handleThemeChange);
    
        return () => {
          document.body.removeEventListener("data-theme-changed", handleThemeChange);
        };
      }, []);
    
    return(
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}

            options={particlesConfig}
        />   
    )
}

export default ParticlesBackground