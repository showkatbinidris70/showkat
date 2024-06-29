import { FaStarOfLife, FaArrowRight } from "react-icons/fa6";
import React, { useEffect, useRef } from "react";
import developer_image from "../assets/images/Untitled_design__1_-removebg-preview.png";
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
      <section className="container pt-5">
        <div className="row">
          <div className="text-center py-5">
            <div className="mx-auto developer-image">
              <img src={developer_image} class="rounded-circle img-fluid img-sm-50 img-md-75 img-lg-100" alt="Developer's image" />
            </div>
            <h1 data-aos="fade-left" data-aos-duration="2000" className="">
              Showkat Ali
            </h1>
            <h4 data-aos="fade-right" data-aos-duration="2000" className="">
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
        <div className="row" data-aos="fade-up"
          data-aos-duration="2000">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-7 col-xxl-7">
            <h5 className="py-2">
              <i className="fa fa-suitcase" aria-hidden="true" /> Experience
            </h5>
            <table className="table">
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
            <h5 className="py-2">
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
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5 col-xxl-5">
            <div className="contact">
              <h5 className="py-2">
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
              <h5 className="py-2">Languages</h5>
              <div className="row">
                <div className="col-md-5 col-xs-6">
                  <ul>
                    <li>Bengali</li>
                    <li>English</li>
                    <li>Sign Language</li>
                  </ul>
                </div>
                <div className="col-md-7 col-xs-6">
                  <ul>
                    <li>
                      <i
                        className="fa fa-square p-1 lang-mark"
                        aria-hidden="true"
                      />
                      <i
                        className="fa fa-square p-1 lang-mark" aria-hidden="true"
                      />
                      <i
                        className="fa fa-square p-1 lang-mark" aria-hidden="true"
                      />
                      <i
                        className="fa fa-square p-1 lang-mark" aria-hidden="true"
                      />
                    </li>
                    <li>
                      <i
                        className="fa fa-square p-1 lang-mark" aria-hidden="true"
                      />
                      <i
                        className="fa fa-square p-1 lang-mark" aria-hidden="true"
                      />
                      <i
                        className="fa fa-square p-1 lang-mark" aria-hidden="true"
                      />
                      <i
                        className="fa fa-square p-1 text-secondary"
                        aria-hidden="true"
                      />
                    </li>
                    <li>
                      <i
                        className="fa fa-square p-1 lang-mark" aria-hidden="true"
                      />
                      <i
                        className="fa fa-square p-1 lang-mark" aria-hidden="true"
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
              <h5 className="py-2">
                <i className="fa fa-wrench" aria-hidden="true" /> Skills
              </h5>
              <div className="row">
                <div className="" id="development">
                  <div className="d-flex align-content-start flex-wrap">
                    <div className="cta-btn m-2">
                      <div className="btn py-2 px-3 text-nowrap">
                        HTML
                      </div>
                    </div>
                    <div className="cta-btn m-2">
                      <div className="btn py-2 px-3 text-nowrap">
                        CSS3
                      </div>
                    </div>
                    <div className="cta-btn m-2">
                      <div className="btn py-2 px-3 text-nowrap">
                        Tailwind
                      </div>
                    </div>
                    <div className="cta-btn m-2">
                      <div className="btn py-2 px-3 text-nowrap">
                        Bootstrap
                      </div>
                    </div>
                    <div className="cta-btn m-2">
                      <div className="btn py-2 px-3 text-nowrap">
                        Git / Github
                      </div>
                    </div>
                    <div className="cta-btn m-2">
                      <div className="btn py-2 px-3 text-nowrap">
                        JavaScript
                      </div>
                    </div>
                    <div className="cta-btn m-2">
                      <div className="btn py-2 px-3 text-nowrap">
                        React JS
                      </div>
                    </div>
                    <div className="cta-btn m-2">
                      <div className="btn py-2 px-3 text-nowrap">
                        Webflow
                      </div>
                    </div>
                    <div className="cta-btn m-2">
                      <div className="btn py-2 px-3 text-nowrap">
                        SASS
                      </div>
                    </div>
                    <div className="cta-btn m-2">
                      <div className="btn py-2 px-3 text-nowrap">
                        Wordpress
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about">
                <h5 className="py-2">
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
      </section>

      <div className="mt-5" data-aos="fade-up" data-aos-duration="2000">
        <CommonCardComponent />
      </div>
    </div>
  );
}
