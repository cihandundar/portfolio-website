import { skills } from "@/data/Skills";

const Skills = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center text-4xl font-bold py-5 uppercase">
        Skills
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 md:p-0 p-3 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className=" bg-white p-3 h-[200px] flex flex-col items-center justify-center rounded-lg "
          >
            <img className="w-[100px]" src={skill.image} alt="skillImage" />
            <span className="pt-5 text-xl text-black">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
