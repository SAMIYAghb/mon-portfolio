import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import { projects } from "../../data/projectsData";

function Projects() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    
  };

  return (
    <section className="projects" id='projects'>
      <h2>Mes Projets</h2>
      <div className="projects-carousel">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard key={project.id}  project={project} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
