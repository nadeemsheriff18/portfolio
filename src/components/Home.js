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
    <div name='home' id="home" className='h-screen w-full pt-32'>
      <div className='flex flex-wrap'>
        {/* Left Side */}
        <div className='w-full lg:w-1/2 lg:pl-32'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='pb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-center lg:text-left bg-gradient-to-r from-amber-50 via-red-300 to-orange-300 bg-clip-text text-transparent font-mono font-extrabold'
              id='myname'
            >
              Nadeem Sheriff
            </motion.h1>

            <motion.span
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="font-mono text-3xl sm:text-4xl lg:text-4xl bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-transparent font-bold text-center lg:text-left"
            >
              Software Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='my-2 max-w-xl py-6 font-bold tracking-tighter px-6 sm:px-10 md:px-0 text-white lg:text-left text-sm md:text-lg lg:text-lg'
            >
              Software developer who enjoys building clean, user-centric applications that solve real-world problems.
              Experienced in Python, JavaScript and TypeScript, with a focus on writing scalable backend code and
              delivering practical, end-to-end solutions.
            </motion.p>

            {/* Buttons moved here to left side */}
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
                className='text-white font-bold py-2 px-4 rounded-md hover:bg-black transition duration-300 border-2 cursor-pointer font-mono shadow-xl shadow-[#f5f7f8]'
              >
                View Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-white font-bold py-2 px-4 rounded-md hover:bg-black transition duration-300 border-2 cursor-pointer font-mono shadow-xl shadow-[#f5f7f8]"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className='w-full lg:w-1/2 lg:p-8 mt-12 lg:mt-0'>
          <div className='flex justify-center'>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-[200px] h-[200px] lg:w-[380px] lg:h-[380px] rounded-3xl shadow-xl shadow-[#f5f7f8]"
              src='/assets/mypic5.jpg'
              alt="Nadeem Sheriff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
