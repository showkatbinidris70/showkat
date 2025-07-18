import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-5">
                <h4>About Me</h4>
                <p>
                  I enjoy learning new skills and working with diverse cultures.
                  Energetic and adaptable, I thrive in fast-paced environments.
                  As a self-taught developer, I'm committed to personal growth
                  and career change.
                </p>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 py-3 py-lg-0">
                <h4>Information</h4>
                <ul className="address1">
                  <li className="d-flex align-items-center">
                    <i className="fa fa-envelope pe-2 text-secondary" />
                    <p className="text-dark">showkatwebdev@gmail.com</p>
                  </li>
                  <li className="d-flex align-items-center">
                    <i
                      className="fa fa-mobile pe-2 text-secondary"
                      aria-hidden="true"
                    />
                  </li>
                  <li className="d-flex align-items-center">
                    <i
                      className="fa fa-mobile pe-2 text-secondary"
                      aria-hidden="true"
                    />
                    <p className="text-dark">
                      +8801572133260 (What's App & Telegram)
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 py-3 py-lg-0">
                <h4>Follow Me</h4>
                <div className="d-flex gap-2 py-2">
                  <Link
                    to="https://www.facebook.com/salibinidris/"
                    target="_blank"
                    className="social-icons d-flex justify-content-center align-items-center"
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/showkatwebdev"
                    target="_blank"
                    className="social-icons d-flex justify-content-center align-items-center"
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    to="https://github.com/showkatbinidris70"
                    target="_blank"
                    className="social-icons d-flex justify-content-center align-items-center"
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    to="https://www.instagram.com/showkatwebdev"
                    target="_blank"
                    className="social-icons d-flex justify-content-center align-items-center"
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  >
                    <FaInstagram />
                  </Link>
                   <Link
                    to="https://x.com/Showkatwebdev"
                    target="_blank"
                    className="social-icons d-flex justify-content-center align-items-center"
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  >
                    <FaXTwitter />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <hr className="p-0 m-0" />
          <div className="container">
            <div className="row py-3">
              <div className="col-12 col-sm-6">
                <p className="copyright text-uppercase">Copyright © 2025</p>
              </div>
              <div className="col-12 col-sm-6 d-flex justify-content-md-end justify-content-start">
                <ul>
                  <li>
                    <Link to="/" className="text-secondary fs-6">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-secondary fs-6">
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-secondary fs-6">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
