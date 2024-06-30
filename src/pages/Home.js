import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/hero/Hero";
import News_letter_img_one from "../assets/images/pexels-goumbik-653429.jpg";
import News_letter_img_two from "../assets/images/undefined - Imgur.png";
import News_letter_img_three from "../assets/images/img-002.png";
import slider_image_two from "../assets/images/slider image 2.png";
import { MdOutlineWebhook } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
// swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "../components/ProjectsComponents";
import FeaturesComponent from "../components/FeaturesComponent";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: "true",
    });
  }, []);

  return (
    <div>
      <Hero />

      <FeaturesComponent />

      <Projects />

      <section
        data-aos="fade-up"
        data-aos-duration="2000"
        className="testimonial-section pt-5"
      >
        <div className="large-container">
          <div className="container">
            <div className="sec-title">
              <span className="title">Testimonial</span>
              <h3>What Our core client say ?</h3>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-10 col-xxl-9">
                <div
                  className="swiper pt-5"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
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
                                    alt="news letter image"
                                  />
                                </div>
                              </div>
                              <div className=" col-ms-6 col-md-6 col-lg-7">
                                <h2 className="quote">
                                  <RiDoubleQuotesL
                                    className="double-quote"
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
                                    alt="news letter image"
                                  />
                                </div>
                              </div>
                              <div className=" col-ms-6 col-md-6 col-lg-7">
                                <h2 className="quote">
                                  <RiDoubleQuotesL
                                    className="double-quote"
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
                                    alt="news letter image"
                                  />
                                </div>
                              </div>
                              <div className=" col-ms-6 col-md-6 col-lg-7">
                                <h2 className="quote">
                                  <RiDoubleQuotesL
                                    className="double-quote"
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
                                    alt="news letter image"
                                  />
                                </div>
                              </div>
                              <div className=" col-ms-6 col-md-6 col-lg-7">
                                <h2 className="quote">
                                  <RiDoubleQuotesL
                                    className="double-quote"
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
                alt="news letter image"
              />
            </figure>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        data-aos-duration="2000"
        className="news-letter-section"
      >
        <div className="container">
          <div className="common-card py-5">
            <div className="container">
              <div className="row">
                <div className="card border-0 card-shadow py-5 px-2 px-lg-5 text-center position-relative">
                  <div
                    className="position-absolute top-0 end-0 d-none d-md-block "
                    data-aos="flip-right"
                    data-aos-duration="2000"
                  >
                    <img src={News_letter_img_three} className="img-fluid sun-light-sticker" alt="news letter image" />
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-xl-6">
                      <img
                        src={News_letter_img_one}
                        className="img-fluid rounded"
                        alt="news letter image"
                        data-aos="flip-right"
                        data-aos-duration="2000"

                      />
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-6">
                      <div
                        className="d-flex justify-content-center align-items-center w-100 h-100"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                      >
                        <div className="card bg-transparent border-0">
                          <div className="text-center">
                            <img
                              src={News_letter_img_two}
                              className="img-fluid w-25"
                              alt="news letter image"
                            />
                            <span className="d-block mt-3 desc">
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
