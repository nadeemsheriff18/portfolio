import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name='about'
      id="about"
      className='w-full bg-gray-900 text-gray-300 py-20 px-4 sm:px-6 md:px-10 lg:px-24 xl:px-32'
    >
      <div className='max-w-7xl mx-auto flex flex-col justify-center items-center text-center sm:text-left'>
        {/* Header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className='mb-10'
        >
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono' id='about_header'>
            About Me
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className='w-full max-w-4xl space-y-6'
        >
          <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold font-mono'>
            Hi, I'm Nadeem Sheriff 👋
          </h3>

          <p className='text-base sm:text-lg md:text-xl font-mono leading-relaxed text-justify'>
            I'm a software developer with a strong focus on full-stack web development. I build responsive and scalable applications using technologies like <span className="text-teal-400">React, Node.js, Express, MongoDB,</span> and <span className="text-teal-400">PostgreSQL</span>. My work spans both front-end and back-end, with a deep interest in creating seamless user experiences and robust APIs.
          </p>

          <p className='text-base sm:text-lg md:text-xl font-mono leading-relaxed text-justify'>
            Beyond web development, I’m enthusiastic about <span className="text-teal-400">cybersecurity, networking, and AI/ML</span>. I constantly seek out opportunities to learn and apply new technologies in real-world projects.
          </p>

          <p className='text-base sm:text-lg md:text-xl font-mono leading-relaxed text-justify'>
            If you’re looking to build a project, need technical help, or just want to brainstorm and collaborate—<span className="text-teal-400 font-semibold">I’d love to connect!</span> Let’s build something amazing together.
          </p>

          <p className='text-lg font-semibold font-mono text-center sm:text-left pt-4'>
            📬 <span className="text-teal-400">Feel free to reach out via the contact section below.</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
