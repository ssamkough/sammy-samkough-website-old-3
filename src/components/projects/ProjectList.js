import React from "react";
import Project from "./Project";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return <Project project={project} key={project.title} />;
        })}
    </div>
  );
};

export default ProjectList;
