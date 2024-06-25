import React from "react";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import { FaStarOfLife, FaArrowRight } from "react-icons/fa6";

export default function Contact() {
  return (
    <div>
      <>
        <section class="breadcrumb w-100">
          <div class="container">
            <div class="row">
              <h2 class="title">Contact Us </h2>
              <div class="pt-3">
                <h4 class="btn py-3 px-5">
                  <a class="" href="/">
                    Home
                  </a>{" "}
                  <span>
                    <i class="fa-solid fa-angles-right"></i>
                    Contact Us
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section className="d-none">
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-center">
                <div className="col-10">
                  <div className="common-card py-5">
                    <div className="container">
                      <div className="row my-5">
                        <div className="card border-0 card-shadow py-5 px-5 text-center">
                          <h3 className="pt-3 px-5">
                            Let's create something amazing together
                          </h3>
                          <div className="cta-btn">
                            <a className="btn py-3 mt-4">
                              showkatbinidris70@gmail.com <FaArrowRight />
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

        <section className="d-none">
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-center">
                <div className="col-10">
                  <div className="common-card py-5">
                    <div className="container">
                      <div className="row my-5">
                        <div className="card border-0 card-shadow py-5 px-5 text-center">
                          sss
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="common-card py-5 d-none">
          <div className="container">
            <div className="row my-5">
              <div className="card border-0 card-shadow py-5 px-5 text-center">
                <div className="asterisk"></div>
                <h2 className="pt-3 px-5">
                  Let's create something amazing together
                </h2>
                <div className="cta-btn">
                  <a className="btn py-3 mt-4">showkatbinidris70@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact_us mt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="contact_inner">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="contact_form_inner">
                        <div className="contact_field">
                          <h3>Contact Us</h3>
                          <p>
                            Feel Free to contact us any time. We will get back
                            to you as soon as we can!
                          </p>
                          <input
                            type="text"
                            className="form-control form-group"
                            placeholder="Name"
                          />
                          <input
                            type="text"
                            className="form-control form-group"
                            placeholder="Email"
                          />
                          <textarea
                            className="form-control form-group"
                            placeholder="Message"
                            defaultValue={""}
                          />
                          <button className="contact_form_submit">Send</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="contact_info_sec mt-4 mt-lg-0">
                        <h4>Contact Info</h4>
                        <div className="d-flex info_single align-items-center">
                          <i className="fas fa-headset" />
                          <span>+91 8009 054294</span>
                        </div>
                        <div className="d-flex info_single align-items-center">
                          <i className="fas fa-envelope-open-text" />
                          <span>info@flightmantra.com</span>
                        </div>
                        <div className="d-flex info_single align-items-center">
                          <i className="fas fa-map-marked-alt" />
                          <span>
                            1000+ Travel partners and 65+ Service city across
                            India, USA, Canada &amp; UAE
                          </span>
                        </div>
                      </div>
                      <div className="right_contact_social_icon d-flex align-items-end mt-4">
                        <ul className="social_item_inner d-flex list-unstyled">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-square" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="map_sec py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="map_inner">
                  <h4>Find Us on Google Map</h4>
                  <div className="map_bind">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187882077!2d90.33728802520291!3d23.78097572833174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1717089016735!5m2!1sen!2sbd"
                      width="100%"
                      height={450}
                      frameBorder={0}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
