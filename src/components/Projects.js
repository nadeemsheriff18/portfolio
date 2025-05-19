import React from 'react';
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className='w-full h-max'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='py-16 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold'
        id='projects_header'>
        My Projects
      </motion.h1>

      <div className='flex flex-col px-4 sm:px-8 md:px-16 lg:px-28 font-mono space-y-12'>
        
        {/* Project Template */}
        {[
          {
            title: "OD/Leave Request Application",
            desc: "This project was developed for my college to improve the on-duty (OD) and leave management system for students and the Head of Department (HOD). It centralizes the request and approval process through a user-friendly dashboard, provides real-time updates, and allows for document uploads. The system makes it easier for students to apply for on-duty or leave and for the HOD to manage and approve requests.",
            tech: "React, Express, PostgreSQL, Tailwind CSS",
            img: "/assets/od_app.png",
            github: "https://github.com/nadeemsheriff18/od_project",
          },
          {
            title: "EduVault",
            desc: "EduVault is a cloud-based academic storage and collaboration platform built for students. It lets users create subject-wise folders to upload, organize, and access study materials anytime. Students can connect with peers, share resources, and enhance collaborative learning. With a clean, intuitive interface and secure file storage, EduVault makes studying smarter and more connected.",
            tech: "React JS, Tailwind CSS, Supabase",
            img: "/assets/eduvault.png",
            github: "https://github.com/nadeemsheriff18/eduvault",
          },
          {
            title: "Ideaforge Hackathon Website",
            desc: "A website developed for the hackathon organized by the Department of Computer Science and Business Systems at my college.",
            tech: "React, Framer Motion, Tailwind CSS",
            img: "/assets/ideaforge.png",
            github: "https://github.com/nadeemsheriff18/ideaforge-website",
            website: "https://ideaforgehackathon.netlify.app/",
          },
          {
            title: "Project Hawk",
            desc: "An application designed to detect malpractice during examinations at schools and universities in real-time. It uses advanced monitoring tools and algorithms to identify suspicious behaviors, such as unauthorized device usage or unusual movement. The app automatically alerts examination controllers, reducing the workload of invigilators and improving the integrity of the examination process.",
            tech: "React, Flask, YOLO, OpenCV, OpenPose",
            img: "/assets/hawk.png",
            github: "https://github.com/nadeemsheriff18/Project_Hawk",
          },
          {
            title: "Ecommerce Honeypot",
            desc: "This project is a fashion e-commerce honeypot that mimics a real online shopping site to attract and study malicious users. It features user authentication, dynamic product listings, cart and checkout functionality, and coupon-based discounts. Built with React on the frontend and Flask on the backend, it uses PostgreSQL for data storage. The system logs interactions to analyze suspicious behavior while appearing fully functional to end users.",
            tech: "React, Express, Flask, PostgreSQL, Tailwind CSS",
            img: "/assets/honeypot.jpg",
            github: "https://github.com/nadeemsheriff18/Honeypot",
          }
        ].map((project, idx) => (
          <div key={idx} className="flex flex-wrap lg:justify-center items-start text-white gap-4">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full sm:w-1/2 lg:w-1/4 flex justify-center'>
              <img src={project.img} alt={project.title} className='rounded w-[90%] sm:w-[250px] h-auto object-cover' />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full sm:w-1/2 max-w-2xl flex flex-col text-sm sm:text-base'>
              <h6 className='mb-2 font-extrabold text-lg sm:text-xl'>{project.title}</h6>
              <p className='mb-2 text-neutral-400 leading-relaxed'>{project.desc}</p>
              <p className='text-xs sm:text-sm mb-2'>Technologies: {project.tech}</p>
              <div className='flex gap-4 flex-wrap'>
                {project.github && (
                  <a className="text-white font-bold text-xs sm:text-sm px-3 py-1 rounded-md hover:bg-black transition duration-300 border-2 cursor-pointer font-mono shadow-md shadow-[#f5f7f8]"
                    href={project.github} target='_blank' rel='noreferrer'>
                    Github
                  </a>
                )}
                {project.website && (
                  <a className="text-white font-bold text-xs sm:text-sm px-3 py-1 rounded-md hover:bg-black transition duration-300 border-2 cursor-pointer font-mono shadow-md shadow-[#f5f7f8]"
                    href={project.website} target='_blank' rel='noreferrer'>
                    Website
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
