import React from "react";
import hero_img_01 from "../../assets/images/slider image 1.png";
import { Link } from "react-router-dom";
import hero_image from "../../assets/images/hero-image.png";
import {
  FaStarOfLife,
  FaXTwitter,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
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
                <h1 className="my-4">
                  I am a <br />
                  Frontend Developer
                </h1>
                <p className="desc">
                  Transforming concepts into tangible digital solutions, Magoz
                  excels in crafting innovative web solutions that bring ideas
                  to life effectively and efficiently.
                </p>
                <div className="d-flex gap-3 my-4">
                  <div className="cta-btn">
                    <a className="btn py-3 mt-4 px-2 px-md-4">
                      Book a free call <FaArrowRight />
                    </a>
                  </div>
                  <div className="cta-btn">
                    <a className="btn py-3 mt-4 px-4 px-md-5">
                      View Work <FaArrowRight />
                    </a>
                  </div>
                </div>
                <div style={{ marginTop: "8rem" }}>
                  <p>Used by top-tech companies</p>
                  <div className="d-flex gap-3 py-2">
                    <Link
                      to="/contact"
                      className="social-icons d-flex justify-content-center align-items-center"
                    >
                      <FaFacebookF />
                    </Link>
                    <Link
                      to="/contact"
                      className="social-icons d-flex justify-content-center align-items-center"
                    >
                      <FaXTwitter />
                    </Link>
                    <Link
                      to="/contact"
                      className="social-icons d-flex justify-content-center align-items-center"
                    >
                      <FaLinkedinIn />
                    </Link>

                    <Link
                      to="/contact"
                      className="social-icons d-flex justify-content-center align-items-center"
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
              <div className="d-flex align-items-end w-100 justify-content-center">
                <img src={hero_image} className="img-fluid  bottom-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
