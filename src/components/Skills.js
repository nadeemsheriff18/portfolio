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

  const handleSkillClick = (skill) => {
    setOpenSkill(prev => prev === skill ? null : skill);
  };

  return (
    <div name="skills" id="skills" className="py-10 text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">

        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl text-center pb-6 font-mono"
          id="skills_header"
        >
          Skills
        </motion.h1>

        {/* Programming Languages */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          className="text-2xl sm:text-3xl font-bold font-mono"
        >
          Programming Languages
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 text-center font-mono">
          <SkillCard Icon={FaPython} name="Python" size={30} onClick={() => handleSkillClick("Python")} isOpen={openSkill === "Python"} description={skillsInfo["Python"]} />
          <SkillCard Icon={IoLogoJavascript} name="JavaScript" size={30} onClick={() => handleSkillClick("JavaScript")} isOpen={openSkill === "JavaScript"} description={skillsInfo["JavaScript"]} />
          <SkillCard Icon={PiFileCppBold} name="C++" size={30} onClick={() => handleSkillClick("C++")} isOpen={openSkill === "C++"} description={skillsInfo["C++"]} />
          <SkillCard Icon={FaJava} name="Java" size={30} onClick={() => handleSkillClick("Java")} isOpen={openSkill === "Java"} description={skillsInfo["Java"]} />
        </div>

        {/* Frameworks and Libraries */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          className="text-2xl sm:text-3xl font-bold font-mono"
        >
          Frameworks and Libraries
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 text-center font-mono">
          <SkillCard Icon={FaReact} name="React js" size={30} onClick={() => handleSkillClick("React js")} isOpen={openSkill === "React js"} description={skillsInfo["React js"]} />
          <SkillCard Icon={RiNextjsFill} name="Next js" size={30} onClick={() => handleSkillClick("Next js")} isOpen={openSkill === "Next js"} description={skillsInfo["Next js"]} />
          <SkillCard Icon={FaNode} name="Node js" size={30} onClick={() => handleSkillClick("Node js")} isOpen={openSkill === "Node js"} description={skillsInfo["Node js"]} />
          <SkillCard Icon={FaNetworkWired} name="REST framework" size={30} onClick={() => handleSkillClick("REST framework")} isOpen={openSkill === "REST framework"} description={skillsInfo["REST framework"]} />
          <SkillCard Icon={SiExpress} name="Express js" size={30} onClick={() => handleSkillClick("Express js")} isOpen={openSkill === "Express js"} description={skillsInfo["Express js"]} />
          <SkillCard Icon={TbBrandReactNative} name="React native" size={30} onClick={() => handleSkillClick("React native")} isOpen={openSkill === "React native"} description={skillsInfo["React native"]} />
          <SkillCard Icon={SiFlask} name="Flask" size={30} onClick={() => handleSkillClick("Flask")} isOpen={openSkill === "Flask"} description={skillsInfo["Flask"]} />
          <SkillCard Icon={RiTailwindCssFill} name="Tailwindcss" size={30} onClick={() => handleSkillClick("Tailwindcss")} isOpen={openSkill === "Tailwindcss"} description={skillsInfo["Tailwindcss"]} />
        </div>

        {/* DBMS and Tools */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl font-bold font-mono"
        >
          Database Management and Other Tools
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 text-center font-mono">
          <SkillCard Icon={SiMysql} name="Mysql" size={30} onClick={() => handleSkillClick("Mysql")} isOpen={openSkill === "Mysql"} description={skillsInfo["Mysql"]} />
          <SkillCard Icon={BiLogoPostgresql} name="Postgresql" size={30} onClick={() => handleSkillClick("Postgresql")} isOpen={openSkill === "Postgresql"} description={skillsInfo["Postgresql"]} />
          <SkillCard Icon={SiMongodb} name="MongoDB" size={30} onClick={() => handleSkillClick("MongoDB")} isOpen={openSkill === "MongoDB"} description={skillsInfo["MongoDB"]} />
          <SkillCard Icon={VscVscode} name="Vscode" size={30} onClick={() => handleSkillClick("Vscode")} isOpen={openSkill === "Vscode"} description={skillsInfo["Vscode"]} />
          <SkillCard Icon={FaGithub} name="Github" size={30} onClick={() => handleSkillClick("Github")} isOpen={openSkill === "Github"} description={skillsInfo["Github"]} />
          <SkillCard Icon={SiKubernetes} name="Kubernetes" size={30} onClick={() => handleSkillClick("Kubernetes")} isOpen={openSkill === "Kubernetes"} description={skillsInfo["Kubernetes"]} />
          <SkillCard Icon={FaLinux} name="Linux" size={30} onClick={() => handleSkillClick("Linux")} isOpen={openSkill === "Linux"} description={skillsInfo["Linux"]} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
