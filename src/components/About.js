import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div name='about' id="about" className='w-full h-auto pt-0 text-gray-300 bg-gray-900'>
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
                className='space-y-6 mt-10'
              >
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-sans font-semibold px-2 text-gray-200'>
                  Hello! I'm <span className='text-teal-400 font-bold'>Nadeem Sheriff</span>, a passionate software developer with a solid foundation in full-stack development.
                  I enjoy designing scalable backend systems and building clean, intuitive user experiences.
                  I develop real-world projects using the <span className='text-teal-400 font-bold'>MERN stack</span> and aim to deliver solutions that are both practical and impactful.
                </p>

                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-sans font-semibold px-2 text-gray-200'>
                  I'm always excited to <span className='text-teal-400 font-bold'>collaborate on meaningful projects</span> and explore new ideas. If you're working on something exciting, feel free to reach out—I’d love to connect!
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
                className='space-y-6 mt-10'
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
