import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import { Link } from "react-router-dom";
import {
  FaStarOfLife,
  FaXTwitter,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaSkype } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_pvssrek", "template_yu2tizv", form.current, {
        publicKey: "ajgTLMNQF9GbF_JYn",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div>
      <>
        <section className="common-card" style={{ paddingTop: "5rem" }}>
          <div className="container">
            <div className="d-flex justify-content-center text-center py-5">
              <div className="col-sm-12 col-md-12 col-lg-10 col-xl-6">
                <h2>Get in touch today to schedule your call</h2>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-10">
                <div className="card border-0 card-shadow py-5 px-2 px-md-3 px-lg-5">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
                      <div className="">
                        <div className="mb-5">
                          <h5>Contact information</h5>
                          <p>
                            This vintage store is carefully curated antstore is
                            decorated as if it home.
                          </p>
                        </div>
                        <div className="d-flex gap-3 align-items-center my-4">
                          <Link
                            to="/contact"
                            className="social-icons d-flex justify-content-center align-items-center"
                          >
                            <MdEmail className="fs-1" />
                          </Link>
                          <div>
                            <p>Chat to project</p>
                            <p>showkatbinidris70@gmail.com</p>
                          </div>
                        </div>
                        <div className="d-flex gap-3 align-items-center my-4">
                          <Link
                            to="/contact"
                            className="social-icons d-flex justify-content-center align-items-center"
                          >
                            <FaWhatsapp className="fs-1" />
                          </Link>
                          <div>
                            <p>Whats App Chat</p>
                            <p>+8801572133260</p>
                          </div>
                        </div>
                        <div className="d-flex gap-3 align-items-center my-4">
                          <Link
                            to="/contact"
                            className="social-icons d-flex justify-content-center align-items-center"
                          >
                            <FaSkype className="fs-1" />
                          </Link>
                          <div>
                            <p>Skype</p>
                            <p>live:.cid.6ecfd213bf45a363</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-8">
                      <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control bg-transparent"
                            id="name"
                            placeholder="Enter your name"
                            aria-describedby="name"
                            name="name"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label bg-transparent"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control bg-transparent"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter your email"
                            name="email"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="subject" className="form-label">
                            Subject
                          </label>
                          <input
                            type="text"
                            className="form-control bg-transparent"
                            id="subject"
                            aria-describedby="subject"
                            placeholder="Enter your subject"
                            name="subject"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="message" className="form-label">
                            Message
                          </label>
                          <div className="form-floating">
                            <textarea
                              className="form-control bg-transparent"
                              placeholder="Leave a comment here"
                              id="message"
                              style={{ height: 100 }}
                              defaultValue={""}
                              name="message"
                            />
                            <label htmlFor="floatingTextarea2">
                              Comments here
                            </label>
                          </div>
                        </div>
                        <div className="cta-btn">
                          <button type="submit" class="btn px-3">
                            Send Message <FaArrowRight />
                          </button>
                        </div>
                      </form>
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
