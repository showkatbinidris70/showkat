import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
  const ProjectsData = [
    {
      title: "Webflow Template",
      url: "/images/project-image.png",
      preViewBtn: "Live View",
      gitHubBtn: "Github",
      previewLink: "https://restaurant-979076.webflow.io/",
      githubLink: "https://github.com/showkatbinidris70/ekshop-new-design"
    },
    {
      title: "Webflow Template",
      url: "/images/webflow-2.png",
      preViewBtn: "Live View",
      gitHubBtn: "Github",
      previewLink: "https://restaurant-979076.webflow.io/",
      githubLink: "https://github.com/showkatbinidris70/ekshop-new-design"
    },
    {
      title: "Landing Page",
      url: "/images/landing-page-01.png",
      preViewBtn: "Live View",
      gitHubBtn: "Github",
      previewLink: "https://restaurant-979076.webflow.io/",
      githubLink: "https://github.com/showkatbinidris70/ekshop-new-design"
    },
    {
      title: "Noipunno App Design",
      url: "/images/noipunno.png",
      preViewBtn: "Live View",
      gitHubBtn: "Github",
      previewLink: "https://restaurant-979076.webflow.io/",
      githubLink: "https://github.com/showkatbinidris70/ekshop-new-design"
    },
    {
      title: "E-commerce Template",
      url: "/images/e-commerce.png",
      preViewBtn: "Live View",
      gitHubBtn: "Github",
      previewLink: "https://restaurant-979076.webflow.io/",
      githubLink: "https://github.com/showkatbinidris70/ekshop-new-design"
    },
    {
      title: "Tempalte Design",
      url: "/images/template.png",
      preViewBtn: "Live View",
      gitHubBtn: "Github",
      previewLink: "https://restaurant-979076.webflow.io/",
      githubLink: "https://github.com/showkatbinidris70/ekshop-new-design"
    },
  ];
  return (
    <div>
      <section data-aos="fade-up" data-aos-duration="2000" className="projects">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="sticky-top pt-5">
                <h2 className="pt-5">
                  My <br />
                  <Typewriter
                    options={{
                      strings: ["Projects", "Works"],
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
                {ProjectsData.map((projectsData, index) => {
                  const { title, preViewBtn, gitHubBtn, url, previewLink, githubLink } = projectsData;
                  return (
                    <div
                      className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3 py-lg-0 my-3"
                      key={index}
                    >
                      <div
                        className="window position-relative"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                      >
                        <img
                          src={url}
                          className="img-fluid pt-3 px-3"
                          alt="project image"
                        />

                        <div className="position-absolute bottom-0 w-100">
                          <div className="button-bg-color">
                            <h6 className="ps-3 pt-3">{title}</h6>
                            <div className="d-flex justify-content-between gap-3 px-3 pb-3 pt-2">
                              <div className="cta-btn">
                                <Link
                                  to={previewLink}
                                  target="_blank"
                                  className="btn px-2"
                                >
                                  {preViewBtn} <FaArrowRight className="d-none col-sm-block"/>
                                </Link>
                              </div>
                              <div className="cta-btn">
                                <Link
                                  to={githubLink}
                                  target="_blank"
                                  className="btn px-3"
                                >
                                  {gitHubBtn} <FaArrowRight className="d-none col-sm-block"/>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
