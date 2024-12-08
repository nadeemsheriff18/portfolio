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
      {/* Container */}
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:pl-32'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='pb-6 text-7xl tracking-tight lg:mt-16 lg:text-8xl text-center bg-gradient-to-r from-amber-50 via-red-300 to-orange-300 bg-clip-text text-transparent font-mono font-extrabold'
              id='myname'>
              Nadeem Sheriff
            </motion.h1>
            <motion.span 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="relative font-mono top-0 w-fit h-auto py-2 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-4xl font-bold text-transparent text-center select-auto">
              Web Application Developer
            </motion.span>
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='my-2 max-w-xl py-6 font-bold tracking-tighter px-20 md:text-lg md:px-0 text-white'> 
              I am an experienced web application developer proficient in React.js, Node.js, and Express for building dynamic and responsive frontends and backends. My expertise includes working with structured databases such as SQL and PostgreSQL as well as MongoDB, and I have a solid understanding of RESTful APIs. Additionally, I have experience with Python and Django for server-side development.
            </motion.p>
          </div>
        </div>
        
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center '>
            <motion.img 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }} 
              className="w-[200px] h-[200px] lg:w-[380px] lg:h-[380px] rounded-3xl shadow-xl shadow-[#f5f7f8]" 
              src='/assets/mypic5.jpg' 
              alt="Nadeem Sheriff"
            />
          </div>

          {/* Buttons */}
          <div className='flex justify-center mt-12 space-x-4'>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
