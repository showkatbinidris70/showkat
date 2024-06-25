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
import Project_image from "../assets/images/project-image.png";
import { FaStarOfLife, FaArrowRight } from "react-icons/fa6";

// swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";

const useAnimateOnVisible = (maxValue, duration = 5000) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const animate = (element) => {
      if (!element.classList.contains("ms-animated")) {
        const maxval = maxValue;
        const html = element.innerHTML;
        element.classList.add("ms-animated");
        let start = null;
        const initialCount = parseInt(element.innerHTML, 10) || 0;

        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const countNum = Math.min(
            initialCount + (maxval - initialCount) * (progress / duration),
            maxval
          );
          element.innerHTML = Math.floor(countNum) + html;
          if (progress < duration) {
            window.requestAnimationFrame(step);
          } else {
            element.innerHTML = maxval + html;
          }
        };

        window.requestAnimationFrame(step);
      }
    };

    const inVisible = (element) => {
      const WindowTop = window.scrollY;
      const WindowBottom = WindowTop + window.innerHeight;
      const ElementTop = element.offsetTop;
      const ElementBottom = ElementTop + element.clientHeight;

      if (ElementBottom <= WindowBottom && ElementTop >= WindowTop) {
        animate(element);
      }
    };

    const handleScroll = () => {
      if (elementRef.current) {
        inVisible(elementRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [maxValue, duration]);

  return elementRef;
};

const AnimateOnScroll = ({ maxValue }) => {
  const elementRef = useAnimateOnVisible(maxValue);

  return (
    <h2 ref={elementRef} data-max={maxValue}>
      0
    </h2>
  );
};

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="features" style={{ padding: "5rem 0rem" }}>
        <div className="container">
          <h2>What I do</h2>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 my-4">
              <div className="common-card">
                <div className="card border-0 card-shadow p-3">
                  <MdOutlineWebhook className="fs-1 m-3" />
                  <div className="card-body">
                    <h5 className="card-title">Custom Website</h5>
                    <p className="card-text">
                      Creates tailored websites to reflect your brand and engage
                      your audience effectively.
                    </p>
                    <div className="cta-btn">
                      <a className="btn py-3 mt-4">
                        Read More <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 my-4">
              <div className="common-card">
                <div className="card border-0 card-shadow p-3">
                  <MdOutlineWebhook className="fs-1 m-3" />
                  <div className="card-body">
                    <h5 className="card-title">Responsive Design</h5>
                    <p className="card-text">
                      Creates tailored websites to reflect your brand and engage
                      your audience effectively.
                    </p>
                    <div className="cta-btn">
                      <a className="btn py-3 mt-4">
                        Read More <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 my-4">
              <div className="common-card">
                <div className="card border-0 card-shadow p-3">
                  <MdOutlineWebhook className="fs-1 m-3" />
                  <div className="card-body">
                    <h5 className="card-title">Branding</h5>
                    <p className="card-text">
                      Creates tailored websites to reflect your brand and engage
                      your audience effectively.
                    </p>
                    <div className="cta-btn">
                      <a className="btn py-3 mt-4">
                        Read More <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects mb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="sticky-top" style={{ paddingTop: "10rem" }}>
                <h2>My Projects</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore eveniet earum debitis ad cum atque architecto nulla
                  accusamus soluta tenetur at, perspiciatis, quia eius minima
                  omnis asperiores possimus officiis voluptate.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-8">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3">
                  <div className="window position-relative">
                    <img src={Project_image} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="d-flex justify-content-between gap-3 p-3 button-bg-color">
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Live View <FaArrowRight />
                          </a>
                        </div>
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Github <FaArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3">
                  <div className="window position-relative">
                    <img src={Project_image} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="d-flex justify-content-between gap-3 p-3 button-bg-color">
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Live View <FaArrowRight />
                          </a>
                        </div>
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Github <FaArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3">
                  <div className="window position-relative">
                    <img src={Project_image} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="d-flex justify-content-between gap-3 p-3 button-bg-color">
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Live View <FaArrowRight />
                          </a>
                        </div>
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Github <FaArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3">
                  <div className="window position-relative">
                    <img src={Project_image} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="d-flex justify-content-between gap-3 p-3 button-bg-color">
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Live View <FaArrowRight />
                          </a>
                        </div>
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Github <FaArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3">
                  <div className="window position-relative">
                    <img src={Project_image} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="d-flex justify-content-between gap-3 p-3 button-bg-color">
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Live View <FaArrowRight />
                          </a>
                        </div>
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Github <FaArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 py-3">
                  <div className="window position-relative">
                    <img src={Project_image} className="img-fluid pt-3 px-3" />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="d-flex justify-content-between gap-3 p-3 button-bg-color">
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Live View <FaArrowRight />
                          </a>
                        </div>
                        <div className="cta-btn">
                          <a className="btn px-4">
                            Github <FaArrowRight />
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

      <section className="testimonial-section">
        <div className="large-container">
          <div className="container">
            <div className="sec-title p-5 mb-5">
              <span className="title">Testimonial</span>
              <h4>What Our core client say ?</h4>
            </div>
            <div className="row" style={{ marginTop: "10rem" }}>
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-10 col-xxl-9">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={1}
                      mousewheel={true}
                      pagination={{
                        clickable: true,
                      }}
                      loop={true}
                      modules={[Mousewheel, Pagination]}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                    >
                      <SwiperSlide className="testimonial">
                        <div className="common-card py-5">
                          <div className="card card-shadow py-4 px-4">
                            <div className="row">
                              <div className="col-ms-6 col-md-6 col-lg-5 d-flex justify-content-start">
                                <div className="blob m-2">
                                  <img
                                    src={slider_image_two}
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <div className=" col-ms-6 col-md-6 col-lg-7">
                                <h2 className="quote">
                                  <RiDoubleQuotesL
                                    style={{
                                      color: "#76a9f8",
                                      fontSize: "4rem",
                                    }}
                                  />
                                </h2>
                                <p className="description pt-3">
                                  Their design process is really unique. They
                                  collaborated with us on our project. The
                                  communication was simple and transparent. They
                                  have a talented team of designer who
                                  understands the insights very clearly and
                                  continues to push their efforts.
                                </p>
                                <div className="pt-2 text-end">
                                  <h5>CEO</h5>
                                  <h6>Mohammad</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="testimonial">
                        <div className="common-card py-5">
                          <div className="card card-shadow py-4 px-4">
                            <div className="row">
                              <div className="col-ms-6 col-md-6 col-lg-5 d-flex justify-content-start">
                                <div className="blob m-2">
                                  <img
                                    src={slider_image_two}
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <div className=" col-ms-6 col-md-6 col-lg-7">
                                <h2 className="quote">
                                  <RiDoubleQuotesL
                                    style={{
                                      color: "#76a9f8",
                                      fontSize: "4rem",
                                    }}
                                  />
                                </h2>
                                <p className="description pt-3">
                                  Their design process is really unique. They
                                  collaborated with us on our project. The
                                  communication was simple and transparent. They
                                  have a talented team of designer who
                                  understands the insights very clearly and
                                  continues to push their efforts.
                                </p>
                                <div className="pt-2 text-end">
                                  <h5>CEO</h5>
                                  <h6>Mohammad</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="testimonial">
                        <div className="common-card py-5">
                          <div className="card card-shadow py-4 px-4">
                            <div className="row">
                              <div className="col-ms-6 col-md-6 col-lg-5 d-flex justify-content-start">
                                <div className="blob m-2">
                                  <img
                                    src={slider_image_two}
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <div className=" col-ms-6 col-md-6 col-lg-7">
                                <h2 className="quote">
                                  <RiDoubleQuotesL
                                    style={{
                                      color: "#76a9f8",
                                      fontSize: "4rem",
                                    }}
                                  />
                                </h2>
                                <p className="description pt-3">
                                  Their design process is really unique. They
                                  collaborated with us on our project. The
                                  communication was simple and transparent. They
                                  have a talented team of designer who
                                  understands the insights very clearly and
                                  continues to push their efforts.
                                </p>
                                <div className="pt-2 text-end">
                                  <h5>CEO</h5>
                                  <h6>Mohammad</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="testimonial">
                        <div className="common-card py-5">
                          <div className="card card-shadow py-4 px-4">
                            <div className="row">
                              <div className="col-ms-6 col-md-6 col-lg-5 d-flex justify-content-start">
                                <div className="blob m-2">
                                  <img
                                    src={slider_image_two}
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <div className=" col-ms-6 col-md-6 col-lg-7">
                                <h2 className="quote">
                                  <RiDoubleQuotesL
                                    style={{
                                      color: "#76a9f8",
                                      fontSize: "4rem",
                                    }}
                                  />
                                </h2>
                                <p className="description pt-3">
                                  Their design process is really unique. They
                                  collaborated with us on our project. The
                                  communication was simple and transparent. They
                                  have a talented team of designer who
                                  understands the insights very clearly and
                                  continues to push their efforts.
                                </p>
                                <div className="pt-2 text-end">
                                  <h5>CEO</h5>
                                  <h6>Mohammad</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="thumb-layer paroller">
            <figure className="image">
              <img
                src="http://t.commonsupport.com/adro/images/resource/user-thumbs.png"
                alt=""
              />
            </figure>
          </div>
        </div>
      </section>

      <div class="logos-slider">
        <div class="logos-slider-container">
          <div className="item">
            <h2>
              {" "}
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height="100"
                width="250"
                alt=""
              />
            </h2>
          </div>
          <div className="item">
            <h2>
              {" "}
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                height="100"
                width="250"
                alt=""
              />
            </h2>
          </div>
          <div className="item">
            <h2>
              {" "}
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height="100"
                width="250"
                alt=""
              />
            </h2>
          </div>
          <div className="item">
            <h2>
              {" "}
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height="100"
                width="250"
                alt=""
              />
            </h2>
          </div>
          <div className="item">
            <h2>
              {" "}
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                height="100"
                width="250"
                alt=""
              />
            </h2>
          </div>
        </div>

        <div class="logos-slider-container">
          <div className="item">
            <h2>
              {" "}
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height="100"
                width="250"
                alt=""
              />
            </h2>
          </div>
          <div className="item">
            <h2>
              {" "}
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                height="100"
                width="250"
                alt=""
              />
            </h2>
          </div>
          <div className="item">
            <h2>
              {" "}
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height="100"
                width="250"
                alt=""
              />
            </h2>
          </div>
          <div className="item">
            <h2>
              {" "}
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height="100"
                width="250"
                alt=""
              />
            </h2>
          </div>
          <div className="item">
            <h2>
              {" "}
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height="100"
                width="250"
                alt=""
              />
            </h2>
          </div>
        </div>
      </div>

      <section className="news-letter-section" style={{ margin: "5rem 0rem" }}>
        <div className="container">
          <div className="common-card py-5">
            <div className="container">
              <div className="row my-5">
                <div className="card border-0 card-shadow py-5 px-5 text-center position-relative">
                  <div
                    className="position-absolute top-0 end-0"
                    style={{
                      width: 80,
                      height: 80,
                      marginRight: "-30px",
                      marginTop: "-30px",
                    }}
                  >
                    <img src={News_letter_img_three} className="img-fluid" />
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-xl-6">
                      <img
                        src={News_letter_img_one}
                        className="img-fluid rounded"
                        alt="Here is an image"
                      />
                    </div>
                    <style
                      dangerouslySetInnerHTML={{
                        __html: "\n\n                    ",
                      }}
                    />
                    <div className="col-sm-6 col-xl-6">
                      <div className="d-flex justify-content-center align-items-center w-100 h-100">
                        <div className="card bg-transparent border-0">
                          <div className="text-center">
                            <img
                              src={News_letter_img_two}
                              className="img-fluid w-25"
                              alt="Here is an image"
                            />
                            <span className="d-block mt-3">
                              Subscribe to our newsletter in order not to miss
                              new arrivals
                              <br /> promotions and discounts of our store
                            </span>
                          </div>
                          <div className="mx-1 mx-xl-5 my-3">
                            <div className="h-search-form">
                              <form action="#">
                                <input
                                  type="search"
                                  name="search"
                                  className="ps-3"
                                  placeholder="Enter Email"
                                />
                                <button>Subscribe</button>
                              </form>
                            </div>
                          </div>
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
    </div>
  );
}
