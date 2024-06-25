import React from "react";
import {
  FaStarOfLife,
  FaXTwitter,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 py-3 py-md-0">
                <h4>About Me</h4>
                <p>
                  Lorem Ipsum ist einfach Dummy-Text der Druck- und
                  Satzindustrie. Lorem Ipsum war der Standard der Branche Lorem
                  Ipsum ist einfach Dummy-Text der Druck- und Satzindustrie.
                  Lorem Ipsum war der Standard der Branche
                </p>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 py-3 py-md-0">
                <h4>Information</h4>
                <ul className="address1">
                  <li>
                    <i className="fa fa-envelope pe-2 text-secondary" />
                    <a href="mailto:#">showkatbinidris70@gmail.com</a>
                  </li>
                  <li>
                    <i
                      className="fa fa-mobile pe-2 text-secondary"
                      aria-hidden="true"
                    />
                    <a href="tel:12 34 56 78 90">+8801921839596</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 py-3 py-md-0">
                <h4>Follow Me</h4>
                <div className="d-flex gap-3 py-2">
                  <Link
                    to="/contact"
                    className="social-icons d-flex justify-content-center align-items-center"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    to="/contact"
                    className="social-icons d-flex justify-content-center align-items-center"
                  >
                    <FaXTwitter />
                  </Link>
                  <Link
                    to="/contact"
                    className="social-icons d-flex justify-content-center align-items-center"
                  >
                    <FaLinkedinIn />
                  </Link>

                  <Link
                    to="/contact"
                    className="social-icons d-flex justify-content-center align-items-center"
                  >
                    <FaInstagram />
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
                <p className="copyright text-uppercase">Copyright © 2024</p>
              </div>
              <div className="col-12 col-sm-6 d-flex justify-content-md-end justify-content-start">
                <ul>
                  <li>
                    <Link to="/contact" className="text-secondary fs-6">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-secondary fs-6">
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
