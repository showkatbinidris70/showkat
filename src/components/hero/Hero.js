import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import hero_image from "../../assets/images/hero-image.png";
import {
  FaStarOfLife,
  FaXTwitter,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      once: "true",
    });
  }, []);
  return (
    <div>
      <section className="home-hero">
        <div className="container">
          <div className="row">
            <div
              className="col-sm-12 col-md-12 col-lg-6 col-xl-7 order-1 d-flex align-items-center"
              style={{ height: "100vh" }}
            >
              <div>
                <div className="d-flex gap-2 hero-slogan align-items-center d-none">
                  {" "}
                  <FaStarOfLife style={{ color: "#76a9f8" }} />{" "}
                  <p>A SLEEK DESINGED TEMPLATE</p>
                </div>
                <h1
                  className="my-4 pt-3"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  I am a <br />
                  Frontend Developer
                </h1>
                <p className="desc">
                  Transforming concepts into tangible digital solutions, Magoz
                  excels in crafting innovative web solutions that bring ideas
                  to life effectively and efficiently.
                </p>
                <div
                  className="d-flex gap-3 my-4"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <div className="cta-btn">
                    <Link to="/contact" className="btn py-3 mt-4 px-2 px-md-4">
                      Book a free call <FaArrowRight />
                    </Link>
                  </div>
                  <div className="cta-btn">
                    <Link to="/projects" className="btn py-3 mt-4 px-4 px-md-5">
                      View Work <FaArrowRight />
                    </Link>
                  </div>
                </div>
                <div style={{ marginTop: "8rem" }}>
                  <p>Used by top-tech companies</p>
                  <div className="d-flex gap-3 py-2">
                    <Link
                      to="/contact"
                      className="social-icons d-flex justify-content-center align-items-center"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <FaFacebookF />
                    </Link>
                    <Link
                      to="/contact"
                      className="social-icons d-flex justify-content-center align-items-center"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <FaXTwitter />
                    </Link>
                    <Link
                      to="/contact"
                      className="social-icons d-flex justify-content-center align-items-center"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <FaLinkedinIn />
                    </Link>

                    <Link
                      to="/contact"
                      className="social-icons d-flex justify-content-center align-items-center"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <FaInstagram />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-6 col-xl-5 order-lg-1 d-flex align-items-end"
              style={{ height: "100vh" }}
            >
              <div
                className="d-flex align-items-end w-100 justify-content-center"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <img src={hero_image} className="img-fluid  bottom-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
