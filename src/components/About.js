import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div name='about' id="about" className='w-full h-auto pt-72 sm:pt-0 md:pt-0 lg:pt-0 text-gray-300 bg-gray-900'>
      <div className='flex flex-col justify-center items-center w-full h-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-32 py-20'>
        <div className='px-4 sm:px-20 max-w-4xl'> {/* limit content width */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className='mb-8'
          >
            <p id="about_header" className='text-4xl font-mono sm:text-6xl mt-5 lg:text-7xl font-extrabold text-center'>
              About Me
            </p>
          </motion.div>

          <div>
            <motion.h2
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='text-base font-bold sm:text-xl lg:text-xl pb-3 lg:py-4 w-full font-mono text-center sm:text-left break-words'
            >
              Heyy, I'm Nadeem Sheriff, a software developer with a strong foundation in full-stack development.
              <br />
              <span className='text-xl sm:text-2xl lg:text-3xl font-extrabold block mt-2'>
                Nice to meet you!
              </span>
            </motion.h2>

            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='text-base font-semibold font-sans px-2 py-2 w-full sm:text-lg md:text-xl lg:text-xl break-words'
            >
              I specialize in building dynamic and user-centric web applications and designing RESTful APIs and developing scalable backend systems.
            </motion.p>

            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.2 }}
              className='text-base font-semibold font-sans px-2 py-2 w-full sm:text-lg md:text-xl lg:text-xl break-words'
            >
              I'm deeply passionate about <span className='text-teal-400'>technology, cybersecurity, networking, and machine learning</span>. I love learning, experimenting, and continuously building innovative solutions.
            </motion.p>

            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.4 }}
              className='text-base font-semibold font-sans px-2 py-2 w-full sm:text-lg md:text-xl lg:text-xl break-words'
            >
              If you’re looking to <span className='text-teal-400 font-semibold'>collaborate on a project or need help with development</span>, feel free to reach out via the contact section. Let's build something impactful together!
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
