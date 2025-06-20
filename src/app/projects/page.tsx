"use client"
import type { NextPage } from "next";
import { projects, ProjectType } from "../../data/Project";
import Card from "../../components/card/Card";


const Projects: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center text-4xl font-bold py-5 uppercase">
        Projects
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-5 py-5 md:px-0 px-3">
        {projects.map((project: ProjectType) => (
          <Card
            key={project.id}
            project={project}
            tecnologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
