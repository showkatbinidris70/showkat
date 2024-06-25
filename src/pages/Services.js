import React from "react";
import slider_image_one from "../assets/images/slider image 1.png";
// swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Services() {
  return (
    <div>
      <section class="breadcrumb w-100">
        <div class="container">
          <div class="row">
            <h2 class="title">Our Services </h2>
            <div class="pt-3">
              <h4 class="btn py-3 px-5">
                <a class="" href="/">
                  Home
                </a>{" "}
                <span>
                  <i class="fa-solid fa-angles-right"></i>
                  Our Services
                </span>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section" style={{ padding: "5rem 0rem" }}>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="pb-4 top-title">
              <p className="fs-4 fw-normal text-warning text-center">
                Services
              </p>
              <h2 className="">We will provide awesome services</h2>
            </div>
          </div>
          <div className="row">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                575: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              <SwiperSlide>
                <div className="card w-100 h-100 p-4 border-0 services-section-card">
                  <div className="">
                    <img
                      src={slider_image_one}
                      className="img-fluid"
                      alt="Here is an image"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Web &amp; Mobile Development</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia beatae nemo unde distinctio nostrum earum dolore
                      cupiditate sed rerum nam voluptas, suscipit ratione soluta
                      explicabo, iure, ullam maiores numquam? Earum.
                    </p>
                    <a href="#">
                      <button className="animated-button">
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-2"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                        <span className="text">Read More</span>
                        <span className="circle" />
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-100 h-100 p-4 border-0 services-section-card">
                  <div className="">
                    <img
                      src={slider_image_one}
                      className="img-fluid"
                      alt="Here is an image"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Web &amp; Mobile Development</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia beatae nemo unde distinctio nostrum earum dolore
                      cupiditate sed rerum nam voluptas, suscipit ratione soluta
                      explicabo, iure, ullam maiores numquam? Earum.
                    </p>
                    <a href="#">
                      <button className="animated-button">
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-2"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                        <span className="text">Read More</span>
                        <span className="circle" />
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-100 h-100 p-4 border-0 services-section-card">
                  <div className="">
                    <img
                      src={slider_image_one}
                      className="img-fluid"
                      alt="Here is an image"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Web &amp; Mobile Development</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia beatae nemo unde distinctio nostrum earum dolore
                      cupiditate sed rerum nam voluptas, suscipit ratione soluta
                      explicabo, iure, ullam maiores numquam? Earum.
                    </p>
                    <a href="#">
                      <button className="animated-button">
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-2"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                        <span className="text">Read More</span>
                        <span className="circle" />
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-100 h-100 p-4 border-0 services-section-card">
                  <div className="">
                    <img
                      src={slider_image_one}
                      className="img-fluid"
                      alt="Here is an image"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Web &amp; Mobile Development</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia beatae nemo unde distinctio nostrum earum dolore
                      cupiditate sed rerum nam voluptas, suscipit ratione soluta
                      explicabo, iure, ullam maiores numquam? Earum.
                    </p>
                    <a href="#">
                      <button className="animated-button">
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-2"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                        <span className="text">Read More</span>
                        <span className="circle" />
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="row d-none">
            <div className="col-sm-6 col-md-6 col-xxl-4 py-3 py-xl-0">
              <div className="card w-100 h-100 p-4 border-0 services-section-card">
                <div className="">
                  <img
                    src="./assets/images/slider image 1.png"
                    className="img-fluid"
                    alt="Here is an image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Web &amp; Mobile Development</h5>
                  <p className="card-text text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia beatae nemo unde distinctio nostrum earum dolore
                    cupiditate sed rerum nam voluptas, suscipit ratione soluta
                    explicabo, iure, ullam maiores numquam? Earum.
                  </p>
                  <a href="#">
                    <button className="animated-button">
                      <svg
                        viewBox="0 0 24 24"
                        className="arr-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                      <span className="text">Read More</span>
                      <span className="circle" />
                      <svg
                        viewBox="0 0 24 24"
                        className="arr-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xxl-4 py-3 py-xl-0">
              <div className="card w-100 h-100 p-4 border-0 services-section-card">
                <div className="">
                  <img
                    src="./assets/images/slider image 2.png"
                    className="img-fluid"
                    alt="Here is an image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Web &amp; Mobile Development</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia beatae nemo unde distinctio nostrum earum dolore
                    cupiditate sed rerum nam voluptas, suscipit ratione soluta
                    explicabo, iure, ullam maiores numquam? Earum.
                  </p>
                  <a href="#">
                    <button className="animated-button">
                      <svg
                        viewBox="0 0 24 24"
                        className="arr-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                      <span className="text">Read More</span>
                      <span className="circle" />
                      <svg
                        viewBox="0 0 24 24"
                        className="arr-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xxl-4 py-3 py-xl-0">
              <div className="card w-100 h-100 p-4 border-0 services-section-card">
                <div className="">
                  <img
                    src="./assets/images/slider image 3.png"
                    className="img-fluid"
                    alt="Here is an image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Web &amp; Mobile Development</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia beatae nemo unde distinctio nostrum earum dolore
                    cupiditate sed rerum nam voluptas, suscipit ratione soluta
                    explicabo, iure, ullam maiores numquam? Earum.
                  </p>
                  <a href="#">
                    <button className="animated-button">
                      <svg
                        viewBox="0 0 24 24"
                        className="arr-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                      <span className="text">Read More</span>
                      <span className="circle" />
                      <svg
                        viewBox="0 0 24 24"
                        className="arr-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="case-studies-section"
        style={{ backgroundColor: "#01f0f415", padding: "5rem 0rem" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="sticky-top">
                <div className="case-study">
                  <h2 className="fs-1 fw-bold">Case Study</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Temporibus modi deleniti ipsum rem illum doloribus labore
                    atque, cum nemo ipsa beatae dolores voluptatibus?
                    Dignissimos ex, a provident sapiente impedit non.
                  </p>
                  <a
                    href="#"
                    className="animated-button text-dark py-5 py-md-1"
                  >
                    Read More
                    <svg
                      className="pxl-svg-line"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1000 407"
                    >
                      <path d="M972.93,86.54S671-39.25,337.37,29.6c-80.16,16.54-161,42.55-230.72,86.3-41.44,26-92,65.5-97.81,118.12-6,54.11,45,90.17,88,110.52,70.87,33.53,149.4,43.59,226.73,49.23,125.73,9.17,252.43,1.74,377.33-14.07,51.43-6.5,102.76-14.71,152.76-28.37,61-16.66,156.08-57.51,137.63-137.73C979.5,162.21,933.23,134.78,887,117.4,814.24,90,734.45,79.35,657.54,71.31c-7-.73-13.94-1.42-20.93-2"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <section className="section-background parallax position-relative">
                <a
                  href=""
                  className="position-absolute bottom-0 end-0 text-white animated-button m-4"
                >
                  Read More
                  <svg
                    className="pxl-svg-line"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 407"
                  >
                    <path d="M972.93,86.54S671-39.25,337.37,29.6c-80.16,16.54-161,42.55-230.72,86.3-41.44,26-92,65.5-97.81,118.12-6,54.11,45,90.17,88,110.52,70.87,33.53,149.4,43.59,226.73,49.23,125.73,9.17,252.43,1.74,377.33-14.07,51.43-6.5,102.76-14.71,152.76-28.37,61-16.66,156.08-57.51,137.63-137.73C979.5,162.21,933.23,134.78,887,117.4,814.24,90,734.45,79.35,657.54,71.31c-7-.73-13.94-1.42-20.93-2"></path>
                  </svg>
                </a>
              </section>
              <section className="section-background parallax1 position-relative">
                <a
                  href=""
                  className="position-absolute bottom-0 end-0 text-white animated-button m-4"
                >
                  Read More
                  <svg
                    className="pxl-svg-line"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 407"
                  >
                    <path d="M972.93,86.54S671-39.25,337.37,29.6c-80.16,16.54-161,42.55-230.72,86.3-41.44,26-92,65.5-97.81,118.12-6,54.11,45,90.17,88,110.52,70.87,33.53,149.4,43.59,226.73,49.23,125.73,9.17,252.43,1.74,377.33-14.07,51.43-6.5,102.76-14.71,152.76-28.37,61-16.66,156.08-57.51,137.63-137.73C979.5,162.21,933.23,134.78,887,117.4,814.24,90,734.45,79.35,657.54,71.31c-7-.73-13.94-1.42-20.93-2"></path>
                  </svg>
                </a>
              </section>
              <section className="section-background parallax2 position-relative">
                <a
                  href=""
                  className="position-absolute bottom-0 end-0 text-white animated-button m-4"
                >
                  Read More
                  <svg
                    className="pxl-svg-line"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 407"
                  >
                    <path d="M972.93,86.54S671-39.25,337.37,29.6c-80.16,16.54-161,42.55-230.72,86.3-41.44,26-92,65.5-97.81,118.12-6,54.11,45,90.17,88,110.52,70.87,33.53,149.4,43.59,226.73,49.23,125.73,9.17,252.43,1.74,377.33-14.07,51.43-6.5,102.76-14.71,152.76-28.37,61-16.66,156.08-57.51,137.63-137.73C979.5,162.21,933.23,134.78,887,117.4,814.24,90,734.45,79.35,657.54,71.31c-7-.73-13.94-1.42-20.93-2"></path>
                  </svg>
                </a>
              </section>
              <section className="section-background parallax3 position-relative">
                <a
                  href=""
                  className="position-absolute bottom-0 end-0 text-white animated-button m-4"
                >
                  Read More
                  <svg
                    className="pxl-svg-line"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 407"
                  >
                    <path d="M972.93,86.54S671-39.25,337.37,29.6c-80.16,16.54-161,42.55-230.72,86.3-41.44,26-92,65.5-97.81,118.12-6,54.11,45,90.17,88,110.52,70.87,33.53,149.4,43.59,226.73,49.23,125.73,9.17,252.43,1.74,377.33-14.07,51.43-6.5,102.76-14.71,152.76-28.37,61-16.66,156.08-57.51,137.63-137.73C979.5,162.21,933.23,134.78,887,117.4,814.24,90,734.45,79.35,657.54,71.31c-7-.73-13.94-1.42-20.93-2"></path>
                  </svg>
                </a>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
