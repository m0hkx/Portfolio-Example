import { myProjects } from "../Data/Projects";
import { IoIosLink } from "react-icons/io";


function Projects() {
    return (
        <>
            <div className="w-3/4 h-[70vh] flex flex-col items-center justify-self-center">
                <div className="title">
                    <h1 className="text-white text-5xl">My Projects</h1>
                </div>

                <div className="grid grid-cols-3 gap-4 justify-self-center w-[70%] mx-auto mt-10">
                    {myProjects.map((value, i) => (
                        <div
                        key={i}
                        className="bg-[#131313] h-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
                        >
                        <img
                            className="w-full h-40 object-cover object-top"
                            src={value.ProjectImg}
                            alt={value.Name}
                        />
                        <div className="justify-self-end p-5">
                            <IoIosLink size={25} color="white" className="hover:cursor-pointer" onClick={() => window.open(value.Link, "_blank")} />
                        </div>
                        <div className="px-3">
                            <div className="name">
                            <p className="text-[#868686] text-sm">Name</p>
                            <p className="text-[#FFFFFF] font-semibold">{value.Name}</p>
                            </div>
                            <div className="techstack mt-7">
                            <p className="text-[#868686] text-sm">Tech Stack</p>
                            <p className="text-[#FFFFFF]">{value.TechStack}</p>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Projects;