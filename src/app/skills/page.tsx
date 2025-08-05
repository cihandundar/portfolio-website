import Skill from "../../components/skill/Skill";


const Skills = () => {
  return (
    <div className="container mx-auto py-5">
      <div className="text-center text-4xl font-bold pb-5 uppercase">
        Skills
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 md:p-0 p-3">
        <Skill />
      </div>
    </div>
  );
};

export default Skills;
