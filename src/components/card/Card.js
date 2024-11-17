"use client";
const Card = ({ project, tecnologies }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      className="border border-white p-5 flex flex-col items-center gap-5 "
    >
      <img src={project.image} alt="" />
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
