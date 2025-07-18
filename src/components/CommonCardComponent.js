import React from "react";
import { FaStarOfLife, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function CommonCardComponent() {
  // Navigate to Gmail inbox (or any other URL)
  const handleButtonClick = () => {
    window.open("https://mail.google.com/", "_blank");
  };
  return (
    <div>
      <section className="">
        <div className="container">
          <div className="row px-1">
            <div className="card border-0 card-shadow py-5 px-0 px-md-3 px-lg-5 text-center">
              <div className="asterisk d-none d-md-block">
                <FaStarOfLife className="text-center asterisk-icon" />
              </div>
              <h2 className="pt-0 pt-md-3 px-1 px-md-3 px-lg-5">
                Let's create something amazing together
              </h2>
              <div className="cta-btn">
                <a
                  className="btn py-3 mt-4 px-1 px-md-3"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  href="https://mail.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleButtonClick}
                >
                  showkatwebdev@gmail.com <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
