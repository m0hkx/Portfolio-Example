import { FaHtml5, FaCss3, FaReact, FaJava, FaPython, FaDiscord, FaGithub, FaGitAlt, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiNextdotjs, SiLua, SiWebpack, SiVite, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { DiMysql } from "react-icons/di";


export const skillCategories = [
    {
        buttonName: "Frontend",
        skills: [
            {
                name: "HTML",
                icon: FaHtml5
            },
            {
                name: "CSS",
                icon: FaCss3
            },
            {
                name: "Javascript",
                icon: IoLogoJavascript
            },
            {
                name: "Typescript",
                icon: SiTypescript
            },
            {
                name: "React",
                icon: FaReact
            },
            {
                name: "NextJS",
                icon: SiNextdotjs
            },
            {
                name: "Tawilwind CSS",
                icon: RiTailwindCssFill
            },
            {
                name: "Bootstrap",
                icon: FaBootstrap
            },
        ]
    },
    { buttonName: "Backend", 
        skills: [
            {
                name: "NodeJS",
                icon: FaNodeJs
            },
            {
                name: "ExpressJS",
                icon: SiExpress
            },

            {
                name: "SQL",
                icon: DiMysql
            },

            {
                name: "MongoDB",
                icon: SiMongodb
            },
        ] 
    },
    { buttonName: "Languages", 
        skills: [
            {
                name: "Lua",
                icon: SiLua
            },
            {
                name: "Javascript",
                icon: IoLogoJavascript
            },
            {
                name: "Typescript",
                icon: SiTypescript
            },
            {
                name: "Python",
                icon: FaPython
            },
            {
                name: "Java",
                icon: FaJava
            },
            {
                name: "Go",
                icon: FaGolang
            },
    ] },
    { buttonName: "Frameworks", 
        skills: [
            {
                name: "React",
                icon: FaReact
            },
            {
                name: "NextJS",
                icon: SiNextdotjs
            },

            {
                name: "Tailwind CSS",
                icon: RiTailwindCssFill
            },

            {
                name: "DiscordJS",
                icon: FaDiscord
            },

            {
                name: "Bootstrap",
                icon: FaBootstrap
            },
        ] 
    },
    { buttonName: "Other", 
        skills: [
            {
                name: "VS Code",
                icon: VscVscode
            },
            {
                name: "Github",
                icon: FaGithub
            },

            {
                name: "Git",
                icon: FaGitAlt
            },

            {
                name: "Vite",
                icon: SiVite
            },

            {
                name: "Webpack",
                icon: SiWebpack
            },
        ] 
    },
]