import React from 'react';
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className='w-full h-max'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='py-20 text-center text-5xl md:text-6xl lg:text-7xl text-white' id='projects_header'>My Projects</motion.h1>

      <div className='flex flex-col px-4 sm:px-10 lg:px-28 font-mono text-lg'>
        {/* Project 1 */}
        <div className="flex flex-wrap lg:justify-center pb-8 text-white">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='w-full lg:w-1/4'>
            <img src='/assets/od_app.png' alt="OD request app" width={250} height={250} className='mb-6 rounded' />
          </motion.div>
          <motion.div 
           whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 1 }}
           className='w-full max-w-xl flex flex-col lg:w-3/4'>
            <h6 className='mb-2 font-extrabold'>OD/Leave Request Application</h6>
            <p className='mb-2 text-neutral-400 text-pretty'>This project was developed for my college to improve the on-duty (OD) and leave management system for students and the Head of Department (HOD). It centralizes the request and approval process through a user-friendly dashboard, provides real-time updates, and allows for document uploads. The system makes it easier for students to apply for on-duty or leave and for the HOD to manage and approve requests.</p>
            <p className='text-sm'>Technologies: React, Express, PostgreSQL, Tailwind CSS</p>
            <a className="text-white font-bold p-2 my-2 w-max rounded-md hover:bg-black transition duration-300 border-2 cursor-pointer font-mono shadow-md shadow-[#f5f7f8]" href='https://github.com/nadeemsheriff18/od_project'>Github</a>
          </motion.div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-wrap lg:justify-center py-8 text-white">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='w-full lg:w-1/4'>
            <img src='/assets/carz.png' alt="Car rental" width={250} height={250} className='mb-6 rounded' />
          </motion.div>
          <motion.div 
           whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 1 }}
           className='w-full max-w-xl flex flex-col lg:w-3/4'>
            <h6 className='mb-2 font-extrabold'>Car rental Website</h6>
            <p className='mb-2 text-neutral-400 text-pretty'>The Car Rental Website is a responsive Next.js application that simplifies car booking. It features a dedicated homepage with a hero section, a car showcase for available vehicles, and seamless navigation to the car page. Designed with a modern UI, the platform ensures a smooth user experience, allowing users to browse, select, and rent cars effortlessly. This project combines dynamic routing and optimized design for an intuitive and efficient car rental solution.</p>
            <p className='text-sm'>Technologies: Nextjs,Tailwind CSS, PostgreSQL</p>
            <a className="text-white font-bold p-2 my-2 w-max rounded-md hover:bg-black transition duration-300 border-2 cursor-pointer font-mono shadow-md shadow-[#f5f7f8]" href='https://github.com/nadeemsheriff18/carz.com'>Github</a>
          </motion.div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-wrap lg:justify-center py-8 text-white">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='w-full lg:w-1/4'>
            <img src='/assets/ideaforge.png' alt="Ideaforge Hackathon Website" width={250} height={250} className='mb-6 rounded' />
          </motion.div>
          <motion.div 
           whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 1 }}
           className='w-full max-w-xl flex flex-col lg:w-3/4'>
            <h6 className='mb-2 font-extrabold'>Ideaforge Hackathon Website</h6>
            <p className='mb-2 text-neutral-400 text-pretty'>A website developed for the hackathon organized by the Department of Computer Science and Business Systems at my college..</p>
            <p className='text-sm'>Technologies: React, Framer Motion, Tailwind CSS</p>
            <a className="text-white font-bold p-2 my-2 w-max rounded-md hover:bg-black transition duration-300 border-2 cursor-pointer font-mono shadow-md shadow-[#f5f7f8]" href='https://github.com/nadeemsheriff18/ideaforge-website'>Github</a>
            <a className="text-white font-bold p-2 my-2 w-max rounded-md hover:bg-black transition duration-300 border-2 cursor-pointer font-mono shadow-md shadow-[#f5f7f8]" href='https://ideaforgehackathon.netlify.app/'>Website</a>
          </motion.div>
        </div>
{/* Project 5*/}
        <div className="flex flex-wrap lg:justify-center py-8 text-white">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='w-full lg:w-1/4'>
            <img src='/assets/exam1.jpg' alt="Ideaforge Hackathon Website" width={250} height={250} className='mb-6 rounded' />
          </motion.div>
          <motion.div 
           whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 1 }}
           className='w-full max-w-xl flex flex-col lg:w-3/4'>
            <h6 className='mb-2 font-extrabold'>Project Hawk</h6>
            <p className='mb-2 text-neutral-400 text-pretty'>An application designed to detect malpractice during examinations at schools and universities in real-time. It uses advanced monitoring tools and algorithms to identify suspicious behaviors, such as unauthorized device usage or unusual movement. The app automatically alerts examination controllers, reducing the workload of invigilators and improving the integrity of the examination process.</p>
            <p className='text-sm'>Technologies: React,Flask,YOLO,OpenCV,CNN</p>
            <a className="text-white font-bold p-2 my-2 w-max rounded-md hover:bg-black transition duration-300 border-2 cursor-pointer font-mono shadow-md shadow-[#f5f7f8]" href='https://github.com/nadeemsheriff18/Project_Hawk'>Github</a>
            
          </motion.div>
        </div>

        {/* Project 4 */}
        <div className="mb-8 flex flex-wrap lg:justify-center text-white">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='w-full lg:w-1/4'>
            <img src='/assets/chatapp.png' alt="Chat Application" width={200} height={200} className='mb-6 rounded' />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='w-full max-w-xl lg:w-3/4 flex flex-col'>
            <h6 className='mb-2 font-extrabold'>Chat Application</h6>
            <p className='mb-2 text-neutral-400 text-pretty'>A one-on-one chat application that ensures privacy and lets users message each other in real-time using WebSockets. The app includes features such as end-to-end encryption for secure conversations, message delivery status (sent, delivered, read receipts), and support for rich media such as images, videos, and files. Users can also set online/offline status, view typing indicators, and maintain a searchable chat history.</p>
            <p className='text-sm'>Technologies: React, Express, PostgreSQL, Tailwind CSS</p>
            <a className="text-white font-bold p-2 my-2 w-max rounded-md hover:bg-black transition duration-300 border-2 cursor-pointer font-mono shadow-md shadow-[#f5f7f8]" href='https://github.com/nadeemsheriff18/React-chatApp'>Github</a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
