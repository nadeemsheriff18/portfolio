import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div name='about' id="about" className='w-full h-auto pt-72 sm:pt-0 md:pt-0 lg:pt-0 text-gray-300 bg-gray-900'>
      <div className='flex flex-col justify-center items-center w-full h-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-32 py-20'>
        <div className='px-4 sm:px-20 max-w-4xl'>

          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className='text-4xl font-mono sm:text-6xl mt-5 lg:text-7xl font-extrabold text-center mb-8'
            id="about_header"
          >
            About
          </motion.h1>

          {/* Tab Buttons */}
          <div className='flex justify-center gap-4 flex-wrap mb-6'>
            <button
              onClick={() => setActiveTab("intro")}
              className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ${activeTab === "intro" ? "bg-teal-500 text-white" : "bg-gray-800 hover:bg-teal-600"
                }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ${activeTab === "education" ? "bg-teal-500 text-white" : "bg-gray-800 hover:bg-teal-600"
                }`}
            >
              Education
            </button>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "intro" && (
              <motion.div
                key="intro"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.5 }}
                className='space-y-4'
              >
                <p className='text-base sm:text-lg md:text-xl font-semibold font-sans px-2'>
                  Heyy, I'm Nadeem Sheriff, a software developer with a strong foundation in full-stack development.
                  <span className='block mt-2 text-xl sm:text-2xl lg:text-3xl font-extrabold'>
                    Nice to meet you!
                  </span>
                </p>
                <p className='text-base sm:text-lg md:text-xl font-semibold font-sans px-2'>
                  I specialize in building dynamic and user-centric web applications and designing RESTful APIs and developing scalable backend systems.
                </p>
                <p className='text-base sm:text-lg md:text-xl font-semibold font-sans px-2'>
                  I'm deeply passionate about <span className='text-teal-400'>technology, cybersecurity and machine learning</span>. I love learning, experimenting, and continuously building innovative solutions.
                </p>
                <p className='text-base sm:text-lg md:text-xl font-semibold font-sans px-2'>
                  If you’re looking to <span className='text-teal-400 font-semibold'>collaborate on a project or need help with development</span>, feel free to reach out via the contact section. Let's build something impactful together!
                </p>
              </motion.div>
            )}

            {activeTab === "education" && (
  <motion.div
    key="education"
    variants={contentVariants}
    initial="hidden"
    animate="visible"
    exit="hidden"
    transition={{ duration: 0.5 }}
    className='space-y-6'
  >
    <div className="border border-gray-700 rounded-lg p-4 shadow-md bg-gray-800">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-sans text-white">
        Rajalakshmi Engineering College
      </h3>
      <p className="text-sm sm:text-base md:text-lg font-sans text-gray-300">
        B.Tech – Computer Science and Business Systems (2022–2026)
      </p>
      <p className="text-sm sm:text-base md:text-lg font-sans text-gray-300">
        CGPA: 8.25 / 10
      </p>
    </div>

    <div className="border border-gray-700 rounded-lg p-4 shadow-md bg-gray-800">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-sans text-white">
        Velammal Vidhyashram
      </h3>
      <p className="text-sm sm:text-base md:text-lg font-sans text-gray-300">
        HSC (Grade 12)
      </p>
      <p className="text-sm sm:text-base md:text-lg font-sans text-gray-300">
        Percentage: 94%
      </p>
    </div>

    <div className="border border-gray-700 rounded-lg p-4 shadow-md bg-gray-800">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-sans text-white">
        Kavi Bharathi Vidyalaya
      </h3>
      <p className="text-sm sm:text-base md:text-lg font-sans text-gray-300">
        SSLC (Grade 10)
      </p>
      <p className="text-sm sm:text-base md:text-lg font-sans text-gray-300">
        Percentage: 88.9%
      </p>
    </div>
  </motion.div>
)}

          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default About;
