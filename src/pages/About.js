import { FaStarOfLife, FaArrowRight } from "react-icons/fa6";
import React, { useEffect, useRef } from "react";
import developer_image from "../assets/images/hero-image.png";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonCardComponent from "../components/CommonCardComponent";
//importing typewriter-effect
import Typewriter from "typewriter-effect";

export default function About() {
  useEffect(() => {
    AOS.init({
      once: "true",
    });
  }, []);

  return (
    <div className="about-section">
      <div
        className="container"
        style={{ paddingTop: "6rem" }}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="row">
          <div className="title-name text-center">
            <img src={developer_image} className="img-fluid" />
            <h1 data-aos="fade-left" data-aos-duration="2000">
              Showkat Ali
            </h1>
            <h4 data-aos="fade-right" data-aos-duration="2000">
              <Typewriter
                options={{
                  strings: [' Front-end Developer', ' Webflow Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
          </div>
        </div>
      </div>
      <div
        className="container pt-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-7">
            <h5>
              <i className="fa fa-suitcase" aria-hidden="true" /> Experience
            </h5>
            <table className="table experience">
              <tbody>
                <tr>
                  <th>Job</th>
                  <th>Year</th>
                </tr>
                <tr>
                  <td>
                    Nano Information Technology (Nanosoft) <br />
                    <ul>
                      <li>Ecommerce Side (Ekshop)</li>
                      <li>Education Side (Noipunno)</li>
                      <li>Bangladesh Railway Police Website</li>
                    </ul>
                  </td>
                  <td className="year">
                    2 May 2023 <br />
                    till present
                  </td>
                </tr>
                <tr>
                  <td>
                    Benchmark Software Bangladesh Lit. <br />
                    <ul>
                      <li>School Management</li>
                      <li>Server Maintanece (DBA)</li>
                    </ul>
                  </td>
                  <td className="year">
                    1 December 2021
                    <br />
                    30 April 2023
                  </td>
                </tr>
              </tbody>
            </table>
            <h5>
              <i className="fa fa-graduation-cap" aria-hidden="true" />{" "}
              Education
            </h5>
            <p>
              <strong>IsDB-BISEW IT SCHOLARSHIP PROJECT</strong>
              <br /> Diploma in Engineering (J2EE) – 30.09.2018 – 16.10.2019
            </p>
            <p>
              <strong>BASIS</strong>
              <br /> Mobile Application (Android) Training Program -09.10.2019 –
              11.12.2019
            </p>
            <p>
              <strong>Govt. Titumir College</strong>
              <br /> Masters of Social Sciences (MSS) – 2015 - 2016-
            </p>
            <p>
              <strong>Govt. Titumir College,</strong>
              <br /> Bachelor of Social Sciences (BSS) – 2010 - 2015
            </p>
            <p>
              <strong>Udemy</strong>
              <br /> The Web Developer Bootcamp – 2017
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5">
            <div className="contact">
              <h5>
                <i className="fa fa-home" aria-hidden="true" /> Contact
              </h5>
              <p className="contact">
                Dhaka, Bangladesh <br />
                E-mail: showkatbinidris70@gmail.com
                <br />
                Birth Place: Bangladesh
              </p>
            </div>
            <div className="skills">
              <h5 className="py-3">
                <i className="fa fa-wrench" aria-hidden="true" /> Skills
              </h5>
              <h5>Languages</h5>
              <div className="row">
                <div className="col-md-5 col-xs-6">
                  <ul>
                    <li>Bengali</li>
                    <li>English</li>
                    <li>Sign Language</li>
                  </ul>
                </div>
                <div className="col-md-7 col-xs-6">
                  <ul id="level">
                    <li>
                      <i
                        className="fa fa-square p-1"
                        style={{ color: "#7c75f4" }}
                        aria-hidden="true"
                      />
                      <i
                        className="fa fa-square p-1"
                        style={{ color: "#7c75f4" }}
                        aria-hidden="true"
                      />
                      <i
                        className="fa fa-square p-1"
                        style={{ color: "#7c75f4" }}
                        aria-hidden="true"
                      />
                      <i
                        className="fa fa-square p-1"
                        style={{ color: "#7c75f4" }}
                        aria-hidden="true"
                      />
                    </li>
                    <li>
                      <i
                        className="fa fa-square p-1"
                        style={{ color: "#7c75f4" }}
                        aria-hidden="true"
                      />
                      <i
                        className="fa fa-square p-1"
                        style={{ color: "#7c75f4" }}
                        aria-hidden="true"
                      />
                      <i
                        className="fa fa-square p-1"
                        style={{ color: "#7c75f4" }}
                        aria-hidden="true"
                      />
                      <i
                        className="fa fa-square p-1 text-secondary"
                        aria-hidden="true"
                      />
                    </li>
                    <li>
                      <i
                        className="fa fa-square p-1"
                        style={{ color: "#7c75f4" }}
                        aria-hidden="true"
                      />
                      <i
                        className="fa fa-square p-1"
                        style={{ color: "#7c75f4" }}
                        aria-hidden="true"
                      />
                      <i
                        className="fa fa-square p-1 text-secondary"
                        aria-hidden="true"
                      />
                      <i
                        className="fa fa-square p-1 text-secondary"
                        aria-hidden="true"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <h5>Development</h5>
              <div className="row">
                <div className="col-md-5 col-xs-6" id="development">
                  <ul>
                    <li>HTML</li>
                    <li>CSS3</li>
                    <li>Tailwind</li>
                    <li>Bootstrap</li>
                    <li>Git / Github</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div className="col-md-7 col-xs-6">
                  <ul>
                    <li>JavaScript</li>
                    <li>React JS</li>
                    <li>Webflow</li>
                    <li>jQuery</li>
                    <li>SASS</li>
                    <li>Wordpress</li>
                  </ul>
                </div>
              </div>
              <div className="about">
                <h5>
                  <i className="fa fa-user" aria-hidden="true" /> About Me
                </h5>
                <p>
                  I enjoy learning new skills and I am confident in working with
                  different cultures and countries. I am energetic, outgoing and
                  with excellent capacity to adapt to new challenges. As an
                  active learner and strong team player I’m able to work in any
                  diverse &amp; fast-paced environment and also take full
                  responsibility for my own personal development. At the moment
                  I am a developer autodidact updating my knowledge for my
                  career change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="work-experience py-5 d-none"
        style={{ backgroundColor: "#ddd" }}
      >
        <div className="container">
          <div className="row">
            <h2 className="py-3">Work Experience</h2>
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
                        Maintain assets on network of brand sites utilizing XML,
                        JQuery, XSLT &amp; JavaScript.
                      </li>
                      <li>
                        Prioritize and address web requests to ensure requests
                        are effectively resolved in a timely manner.
                      </li>
                      <li>
                        Collaborate with department staff to ensure user-focused
                        design and launch of interactive web initiatives.
                      </li>
                      <li>
                        Develop, enhance, maintain and support web applications
                        in Interwoven TeamSite CMS to evaluate the
                        effectiveness, usability, and accessibility of Web sites
                        and make recommendations for enhancements to Web sites
                        overall effectiveness.
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
                      Clients (Results Marketing, Red News, Weight Loss Houston)
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
                      Designed, developed and successfully implemented eLearning
                      web sites for new employees within the global team of
                      Vestas Intranet, a research company with 20,000 employees.
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
                        without management supervision. Refreshed the looks and
                        recreated some of the training web sites, since old
                        technology was used and outdated data was implemented.
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
                      sites (IADC, DEA, Careers @ IADC, Drilling Contractor) all
                      running on Joomla CMS.
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

      <div className="mt-5" data-aos="fade-up" data-aos-duration="2000">
        <CommonCardComponent />
      </div>
    </div>
  );
}
