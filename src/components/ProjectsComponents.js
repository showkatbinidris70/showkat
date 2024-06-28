import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Project_image from "../assets/images/project-image.png";
import webflow_Project_image_02 from "../assets/images/webflow-2.png";
import landing_page_01 from "../assets/images/landing-page-01.png";
import Noipunno_app_design from "../assets/images/noipunno.png";
import ecommerce_template from "../assets/images/e-commerce.png";
import template from "../assets/images/template.png";
import { FaArrowRight } from "react-icons/fa6";
// swiper slider
import "swiper/css";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";
//importing typewriter-effect
import Typewriter from "typewriter-effect";

export default function ProjectsComponents() {
  useEffect(() => {
    AOS.init({
      once: "true",
    });
  }, []);
  return (
    <div>
      <section data-aos="fade-up" data-aos-duration="2000" className="projects">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="sticky-top">
                <h2>
                  My <br />
                  <Typewriter
                    options={{
                      strings: ['Projects', 'Works'],
                      autoStart: true,
                      loop: true,
                    }}
                  />

                </h2>
                <p className="py-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore eveniet earum debitis ad cum atque architecto nulla
                  accusamus soluta tenetur at, perspiciatis, quia eius minima
                  omnis asperiores possimus officiis voluptate.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3 py-lg-0">
                  <div
                    className="window position-relative"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <img src={Project_image} className="img-fluid pt-3 px-3" alt="project image" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="button-bg-color">
                        <h5 className="ps-3 pt-3">Webflow Project</h5>
                        <div className="d-flex justify-content-between gap-3 px-3 pb-3 pt-2">
                          <div className="cta-btn">
                            <Link
                              to="https://restaurant-979076.webflow.io/"
                              className="btn px-2"
                            >
                              Live View <FaArrowRight />
                            </Link>
                          </div>
                          <div className="cta-btn">
                            <a className="btn px-3">
                              Github <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3 py-lg-0">
                  <div
                    className="window position-relative"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <img
                      src={webflow_Project_image_02}
                      className="img-fluid pt-3 px-3" alt="project image"
                    />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="button-bg-color">
                        <h5 className="ps-3 pt-3">Webflow Project</h5>
                        <div className="d-flex justify-content-between gap-3 px-3 pb-3 pt-2">
                          <div className="cta-btn">
                            <Link
                              to="https://my-five-star-site-7568bb.webflow.io/"
                              className="btn px-2"
                            >
                              Live View <FaArrowRight />
                            </Link>
                          </div>
                          <div className="cta-btn">
                            <a className="btn px-3">
                              Github <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3 py-lg-0">
                  <div
                    className="window position-relative"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <img
                      src={landing_page_01}
                      className="img-fluid pt-3 px-3" alt="project image"
                    />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="button-bg-color">
                        <h5 className="ps-3 pt-3">Landing Page</h5>
                        <div className="d-flex justify-content-between gap-3 px-3 pb-3 pt-2">
                          <div className="cta-btn">
                            <Link
                              to="https://ekshop-new-design.vercel.app/"
                              className="btn px-2"
                            >
                              Live View <FaArrowRight />
                            </Link>
                          </div>
                          <div className="cta-btn">
                            <a className="btn px-3">
                              Github <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3 py-lg-0">
                  <div
                    className="window position-relative"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <img
                      src={Noipunno_app_design}
                      className="img-fluid pt-3 px-3" alt="project image"
                    />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="button-bg-color">
                        <h5 className="ps-3 pt-3">Noipunno App Design</h5>
                        <div className="d-flex justify-content-between gap-3 px-3 pb-3 pt-2">
                          <div className="cta-btn">
                            <Link
                              to="https://project-ca-html.vercel.app/deshboard.html"
                              className="btn px-2"
                            >
                              Live View <FaArrowRight />
                            </Link>
                          </div>
                          <div className="cta-btn">
                            <a className="btn px-3">
                              Github <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3 py-lg-0">
                  <div
                    className="window position-relative"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <img
                      src={ecommerce_template}
                      className="img-fluid pt-3 px-3" alt="project image"
                    />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="button-bg-color">
                        <h5 className="ps-3 pt-3">E-commerce Template</h5>
                        <div className="d-flex justify-content-between gap-3 px-3 pb-3 pt-2">
                          <div className="cta-btn">
                            <Link
                              to="https://ozuna-next-js-tailwind-css-animation-framer-motion.vercel.app/"
                              className="btn px-2"
                            >
                              Live View <FaArrowRight />
                            </Link>
                          </div>
                          <div className="cta-btn">
                            <Link
                              to="https://github.com/showkatbinidris70/ozuna-next-js-tailwind-css-animation-framer-motion-2"
                              className="btn px-2"
                            >
                              Live View <FaArrowRight />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3 py-lg-0">
                  <div
                    className="window position-relative"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <img src={template} className="img-fluid pt-3 px-3" alt="project image" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="button-bg-color">
                        <h5 className="ps-3 pt-3">Tempalte Design</h5>
                        <div className="d-flex justify-content-between gap-3 px-3 pb-3 pt-2">
                          <div className="cta-btn">
                            <Link
                              to="https://ministry-of-education-html.vercel.app/"
                              className="btn px-2"
                            >
                              Live View <FaArrowRight />
                            </Link>
                          </div>
                          <div className="cta-btn">
                            <Link
                              to="https://github.com/showkatbinidris70/ministry-of-education-html.git"
                              className="btn px-2"
                            >
                              Live View <FaArrowRight />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
