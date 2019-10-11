import React from "react";
import ProjectSummary from "./ProjectSummary";

export default function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {/* only map if we have a project*/}
      {projects &&
        projects.map(project => {
          return <ProjectSummary project={project} key={project.id} />;
        })}
    </div>
  );
}
