import React from "react";
import ProjectCard from "./ProjectCard";

interface Props {
  type: boolean;
  projectType: string;
}

export interface ProjectItem {
  id: string;
  title: string;
}

const MainProject: React.FC<Props> = ({
  type,
  projectType,
}: {
  type: boolean;
  projectType: string;
}) => {
  const woodworkProjects = [
    {
      id: "table-tops",
      title: "Плотове за маси",
    },
    {
      id: "table-legs",
      title: "Крака за маси",
    },
    {
      id: "finished-tables",
      title: "Готови Маси",
    },
    {
      id: "chairs",
      title: "Столове",
    },
    {
      id: "others",
      title: "Други",
    },
  ];

  const metalworkProjects = [
    {
      id: "m1",
      title: "Машинни елементи",
    },
    {
      id: "m2",
      title: "Други",
    },
  ];

  const projects =
    projectType === "woodwork" ? woodworkProjects : metalworkProjects;

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

export default MainProject;
