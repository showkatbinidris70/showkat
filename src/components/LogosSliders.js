import React from "react";
import htmlLogo from "../assets/images/icons/html-5.png";
import cssLogo from "../assets/images/icons/css-3.png";
import figmaLogo from "../assets/images/icons/figma.png";
import JavaScriptLogo from "../assets/images/icons/java-script.png";
import reactjsLogo from "../assets/images/icons/reactjs.png";
import wordpressLogo from "../assets/images/icons/wordpress.png";
import webflowLogo from "../assets/images/icons/webflow.png";
import postmanLogo from "../assets/images/icons/postman.png";
import tailwindLogo from "../assets/images/icons/tailwind.png";

export default function LogosSliders() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="logos-slider">
            <div className="logos-slider-container">
              <img src={webflowLogo} className="img-fluid" alt="webflow logo" />
              <img src={cssLogo} className="img-fluid" alt="css logo" />
              <img src={figmaLogo} className="img-fluid" alt="figma logo" />
              <img
                src={JavaScriptLogo}
                className="img-fluid"
                alt="javascript logo"
              />
              <img
                src={reactjsLogo}
                className="img-fluid"
                alt="react js logo"
              />
              <img src={cssLogo} className="img-fluid" alt="css logo" />
              <img
                src={wordpressLogo}
                className="img-fluid"
                alt="wordpress logo"
              />
              <img src={webflowLogo} className="img-fluid" alt="webflow logo" />
              <img src={htmlLogo} className="img-fluid" alt="html logo" />
              <img src={postmanLogo} className="img-fluid" alt="postman logo" />
              <img
                src={tailwindLogo}
                className="img-fluid"
                alt="tailwind logo"
              />
              <img src={webflowLogo} className="img-fluid" alt="webflow logo" />
            </div>
            <div className="logos-slider-container ps-5 ms-5">
              <img src={htmlLogo} className="img-fluid" alt="html logo" />
              <img src={figmaLogo} className="img-fluid" alt="figma logo" />
              <img
                src={JavaScriptLogo}
                className="img-fluid"
                alt="javascript logo"
              />
              <img src={cssLogo} className="img-fluid" alt="css logo" />
              <img
                src={reactjsLogo}
                className="img-fluid"
                alt="react js logo"
              />
              <img
                src={wordpressLogo}
                className="img-fluid"
                alt="wordpress logo"
              />
              <img src={cssLogo} className="img-fluid" alt="css logo" />
              <img src={webflowLogo} className="img-fluid" alt="webflow logo" />
              <img src={postmanLogo} className="img-fluid" alt="postman logo" />
              <img
                src={tailwindLogo}
                className="img-fluid"
                alt="tailwind logo"
              />
              <img src={htmlLogo} className="img-fluid" alt="html logo" />
              <img src={webflowLogo} className="img-fluid" alt="webflow logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
