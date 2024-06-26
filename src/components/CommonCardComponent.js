import React, { useEffect, useRef } from "react";
import { FaStarOfLife, FaArrowRight } from "react-icons/fa6";

export default function CommonCardComponent() {
  return (
    <div>
      <section className="common-card" style={{ marginBottom: "5rem" }}>
        <div className="container">
          <div className="row">
            <div className="card border-0 card-shadow py-5 px-0 px-md-3 px-lg-5 text-center">
              <div className="asterisk">
                <FaStarOfLife className="text-center asterisk-icon" />
              </div>
              <h2 className="pt-3 px-0 px-md-3 px-lg-5">
                Let's create something amazing together
              </h2>
              <div className="cta-btn">
                <a className="btn py-3 mt-4">
                  showkatbinidris70@gmail.com <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
