import { useState } from "react";

import { skillCategories } from "../Data/Skills";

function Skills() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedCategory = skillCategories[selectedIndex];

    return (
        <>
            <div className="w-3/4 h-[60vh] flex flex-col items-center justify-self-center mt-[20vh]">
                <div className="title">
                    <h1 className="text-white text-5xl">My Skills</h1>
                </div>

                <div className="buttons flex flex-wrap">
                    {skillCategories.map((value, index) => (
                        <button
                        key={index}
                        className={`
                            py-2 px-6 m-2 mt-10 rounded-full transition duration-300
                            ${index === selectedIndex 
                            ? "bg-[#252525] text-white border border-[#252525]"  // selected
                            : "bg-[#131313] text-[#868686] border border-[#252525] hover:text-white cursor-pointer"
                            }
                        `}
                        onClick={() => setSelectedIndex(index)}
                        >
                        {value.buttonName}
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center items-center mt-6 gap-4 w-2/4">
                    {selectedCategory.skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div key={index} className="flex justify-center items-center bg-[#131313] py-2 px-6 rounded-full border border-[#252525]">
                                {Icon && <Icon className="text-2xl text-[#FFFFFF] mr-2" />}
                                <span className="text-[#FFFFFF]">{skill.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Skills;