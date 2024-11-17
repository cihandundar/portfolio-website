import { projects } from "../../data/Project";
import Card from "@/components/card/Card";

const Projects = () => {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-5 py-5">
        {projects.map((project) => (
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
