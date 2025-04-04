// import React from 'react'
// import { useParams } from "react-router-dom";
// import { projects } from "../../data/projectsData";
  
// const ProjectDetails = () => {
//     const { id } = useParams();
//     const project = projects.find((p) => p.id === id);
   
//       if (!project) return <h2>Projet non trouvé</h2>;

//   return (
//     <div className="project-details">
//       <h1>{project.title}</h1>
//       <img src={project.imageUrl} alt={project.title} />
//       <p>{project.description}</p>
//       {project.imageUrl && (
//         <img
//           src={project.imageUrl}
//           alt={project.title}
//           />
//         )}
//         <p>{project.description}</p>
//         {project.videoUrl && (
//         <div>
//           <iframe
//             src={project.videoUrl}
//             height="399"
//             width="100%"
//             frameBorder="0"
//             allowFullScreen
//             title="Post LinkedIn"
//           ></iframe>
//           </div>
//       )}
//     </div>
//   );
// }

// export default ProjectDetails





import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../../data/projectsData";
import "./ProjectDetails.css"; 
import { useNavigate } from "react-router-dom";


const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const navigate = useNavigate();

  if (!project) return <h2 className="not-found">🚫 Projet non trouvé</h2>;

  return (
    <div className="project-details-container">
      <button className="btn btn-secondary mb-4" onClick={() => navigate(-1)}>
  ⬅️ Retour
</button>

      <div classNamae="project-header">
        <h1 className="project-title">{project.title}</h1>
      </div>

      <div className="media-section">
        {project.videoUrl ? (
          <div className="video-wrapper">
            <iframe
              src={project.videoUrl}
              frameBorder="0"
              allowFullScreen
              title="Vidéo LinkedIn"
            ></iframe>
          </div>
        ) : (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="project-image"
          />
        )}
      </div>

      <div className="project-description">
        <h2>📝 Description</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;

