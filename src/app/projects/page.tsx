"use client";

import type { NextPage } from "next";
import Project from "../../components/project/Project";


const Projects: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center text-4xl font-bold py-5 uppercase">
        Projects
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-5 py-5 md:px-0 px-3">
        <Project />
      </div>
    </div>
  );
};

export default Projects;
