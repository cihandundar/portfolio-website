import React from 'react'
import { skills, type Skill } from "../../data/Skills";
const Skill = () => {
    return (
        <>
            {skills.map((skill: Skill) => (
                <div
                    key={skill.id}
                    className="bg-white p-2 flex flex-col items-center justify-center rounded-lg"
                >
                    <img className="w-[60px]" src={skill.image} alt={skill.name} />
                    <span className="pt-2 text-base text-black">{skill.name}</span>
                </div>
            ))}
        </>

    )
}

export default Skill