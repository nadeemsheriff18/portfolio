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

      <div className='flex flex-col px-4 sm:px-10 lg:px-28 py-2 font-mono text-lg'>
        {/* Project 1 */}
        <div className="flex flex-wrap lg:justify-center py-8 my-1 text-white">
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
            <p className='mb-2 text-neutral-400 text-justify'>This project was developed for my college, a On-duty (OD) and leave management system for students and HOD streamlining the request and approval process with a centralized dashboard, real-time updates, and document uploads. Simplifies the process of applying for on-duty and leave for students.</p>
            <p className='text-sm'>Technologies: React, Express, PostgreSQL, Tailwind CSS</p>
            <a className="text-lg px-2 py-2 hover:animate-bounce font-extrabold" href='https://github.com/nadeemsheriff18/od_project'>Github</a>
          </motion.div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-wrap lg:justify-center py-8 text-white">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='w-full lg:w-1/4'>
            <img src='/assets/blog.jpeg' alt="Blog Page" width={250} height={250} className='mb-6 rounded' />
          </motion.div>
          <motion.div 
           whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 1 }}
           className='w-full max-w-xl flex flex-col lg:w-3/4'>
            <h6 className='mb-2 font-extrabold'>Blog Page</h6>
            <p className='mb-2 text-neutral-400 text-justify'>This is a blog site where users can read and upload posts, share their views, and comment on posts. This site acts as a public forum where users can post anything. The app also checks content for any sensitive or abusive language.</p>
            <p className='text-sm'>Technologies: React, Django, SQL, Tailwind CSS, Machine Learning</p>
            <a className="text-lg px-2 py-2 hover:animate-bounce font-extrabold" href='https://github.com/nadeemsheriff18/Blog_page'>Github</a>
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
            <p className='mb-2 text-neutral-400 text-justify'>A website developed for the hackathon conducted by the department of computer science and business systems in my college.</p>
            <p className='text-sm'>Technologies: React, Framer Motion, Tailwind CSS</p>
            <a className="text-lg px-2 py-2 hover:animate-bounce font-extrabold" href='https://github.com/nadeemsheriff18/ideaforge-website'>Github</a>
            <a className="text-lg px-2 py-2 hover:animate-bounce font-extrabold" href='https://ideaforgehackathon.netlify.app/'>Website</a>
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
            <p className='mb-2 text-neutral-400 text-justify'>A one-on-one chat application that ensures privacy and lets users text each other!</p>
            <p className='text-sm'>Technologies: React, Express, PostgreSQL, Tailwind CSS</p>
            <a className="text-lg px-2 py-2 hover:animate-bounce font-extrabold" href='https://github.com/nadeemsheriff18/React-chatApp'>Github</a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
