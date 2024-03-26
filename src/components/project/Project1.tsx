import React from "react";
import ProjectCard from "./ProjectCard";
import useGetData from "../../hooks/useGetData";
interface Props {
  type: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
}

interface RequestObject {
  projects: ProjectItem[];
}
const Project1: React.FC<Props> = ({ type }: { type: boolean }) => {
  const routePath = location.pathname.split('/')
  const currentPath = routePath[2]
  const request: RequestObject = useGetData({}, currentPath === 'woodwork' ? "/data/woodwork-projects.json" : "/data/metalwork-projects.json");
  const projects = request.projects;

  return (
    <React.Fragment>
      <div className={`project-area ${type ? "section-padding" : ""}`}>
        {type ? (
          <div className="container">
            <div className="row">
              {projects?.length > 0 &&
                projects.slice(0, 4).map((project, idx) => (
                  <div key={project.id} className="col-lg-3 col-md-6 col-12">
                    <ProjectCard project={project} i={idx} />
                  </div>
                ))}
            </div>
            <div className="row mt-40">
              {projects?.length > 0 &&
                projects.slice(4).map((project, idx) => (
                  <div key={project.id} className="col-lg-3 col-md-6 col-12">
                    <ProjectCard project={project} i={idx} />
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <div className="row gx-0">
              {projects?.length > 0 &&
                projects.slice(0, 4).map((project, idx) => (
                  <div key={project.id} className="col-lg-3 col-md-6 col-12">
                    <ProjectCard project={project} i={idx} />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Project1;
