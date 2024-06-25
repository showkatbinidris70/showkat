import React from 'react'

export default function BreadCrumb() {
    return (
        <div>
            <section className="breadcrumb w-100">
                <div className="container">
                    <div className="row">
                        <h2 className="title">About Me </h2>
                        <div className="pt-3">
                            <h4 className="btn py-3 px-5">
                                <a className="" href="/">
                                    Home
                                </a>{" "}
                                <span>
                                    <i className="fa-solid fa-angles-right pe-1" />
                                    About Me
                                </span>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
