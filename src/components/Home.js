import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Home = () => {
  return (
    <div
      name='home'
      id="home"
      className='min-h-screen w-full flex items-center justify-center lg:pt-0'
    >
      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full max-w-7xl px-4 lg:px-32'>

        {/* Left Section */}
        <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left'>
          <motion.h1
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='pb-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight bg-gradient-to-r from-amber-50 via-red-300 to-orange-300 bg-clip-text text-transparent font-mono font-extrabold'
            id='myname'
          >
            Nadeem Sheriff
          </motion.h1>

          <motion.span
            variants={container(0.8)}
            initial="hidden"
            animate="visible"
            className="font-mono text-3xl sm:text-4xl lg:text-4xl bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-transparent font-bold"
          >
            Software Developer
          </motion.span>

          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className='mt-6 mb-4 max-w-xl font-bold tracking-tight text-white text-sm sm:text-base md:text-lg lg:text-lg lg:px-0 px-6 lg:mt-6 sm:text-left md:text-left lg:text-left'
          >
            Software developer who enjoys building clean, user-centric applications that solve real-world problems.
            Experienced in Python, JavaScript and TypeScript, with a focus on writing scalable backend code and delivering practical, end-to-end solutions.
          </motion.p>

          <motion.div
            variants={container(1.2)}
            initial="hidden"
            animate="visible"
            className='flex flex-wrap gap-4 justify-center lg:justify-start mt-4'
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className='text-white font-bold py-2 px-4 text-xs sm:text-sm md:text-base rounded-md hover:bg-black transition duration-300 border-2 cursor-pointer font-mono shadow-xl shadow-[#f5f7f8]'
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-white font-bold py-2 px-4 text-xs sm:text-sm md:text-base rounded-md hover:bg-black transition duration-300 border-2 cursor-pointer font-mono shadow-xl shadow-[#f5f7f8]"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Right Section - Image */}
        <div className='w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center'>
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] rounded-3xl shadow-xl shadow-[#f5f7f8]"
            src='/assets/mypic5.jpg'
            alt="Nadeem Sheriff"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
