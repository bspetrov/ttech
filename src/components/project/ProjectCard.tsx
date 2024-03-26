import React from "react";
import { ProjectItem } from "./Project1";
import { Link } from "react-router-dom";

interface Props {
  project: ProjectItem;
  i: number;
}

const ProjectCard: React.FC<Props> = ({ project, i }: Props) => {

  return (
    <div
      className={`single-project-item bg-cover ${
        i === 0 ? "project-bg" : `project-bg-${i + 1}`
      }`}
    >
      <div className="project-inner">
        <Link to={`/project/${project.id}`} className="project-icon">
          <i className="las la-arrow-right"></i>
        </Link>
        <div className="hover-info">
          <h4>{project.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
