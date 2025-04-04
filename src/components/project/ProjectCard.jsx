// import React from 'react';

// function ProjectCard({ project }) {
//   return (
//     <div className="project-card">
//       <img src={project.imageUrl} alt={project.title} />
//       <h3>{project.title}</h3>
//       <p>{project.description}</p>
//       <a href={project.link}>Voir le projet</a>
//     </div>
//   );
// }

// export default ProjectCard;






import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* <img src={project.imageUrl} alt={project.title} /> */}
      {project.videoUrl ? (
        <div className="video-preview" style={{ position: "relative", paddingBottom: "100%", height: 0, overflow: "hidden", borderRadius: "8px" }}>
          <iframe
            src={project.videoUrl}
            frameBorder="0"
            allowFullScreen
            title={`Vidéo du projet ${project.title}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
      ) : (
        <img src={project.imageUrl} alt={project.title} />
      )}
      <h3>{project.title}</h3>
      <p>{project.description.slice(0, 100)}...</p>
      <Link to={`/projects/${project.id}`} className="details-button">
        Voir le projet
      </Link>
    </div>
  );
}

export default ProjectCard;
