import React, { useEffect } from "react";
import { Link } from "react-router-dom";
/*import hero_image from "../../assets/images/developer-image.png";*/
import hero_image from "../../assets/images/developer-image.webp";
import { FaArrowRight, FaXTwitter } from "react-icons/fa6";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

export default function Hero() {
  // aos revel animation
  useEffect(() => {
    AOS.init({
      once: "true",
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-7 order-1 d-flex align-items-center hero-100vh">
              <div className="pb-3">
                <h1
                  className="my-4 pt-3"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  I am a <br />
                  <Typewriter
                    options={{
                      strings: ["Frontend Developer", "Webflow Expert"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <p
                  className="desc"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  I'm a Frontend Developer and Webflow expert with 4+ years of
                  experience in designing and developing professional,
                  SEO-optimized, and fully responsive Webflow websites. I
                  specialize in converting Figma, XD, or Photoshop designs into
                  stunning Webflow websites that are fast, modern, and tailored
                  to your business needs.
                </p>
                <div
                  className="d-flex gap-3 my-4"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <div className="cta-btn">
                    <Link
                      to="/contact"
                      className="btn py-3 mt-4 px-1 px-sm-2 px-md-4 d-flex gap-1"
                    >
                      Book a free call{" "}
                      <FaArrowRight className="d-none d-sm-block" />
                    </Link>
                  </div>
                  <div className="cta-btn">
                    <Link
                      to="/projects"
                      className="btn py-3 mt-4 px-3 px-sm-2 px-md-5 d-flex gap-1"
                    >
                      View Work <FaArrowRight className="d-none d-sm-block" />
                    </Link>
                  </div>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <p>Used by top-tech companies</p>
                  <div className="d-flex gap-2 pt-3">
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

            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5 order-lg-1 d-flex align-items-center align-items-xl-end hero-100vh">
              <div className="d-flex align-items-end w-100 justify-content-center">
                <img
                  src={hero_image}
                  className="img-fluid text-center"
                  alt="Hero image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
