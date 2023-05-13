import React from "react";
import { Icon } from "@iconify/react";


function Contact(props) {
    let networks;
    if (props.resumeContact && props.sharedBasicInfo) {
      networks= props.sharedBasicInfo.social.map(function (network){
        return(
            <span key={network.name} className="">
                <a href={network.url} target="_blank" rel="noopener noreferrer">
                    <Icon icon={network.class} height="50px" color="black"/>
                </a>
            </span>
        );
        
      })

    }
  
    return (
      <section id="contact">
        <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>
          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {props.sharedBasicInfo
                  ? props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
        </footer>
      </section>
    );
  }
  
  export default Contact;