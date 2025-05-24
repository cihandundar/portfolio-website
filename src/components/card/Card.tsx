"use client";
import React from "react";

type Project = {
  url: string;
  image: string;
  title: string;
};

type Technology = {
  image: string;
};

type CardProps = {
  project: Project;
  tecnologies: Technology[];
};

const Card: React.FC<CardProps> = ({ project, tecnologies }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white p-5 flex flex-col items-center gap-5 rounded-lg"
    >
      <img src={project.image} alt={project.title} />
      <div className="text-xl font-bold">{project.title}</div>
      <ul className="flex gap-5">
        {tecnologies.map((tech, index) => (
          <li key={index}>
            <img
              className="w-[60px] border-2 rounded-full p-3"
              src={tech.image}
              alt=""
            />
          </li>
        ))}
      </ul>
    </a>
  );
};

export default Card;
