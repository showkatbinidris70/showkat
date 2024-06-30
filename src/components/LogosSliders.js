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
              <img src={webflowLogo} />
              <img src={cssLogo} />
              <img src={figmaLogo} />
              <img src={JavaScriptLogo} />
              <img src={reactjsLogo} />
              <img src={cssLogo} />
              <img src={wordpressLogo} />
              <img src={webflowLogo} />
              <img src={htmlLogo} />
              <img src={postmanLogo} />
              <img src={tailwindLogo} />
              <img src={webflowLogo} />
            </div>
            <div className="logos-slider-container ps-5 ms-5">
              <img src={htmlLogo} />
              <img src={figmaLogo} />
              <img src={JavaScriptLogo} />
              <img src={cssLogo} />
              <img src={reactjsLogo} />
              <img src={wordpressLogo} />
              <img src={cssLogo} />
              <img src={webflowLogo} />
              <img src={postmanLogo} />
              <img src={tailwindLogo} />
              <img src={htmlLogo} />
              <img src={webflowLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
