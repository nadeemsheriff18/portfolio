import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div name='about' id="about" className='w-full h-auto text-gray-300 bg-gray-900'>
      <div className='flex flex-col justify-center items-center w-full h-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-32 py-20'>
        <div className='px-20'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          
         className='mb-8'>
            <p id="about_header" className='motion-safe:animate-bounce text-5xl sm:text-6xl mt-5 lg:text-7xl font-extrabold'>
              About Me
            </p>
          </motion.div>
          <div>
            <motion.h2 whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }} className='text-sm text-justify font-bold sm:text-xl lg:text-2xl pb-3 lg:py-4 w-full font-mono'>
              Heyy, I'm Nadeem Sheriff, a web developer with a strong foundation in full-stack development.
              <br />
              <span className='text-2xl text-justify sm:text-3xl lg:text-3xl font-extrabold block'>
                Nice to meet you!
              </span>
            </motion.h2>
            <motion.p whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 8 }} className='text-base text-justify font-semibold font-mono sm:text-lg lg:text-xl py-2 w-full px-0'>
              I specialize in building dynamic web applications, leveraging technologies like React, Node.js, Express, and structured databases such as SQL and PostgreSQL. My experience extends into designing RESTful APIs, ensuring efficient and scalable solutions.
              <br />
              I’m passionate about technology, constantly exploring new trends, and I have a keen interest in networks, cybersecurity, and machine learning. This combination of skills allows me to create secure, robust, and innovative applications, and I’m always eager to take on new challenges in the tech space.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
