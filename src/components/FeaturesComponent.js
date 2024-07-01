import React from 'react'
import { Link } from "react-router-dom";
import { MdOutlineWebhook } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
export default function FeaturesComponent() {
    return (
        <div>
            {/* Features Section */}
            <section
                data-aos="fade-up"
                data-aos-duration="2000"
                className="features"
            >
                <div className="container">
                    <h2 className='pt-5'>What I do</h2>
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <div
                                className="common-card"
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                <div className="card border-0 card-shadow p-1 p-md-2 p-lg-3">
                                    <MdOutlineWebhook className="fs-1 m-3" />
                                    <div className="card-body">
                                        <h6 className="card-title">Custom Website</h6>
                                        <p className="card-text">
                                            Creates tailored websites to reflect your brand and engage
                                            your audience effectively.
                                        </p>
                                        <div className="cta-btn">
                                            <Link
                                                to="/about"
                                                className="btn py-3 mt-4"
                                                data-aos="zoom-in"
                                                data-aos-duration="2000"
                                            >
                                                Know More <FaArrowRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <div className="common-card">
                                <div className="card border-0 card-shadow p-1 p-md-2 p-lg-3">
                                    <MdOutlineWebhook className="fs-1 m-3" />
                                    <div className="card-body">
                                        <h6 className="card-title">Responsive Design</h6>
                                        <p className="card-text">
                                            Creates tailored websites to reflect your brand and engage
                                            your audience effectively.
                                        </p>
                                        <div className="cta-btn">
                                            <Link
                                                to="/about"
                                                className="btn py-3 mt-4"
                                                data-aos="zoom-in"
                                                data-aos-duration="2000"
                                            >
                                                Know More <FaArrowRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <div
                                className="common-card"
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                <div className="card border-0 card-shadow p-1 p-md-2 p-lg-3">
                                    <MdOutlineWebhook className="fs-1 m-3" />
                                    <div className="card-body">
                                        <h6 className="card-title">Webflow Development</h6>
                                        <p className="card-text">
                                            Creates tailored websites to reflect your brand and engage
                                            your audience effectively.
                                        </p>
                                        <div className="cta-btn">
                                            <Link
                                                to="/about"
                                                className="btn py-3 mt-4"
                                                data-aos="zoom-in"
                                                data-aos-duration="2000"
                                            >
                                                Know More <FaArrowRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
