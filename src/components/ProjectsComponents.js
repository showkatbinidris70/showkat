import React, { useEffect, useState } from "react";
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
  const [visible, setVisible] = useState(4);

  const ShowMoreItems = () => {
    setVisible((preValue) => preValue + 4);
  };
  // aos revel animation
  useEffect(() => {
    AOS.init({
      once: "true",
    });
  }, []);
  // All projects json data
  const ProjectsData = [
    {
      title: "Webflow Restaurant Template",
      url: "/images/project-image.png",
      preViewBtn: "Live View",
      gitHubBtn: "Github",
      previewLink: "https://shshetudev.webflow.io/",
      githubLink: "https://shshetudev.webflow.io/"
    },
    {
      title: "Webflow Mosque Template",
      url: "/images/mosque.png",
      preViewBtn: "Live View",
      gitHubBtn: "Github",
      previewLink: "https://showkats-design.webflow.io/",
      githubLink: "https://showkats-design.webflow.io/",
    },
    {
      title: "Webflow Template",
      url: "/images/template_003.png",
      preViewBtn: "Live View",
      gitHubBtn: "Github",
      previewLink: "https://showkats-design.webflow.io/webflow-tutorial-101",
      githubLink: "https://showkats-design.webflow.io/webflow-tutorial-101",
    },
    {
      title: "Webflow Template",
      url: "/images/webflow-2.png",
      preViewBtn: "Live View",
      gitHubBtn: "Github",
      previewLink: "https://my-five-star-site-7568bb.webflow.io/",
      githubLink: "https://my-five-star-site-7568bb.webflow.io/",
    },
    {
      title: "Ek-shop Landing Page",
      url: "/images/landing-page-01.png",
      preViewBtn: "Live View",
      gitHubBtn: "Github",
      previewLink: "https://ekshop-new-design.vercel.app/",
      githubLink: "https://ekshop-new-design.vercel.app/",
    },
    {
      title: "Noipunno App Design",
      url: "/images/noipunno.png",
      preViewBtn: "Live View",
      gitHubBtn: "Github",
      previewLink: "https://project-ca-html.vercel.app/deshboard.html",
      githubLink: "https://project-ca-html.vercel.app/deshboard.html",
    },
    {
      title: "E-commerce Template",
      url: "/images/e-commerce.png",
      preViewBtn: "Live View",
      gitHubBtn: "Github",
      previewLink:
        "https://ozuna-next-js-tailwind-css-animation-framer-motion.vercel.app/",
      githubLink:
        "https://github.com/showkatbinidris70/ozuna-next-js-tailwind-css-animation-framer-motion",
    },
    {
      title: "Tempalte Design",
      url: "/images/template.png",
      preViewBtn: "Live View",
      gitHubBtn: "Github",
      previewLink:
        "https://beauty-products-next-js-row-tailwind-framer-motion.vercel.app/",
      githubLink:
        "https://github.com/showkatbinidris70/beauty-products-next-js-row-tailwind-framer-motion",
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
                  This portfolio showcases my work tailored for clients,
                  featuring responsive designs and interactive elements. Each
                  project demonstrates my dedication to delivering innovative,
                  user-centered solutions that meet specific client needs and
                  enhance their online presence.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8">
              <div className="row">
                {ProjectsData &&
                  ProjectsData.slice(0, visible).map((projectsData, index) => {
                    const {
                      title,
                      preViewBtn,
                      gitHubBtn,
                      url,
                      previewLink,
                      githubLink,
                    } = projectsData;
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
                                    {preViewBtn}{" "}
                                    <FaArrowRight className="d-none col-sm-block" />
                                  </Link>
                                </div>
                                <div className="cta-btn">
                                  <Link
                                    to={githubLink}
                                    target="_blank"
                                    className="btn px-3"
                                  >
                                    {gitHubBtn}{" "}
                                    <FaArrowRight className="d-none col-sm-block" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <div className="cta-btn">
                  <button onClick={ShowMoreItems} className="btn px-3">
                    Show More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
