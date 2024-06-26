import React, { useEffect, useRef } from "react";
import { FaStarOfLife, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function CommonCardComponent() {
  return (
    <div>
      <section className="common-card" style={{ marginBottom: "5rem" }}>
        <div className="container">
          <div className="row px-1">
            <div className="card border-0 card-shadow py-4 px-0 px-md-3 px-lg-5 text-center">
              <div className="asterisk d-none d-md-block">
                <FaStarOfLife className="text-center asterisk-icon" />
              </div>
              <h2 className="pt-0 pt-md-3 px-0 px-md-3 px-lg-5">
                Let's create something amazing together
              </h2>
              <div className="cta-btn">
                <Link
                  className="btn py-3 mt-4 px-1 px-md-0"
                  to="/contact"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  showkatbinidris70@gmail.com <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
