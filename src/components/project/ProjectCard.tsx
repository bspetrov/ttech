import React from "react";
import { ProjectItem } from "./Project1";
import { Link } from "react-router-dom";

interface Props {
  project: ProjectItem;
  i: number;
}

const ProjectCard: React.FC<Props> = ({ project }: Props) => {

  let bgPic = '';

  if (project.title === "Машинни елементи") {
    bgPic = 'project-bg'
  } else if (project.title === "Специални") {
    bgPic = "project-bg-3"
  } else if (project.title === "Авто елементи") {
    bgPic = "project-bg-2"
  } else if (project.title == "Други" && project.id == 'metalwork-others') {
    bgPic = "project-bg-4"
  } else if (project.title == "Други" && project.id == 'woodwork-others') {
    bgPic = "project-bg-8"
  } else if (project.title == "Плотове за маси") {
    bgPic = "project-bg-5"
  } else if (project.title == "Крака за маси") {
    bgPic = "project-bg-6"
  } else if (project.title == "Готови маси") {
    bgPic = "project-bg-7"
  }


  return (
    <div
      className={`single-project-item bg-cover ${bgPic}`}
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
