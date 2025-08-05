import React from 'react'
import { projects, ProjectType } from "../../data/Project";
const Project = () => {
    return (

        <>
            {projects.map((project: ProjectType, projectIndex: number) => (
                <a
                    key={projectIndex}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white p-5 flex flex-col items-center gap-5 rounded-lg"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                    />
                    <div className="text-xl font-bold">{project.title}</div>
                    <ul className="flex gap-5">
                        {project.technologies.map((tech, techIndex) => (
                            <li key={techIndex}>
                                <img
                                    className="w-[60px] border-2 rounded-full p-3"
                                    src={tech.image}
                                    alt=""
                                />
                            </li>
                        ))}
                    </ul>
                </a>
            ))}
        </>

    )
}

export default Project