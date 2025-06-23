import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import './App.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavToggle = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-lg text-white z-10">
      {/* Logo */}
      <div className='flex'>
        <h2 id="nav-name" className='text-2xl font-bold font-mono'>Nadeem Sheriff</h2>
        <img className="w-30 h-10" alt="man" src='/assets/man.png'></img>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex font-mono font-bold text-lg'>
        <li className='hover:text-2xl'><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='hover:text-2xl'><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li className='hover:text-2xl'><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className='hover:text-2xl'><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li className='hover:text-2xl'><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Hamburger Icon */}
      <div onClick={handleNavToggle} className="md:hidden z-10 cursor-pointer">
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 font-bold font-mono left-0 w-full h-screen bg-black text-white flex flex-col justify-center items-center transition-all duration-300 ${nav ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul>
          <li className='py-2 text-2xl'><Link onClick={handleNavToggle} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='py-2 text-2xl'><Link onClick={handleNavToggle} to="about" smooth={true} duration={500}>About</Link></li>
          <li className='py-2 text-2xl'><Link onClick={handleNavToggle} to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li className='py-2 text-2xl'><Link onClick={handleNavToggle} to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li className='py-2 text-2xl'><Link onClick={handleNavToggle} to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>

      {/* Socials */}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[40px] flex flex-col justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a href='https://www.linkedin.com/in/nadeem-sheriff-a3295b257/?originalSubdomain=in' className='flex py-1 justify-between items-center w-full text-white'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[40px] flex flex-col justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a href='https://github.com/nadeemsheriff18' className='flex py-1 justify-between items-center w-full text-white'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[40px] flex flex-col justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FC3753]'>
            <a href="mailto:nadeemsheriff18@gmail.com" className='flex py-1 justify-between items-center w-full text-white'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
