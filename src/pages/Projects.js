import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import React, { useEffect, useRef } from "react";
import Hero from "../components/hero/Hero";
import News_letter_img_one from "../assets/images/pexels-goumbik-653429.jpg";
import News_letter_img_two from "../assets/images/undefined - Imgur.png";
import News_letter_img_three from "../assets/images/img-002.png";
import slider_image_two from "../assets/images/slider image 2.png";
import Rectangle3_image from "../assets/images/Rectangle3.png";
import quote_image from "../assets/images/quote.png";
import { MdOutlineWebhook } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaStarOfLife, FaArrowRight } from "react-icons/fa6";
import Project_image from "../assets/images/project-image.png";

export default function Projects() {
  return (
    <div>
      <section class="breadcrumb w-100">
        <div class="container">
          <div class="row">
            <h2 class="title">My Projects </h2>
            <div class="pt-3">
              <h4 class="btn py-3 px-5">
                <a class="" href="/">
                  Home
                </a>{" "}
                <span>
                  <i class="fa-solid fa-angles-right pe-1"></i>
                  My Projects
                </span>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="projects mb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="sticky-top" style={{ paddingTop: "10rem" }}>
                <h2>My Projects</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore eveniet earum debitis ad cum atque architecto nulla
                  accusamus soluta tenetur at, perspiciatis, quia eius minima
                  omnis asperiores possimus officiis voluptate.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-8">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3">
                  <div className="window position-relative">
                    <img src={Project_image} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="d-flex justify-content-between gap-3 p-3 button-bg-color">
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Live View <FaArrowRight />
                          </a>
                        </div>
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Github <FaArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3">
                  <div className="window position-relative">
                    <img src={Project_image} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="d-flex justify-content-between gap-3 p-3 button-bg-color">
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Live View <FaArrowRight />
                          </a>
                        </div>
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Github <FaArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3">
                  <div className="window position-relative">
                    <img src={Project_image} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="d-flex justify-content-between gap-3 p-3 button-bg-color">
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Live View <FaArrowRight />
                          </a>
                        </div>
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Github <FaArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3">
                  <div className="window position-relative">
                    <img src={Project_image} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="d-flex justify-content-between gap-3 p-3 button-bg-color">
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Live View <FaArrowRight />
                          </a>
                        </div>
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Github <FaArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3">
                  <div className="window position-relative">
                    <img src={Project_image} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="d-flex justify-content-between gap-3 p-3 button-bg-color">
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Live View <FaArrowRight />
                          </a>
                        </div>
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Github <FaArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3">
                  <div className="window position-relative">
                    <img src={Project_image} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="d-flex justify-content-between gap-3 p-3 button-bg-color">
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Live View <FaArrowRight />
                          </a>
                        </div>
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Github <FaArrowRight />
                          </a>
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
