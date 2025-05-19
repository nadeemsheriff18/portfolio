import React from 'react'
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { PiFileCppBold } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiFlask } from "react-icons/si";
import {motion} from "framer-motion";
import { TbBrandReactNative } from "react-icons/tb";
const Skills = () => {
    return (
        <div name="skills" id="skills" className=' py-28 text-white'>

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <motion.h1 whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}} 
        id='skills_header'
        className='text-white text-4xl md:text-6xl lg:text-7xl text-center pb-6 font-mono'>Skills</motion.h1>
                <div>
                    <motion.p whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:2}}
         className='text-3xl font-bold font-mono '>Programming Languages</motion.p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-10 font-mono'>
                    <div className='shadow-md shadow-[#f5f7f8] hover:scale-110 duration-500'>
                        <FaPython className='w-20 mx-auto' size={30} />
                        <p className='my-4'>Python</p>
                    </div>
                    <div className='shadow-md shadow-[#f5f7f8]  hover:scale-110 duration-500'>
                        <IoLogoJavascript className='w-20 mx-auto' size={30} />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#f5f7f8]  hover:scale-110 duration-500'>
                        <PiFileCppBold className='w-20 mx-auto' size={30} />
                        <p className='my-4'>C++</p>
                    </div>
                    <div className='shadow-md shadow-[#f5f7f8]  hover:scale-110 duration-500'>
                        <FaJava className='w-20 mx-auto' size={40} />
                        <p className='my-4'>Java</p>
                    </div>

                </div>
                <div>
                    <motion.p whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:2}}
         className='text-3xl font-bold font-mono'>Frameworks and Libraries</motion.p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-10 font-mono'>
                    <div className='shadow-md shadow-[#f5f7f8]  hover:scale-110 duration-500'>
                        <FaReact className='w-20 mx-auto' size={30} />
                        <p className='my-4'>React js</p>
                    </div>
                    <div className='shadow-md shadow-[#f5f7f8]  hover:scale-110 duration-500'>
                        <RiNextjsFill className='w-20 mx-auto' size={30} />
                        <p className='my-4'>Next js</p>
                    </div>
                    <div className='shadow-md shadow-[#f5f7f8]  hover:scale-110 duration-500'>
                        <FaNode className='w-20 mx-auto' size={30} />
                        <p className='my-4'>Node js</p>
                    </div>
                    <div className='shadow-md shadow-[#f5f7f8]  hover:scale-110 duration-500'>
                        <FaNetworkWired className='w-20 mx-auto' size={30} />
                        <p className='my-4'>REST framework</p>
                    </div>
                    <div className='shadow-md shadow-[#f5f7f8]  hover:scale-110 duration-500'>
                        <SiExpress className='w-20 mx-auto' size={30} />
                        <p className='my-4'>Express js</p>
                    </div>
                    <div className='shadow-md shadow-[#f5f7f8]  hover:scale-110 duration-500'>
                        <TbBrandReactNative className='w-20 mx-auto' size={30}/>
                        <p className='my-4'>React native</p>
                    </div>
                    <div className='shadow-md shadow-[#f5f7f8]  hover:scale-110 duration-500'>
                        <SiFlask className='w-20 mx-auto' size={30} />
                        <p className='my-4'>Flask</p>
                    </div>
                    <div className='shadow-md shadow-[#f5f7f8]  hover:scale-110 duration-500'>
                        <RiTailwindCssFill className='w-20 mx-auto' size={30} />
                        <p className='my-4'>Tailwindcss</p>
                    </div>
                </div>
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full font-mono'>
                    <div>
                        <motion.p whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
         className='text-3xl font-bold'>Database Management and other tools</motion.p>
                    </div>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-10'>
                    <div className='shadow-md shadow-[#f5f7f8]  hover:scale-110 duration-500'>
                            <SiMysql className='w-20 mx-auto' size={30} />
                            <p className='my-4'>Mysql</p>
                        </div>
                        
                        <div className='shadow-md shadow-[#f5f7f8] hover:scale-110 duration-500'>
                            <BiLogoPostgresql className='w-20 mx-auto' size={30} />
                            <p className='my-4'>Postgresql</p>
                        </div>
                        <div className='shadow-md shadow-[#f5f7f8] hover:scale-110 duration-500'>
                            <SiMongodb className='w-20 mx-auto' size={30} />
                            <p className='my-4'>MongoDB</p>
                        </div>
                        <div className='shadow-md shadow-[#f5f7f8]  hover:scale-110 duration-500'>
                            <VscVscode className='w-20 mx-auto' size={30} />
                            <p className='my-4'>Vscode</p>
                        </div>
                        <div className='shadow-md shadow-[#f5f7f8]  hover:scale-110 duration-500'>
                            <FaGithub className='w-20 mx-auto' size={30} />
                            <p className='my-4'>Github</p>
                        </div>
                        <div className='shadow-md shadow-[#f5f7f8]  hover:scale-110 duration-500'>
                            <SiKubernetes className='w-20 mx-auto' size={30} />
                            <p className='my-4'>Kubernetes</p>
                        </div>
                        <div className='shadow-md shadow-[#f5f7f8]  hover:scale-110 duration-500'>
                            <FaLinux className='w-20 mx-auto' size={40} />
                            <p className='my-4'>Linux</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills