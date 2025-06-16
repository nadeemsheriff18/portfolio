import React, { useState } from 'react';
import {
  FaPython, FaReact, FaNode, FaGithub, FaLinux, FaJava
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { PiFileCppBold } from "react-icons/pi";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiMysql, SiKubernetes, SiExpress, SiMongodb, SiFlask } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaNetworkWired } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";

const skillsInfo = {
  Python: "Versatile language used in web, AI, and automation.",
  JavaScript: "Core scripting language for web development.",
  "C++": "High-performance language for systems and games.",
  Java: "Object-oriented language used in enterprise apps.",
  "React js": "Frontend JS library for building UI.",
  "Next js": "React framework with SSR capabilities.",
  "Node js": "Backend JS runtime for scalable applications.",
  "REST framework": "Standard for building web APIs.",
  "Express js": "Minimal Node.js framework for backend APIs.",
  "React native": "Framework for building mobile apps using React.",
  Flask: "Lightweight Python framework for web apps.",
  Tailwindcss: "Utility-first CSS framework for styling.",
  Mysql: "Relational DBMS widely used in full-stack apps.",
  Postgresql: "Advanced, open-source relational database.",
  MongoDB: "NoSQL document database for scalable apps.",
  Vscode: "Popular lightweight code editor by Microsoft.",
  Github: "Platform for version control and collaboration.",
  Kubernetes: "Container orchestration platform.",
  Linux: "Open-source OS used in servers and development."
};

const skillCategories = {
  "Programming Languages": [
    { Icon: FaPython, name: "Python" },
    { Icon: IoLogoJavascript, name: "JavaScript" },
    { Icon: PiFileCppBold, name: "C++" },
    { Icon: FaJava, name: "Java" },
  ],
  "Frameworks and Libraries": [
    { Icon: FaReact, name: "React js" },
    { Icon: RiNextjsFill, name: "Next js" },
    { Icon: FaNode, name: "Node js" },
    { Icon: FaNetworkWired, name: "REST framework" },
    { Icon: SiExpress, name: "Express js" },
    { Icon: TbBrandReactNative, name: "React native" },
    { Icon: SiFlask, name: "Flask" },
    { Icon: RiTailwindCssFill, name: "Tailwindcss" },
  ],
  "Database & Tools": [
    { Icon: SiMysql, name: "Mysql" },
    { Icon: BiLogoPostgresql, name: "Postgresql" },
    { Icon: SiMongodb, name: "MongoDB" },
    { Icon: VscVscode, name: "Vscode" },
    { Icon: FaGithub, name: "Github" },
    { Icon: SiKubernetes, name: "Kubernetes" },
    { Icon: FaLinux, name: "Linux" },
  ]
};

const SkillCard = ({ Icon, name, size, onClick, isOpen, description }) => (
  <div
    className="shadow-md shadow-[#f5f7f8] hover:scale-105 duration-300 cursor-pointer relative p-2 rounded-md"
    onClick={onClick}
  >
    <Icon className="mx-auto" size={size} />
    <p className="my-2 text-sm sm:text-base font-bold">{name}</p>
    {isOpen && (
      <p className="text-xs px-2 pb-2">{description}</p>
    )}
  </div>
);

const Skills = () => {
  const [openSkill, setOpenSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Programming Languages");

  const handleSkillClick = (skill) => {
    setOpenSkill(prev => prev === skill ? null : skill);
  };

  return (
    <div name="skills" id="skills" className="py-10 text-white bg-gray-900">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full gap-3">

        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl text-center pb-6 font-mono"
          id='skills_header'
        >
          Skills
        </motion.h1>

        {/* Category Buttons */}
        <div className="flex justify-center flex-wrap gap-4 pb-8">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenSkill(null);
              }}
              className={`px-4 py-2 font-mono rounded-full text-lg font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-teal-500 text-white"
                  : "bg-gray-700 hover:bg-teal-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
          {skillCategories[activeCategory].map(({ Icon, name }) => (
            <SkillCard
              key={name}
              Icon={Icon}
              name={name}
              size={30}
              onClick={() => handleSkillClick(name)}
              isOpen={openSkill === name}
              description={skillsInfo[name]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
