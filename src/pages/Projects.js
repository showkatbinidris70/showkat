import React, { useEffect } from "react";
import ProjectsComponents from "../components/ProjectsComponents";
import CommonCardComponent from "../components/CommonCardComponent";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      once: "true",
    });
  }, []);
  return (
    <div>
      <section class="breadcrumb w-100">
        <div class="container">
          <div class="row">
            <h2 class="title">My Projects </h2>
            <div class="pt-3 d-none">
              <h4 class="btn py-3 px-5">
                <a class="" href="/">
                  Home
                </a>{" "}
                <span>
                  <i class="fa-solid fa-angles-right pe-1"></i>
                  My Projects
                </span>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" style={{ marginTop: "5rem" }}>
        <ProjectsComponents />
      </section>
      <section data-aos="fade-up" data-aos-duration="2000">
        <CommonCardComponent />
      </section>
    </div>
  );
}
