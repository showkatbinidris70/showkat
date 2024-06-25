import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import { FaStarOfLife, FaArrowRight } from "react-icons/fa6";
import Project_image from "../assets/images/project-image.png";
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
// import Project_image from '../assets/images/project-image.png'

export default function About() {
  return (
    <div>
      <>
        <BreadCrumb />

        <div
          className="work-experience py-5"
          style={{ backgroundColor: "#ddd" }}
        >
          <div className="container">
            <div className="row">
              <h2 className="fs-1 py-3">Work Experience</h2>
              <ul className="timeline">
                <li>
                  <div className="timeline-badge">
                    <a>
                      <i className="fa fa-circle" id="" />
                    </a>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Front-End Web Developer - SCI</h4>
                    </div>
                    <div className="timeline-body">
                      <ul style={{ padding: "0 40px" }}>
                        <li>
                          Maintain assets on network of brand sites utilizing
                          XML, JQuery, XSLT &amp; JavaScript.
                        </li>
                        <li>
                          Prioritize and address web requests to ensure requests
                          are effectively resolved in a timely manner.
                        </li>
                        <li>
                          Collaborate with department staff to ensure
                          user-focused design and launch of interactive web
                          initiatives.
                        </li>
                        <li>
                          Develop, enhance, maintain and support web
                          applications in Interwoven TeamSite CMS to evaluate
                          the effectiveness, usability, and accessibility of Web
                          sites and make recommendations for enhancements to Web
                          sites overall effectiveness.
                        </li>
                      </ul>
                    </div>
                    <div className="timeline-footer">
                      <p className="text-right">OCTOBER 2014 - PRESENT</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-badge">
                    <a>
                      <i className="fa fa-circle invert" id="" />
                    </a>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Freelance Web Developer - Bekov Creative Studio</h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Clients (Results Marketing, Red News, Weight Loss
                        Houston)
                      </p>
                    </div>
                    <div className="timeline-footer">
                      <p className="text-right">MARCH 2012 - SEPTEMBER 2014</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge">
                    <a>
                      <i className="fa fa-circle" id="" />
                    </a>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Web Developer - Vestas</h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Designed, developed and successfully implemented
                        eLearning web sites for new employees within the global
                        team of Vestas Intranet, a research company with 20,000
                        employees.
                      </p>
                      <ul style={{ padding: "0 40px" }}>
                        <li>
                          Worked with SharePoint Platform to create Team site
                          user-friendly applications creating an infrastructure
                          for ease in corporate project communications across
                          departments.
                        </li>
                        <li>
                          Maintained and continually enhanced intranet web sites
                          without management supervision. Refreshed the looks
                          and recreated some of the training web sites, since
                          old technology was used and outdated data was
                          implemented.
                        </li>
                        <li>
                          Wrote and published weekly newsletters action updates.
                        </li>
                      </ul>
                    </div>
                    <div className="timeline-footer">
                      <p className="text-right">JANUARY 2010 - FEBRUARY 2012</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-badge">
                    <a>
                      <i className="fa fa-circle invert" id="" />
                    </a>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Front-End Web Developer - UI/UX Designer - IADC</h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Responsible for development and support of corporate web
                        sites (IADC, DEA, Careers @ IADC, Drilling Contractor)
                        all running on Joomla CMS.
                      </p>
                      <ul style={{ padding: "0 40px" }}>
                        <li>
                          Creating quarterly circulation reports based on data
                          mining and analysis
                        </li>
                        <li>
                          Responsible for subscription for Drilling Contractor
                        </li>
                        <li>
                          Creating newsletters for Drilling Contractor
                          internationally.
                        </li>
                        <li>
                          Creating Drill Bits newsletters for mobile viewers.
                        </li>
                        <li>
                          Integration of Subscription form into a web site via
                          MYSQL + PHP within Joomla.
                        </li>
                      </ul>
                    </div>
                    <div className="timeline-footer">
                      <p className="text-right">JUNE 2006 - DECEMBER 2009</p>
                    </div>
                  </div>
                </li>
                <li className="clearfix no-float" />
              </ul>
            </div>
          </div>
        </div>

        <div className="container pt-5">
          <div className="row">
            <div class="logos-slider">
              <div class="logos-slider-container">
                <div className="item">
                  <h2>
                    <FaStarOfLife className="px-2" />
                  </h2>
                </div>
                <div className="item">
                  <h2>
                    Get In Touch <FaStarOfLife className="px-2" />
                  </h2>
                </div>
                <div className="item">
                  <h2>
                    Get In Touch <FaStarOfLife className="px-2" />
                  </h2>
                </div>
                <div className="item">
                  <h2>
                    Get In Touch <FaStarOfLife className="px-2" />
                  </h2>
                </div>
                <div className="item">
                  <h2>
                    Get In Touch <FaStarOfLife className="px-2" />
                  </h2>
                </div>
              </div>

              <div class="logos-slider-container">
                <div className="item">
                  <h2>
                    Get In Touch <FaStarOfLife className="px-2" />
                  </h2>
                </div>
                <div className="item">
                  <h2>
                    Get In Touch <FaStarOfLife className="px-2" />
                  </h2>
                </div>
                <div className="item">
                  <h2>
                    Get In Touch <FaStarOfLife className="px-2" />
                  </h2>
                </div>
                <div className="item">
                  <h2>
                    Get In Touch <FaStarOfLife className="px-2" />
                  </h2>
                </div>
                <div className="item">
                  <h2>
                    Get In Touch <FaStarOfLife className="px-2" />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="common-card py-5">
          <div className="container">
            <div className="row my-5">
              <div className="card border-0 card-shadow py-5 px-5 text-center">
                <div className="asterisk">
                  <FaStarOfLife className="text-center asterisk-icon" />
                </div>
                <h2 className="pt-3 px-5">
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
      </>
    </div>
  );
}
