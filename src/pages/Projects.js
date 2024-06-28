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
      <section className="projects">
        <ProjectsComponents />
      </section>
      <section data-aos="fade-up" data-aos-duration="2000">
        <CommonCardComponent />
      </section>
    </div>
  );
}
