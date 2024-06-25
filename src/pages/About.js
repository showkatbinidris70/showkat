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
import developer_image from '../assets/images/hero-image.png'
// import Project_image from '../assets/images/project-image.png'

export default function About() {
  return (
    <div className="about-section">
      <div className="container" style={{ paddingTop: "6rem" }}>
        <div className="row">
          <div className="title-name text-center">
            <img src={developer_image} className="img-fluid" />
            <h1>Showkat Ali</h1>
            <h4>Front-end Developer</h4>
          </div>
        </div>
      </div>
      <div className="container pt-5">
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
                    The Three Crowns (London/UK) waitress <br />
                    <ul>
                      <li>
                        One step back in order to be able to have more time for
                        studies.
                      </li>
                    </ul>
                  </td>
                  <td className="year">2017 till present</td>
                </tr>
                <tr>
                  <td>
                    Sweet Thursday Pizzeria (London/UK) assistant manager <br />
                    <ul>
                      <li>
                        Business management - paper work, banking and payments
                      </li>
                      <li>Recruitment, evaluation and supervision of staff</li>
                      <li>Customer service: sales, reservations or any issue</li>
                      <li>Stock organization</li>
                    </ul>
                  </td>
                  <td className="year">2015 till September 2017</td>
                </tr>
                <tr>
                  <td>
                    Marettimo Residence (Egadi Project - Italy) assistant manager
                    <br />
                    <ul>
                      <li>
                        Welcoming customer, presenting the structure and apartments.
                      </li>
                      <li>Managing the staff and organization.</li>
                      <li>Resolution of small general issues</li>
                    </ul>
                  </td>
                  <td className="year">Summer 2014</td>
                </tr>
                <tr>
                  <td>
                    Project Manager - Fashion
                    <br />
                    <ul>
                      <li>
                        Organization of the procedures of planning and monitoring
                        the photoshoot.
                      </li>
                      <li>
                        Responsible for casting models, photographers, make-up
                        artists, etc.
                      </li>
                      <li>
                        Supervision of the logistic and everything needed to carry
                        out the campaign like: finding location, accommodation,
                        catering.
                      </li>
                    </ul>
                  </td>
                  <td className="year">2010 - 2014</td>
                </tr>
              </tbody>
            </table>
            <h5>
              <i className="fa fa-graduation-cap" aria-hidden="true" /> Education
            </h5>
            <p>
              <strong>Elatt - Professional Training &amp; Coaching </strong>
              <br /> HTML, CSS &amp; Wordpress – Nov 2017 till present
            </p>
            <p>
              <strong>Udacity - Google Challenge</strong>
              <br /> HTML, CSS, JavaScript &amp; jQuery – Nov 2017 till present
            </p>
            <p>
              <strong>SuperHi</strong>
              <br /> HTML, CSS, JavaScript &amp; jQuery – 2017
            </p>
            <p>
              <strong>Codecademy PRO Intensive</strong>
              <br /> HTML, CSS, JavaScript &amp; Bootstrap – 2017
            </p>
            <p>
              <strong>Udemy</strong>
              <br /> The Web Developer Bootcamp – 2017
            </p>
            <p>
              <strong>Graphic Design (48hrs) / Elite Training School</strong>
              <br /> (Bal. Camboriú – SC / Brazil) – 2011
            </p>
            <p>
              <strong>
                Bachelor in Industrial Design / UNIVALI – University Of Itajaí
              </strong>
              <br /> (Bal. Camboriú – SC / Brazil) – 2006/1
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
                <br />Birth Place: Bangladesh
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
                      <i className="fa fa-square p-1" style={{ color: "#7c75f4" }} aria-hidden="true" />
                      <i className="fa fa-square p-1" style={{ color: "#7c75f4" }} aria-hidden="true" />
                      <i className="fa fa-square p-1" style={{ color: "#7c75f4" }} aria-hidden="true" />
                      <i className="fa fa-square p-1" style={{ color: "#7c75f4" }} aria-hidden="true" />
                    </li>
                    <li>
                      <i className="fa fa-square p-1" style={{ color: "#7c75f4" }} aria-hidden="true" />
                      <i className="fa fa-square p-1" style={{ color: "#7c75f4" }} aria-hidden="true" />
                      <i className="fa fa-square p-1" style={{ color: "#7c75f4" }} aria-hidden="true" />
                      <i className="fa fa-square p-1 text-secondary" aria-hidden="true" />
                    </li>
                    <li>
                      <i className="fa fa-square p-1" style={{ color: "#7c75f4" }} aria-hidden="true" />
                      <i className="fa fa-square p-1" style={{ color: "#7c75f4" }} aria-hidden="true" />
                      <i className="fa fa-square p-1 text-secondary" aria-hidden="true" />
                      <i className="fa fa-square p-1 text-secondary" aria-hidden="true" />
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
                  with excellent capacity to adapt to new challenges. As an active
                  learner and strong team player I’m able to work in any diverse
                  &amp; fast-paced environment and also take full responsibility for
                  my own personal development. At the moment I am a developer
                  autodidact updating my knowledge for my career change.
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

      <section className="common-card">
        <div className="container">
          <div className="row my-5">
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
