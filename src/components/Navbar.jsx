import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaDownload, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import leetcodeLogo from '../assets/leetcode.png';
import samplePDF from '../assets/Resume.pdf';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='px-6 py-4 flex items-center justify-between bg-gray-900 text-white shadow-md rounded-b-md bg-transparent'>
      {/* Left - Download Resume Button */}
      <a 
        href={samplePDF} 
        download="Resume.pdf" 
        className="flex items-center text-white font-medium px-4 py-2 rounded-full bg-gray-800 hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
      >
        <FaDownload className="mr-2 text-sm" />
        <span>Download Resume</span>
      </a>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Right - Social Media Icons (Hidden on mobile, shown on larger screens) */}
      <div className='hidden md:flex items-center gap-6 text-2xl'>
        <a href="https://www.linkedin.com/in/patilsamarth" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300 transition'>
          <FaLinkedin />
        </a>
        <a href="https://github.com/samarth336/" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300 transition'>
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/XLspRnuLKy/" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300 transition'>
          <img src={leetcodeLogo} alt="LeetCode" className='h-8 w-8' />
        </a>
      </div>

      {/* Mobile Menu (Dropdown with Smooth Animation) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-gray-800 py-4 flex flex-col items-center gap-4 md:hidden shadow-lg"
          >
            <a href="https://www.linkedin.com/in/patilsamarth" target="_blank" rel="noopener noreferrer" className='text-xl hover:text-gray-300 transition'>
              <FaLinkedin />
            </a>
            <a href="https://github.com/samarth336/" target="_blank" rel="noopener noreferrer" className='text-xl hover:text-gray-300 transition'>
              <FaGithub />
            </a>
            <a href="https://leetcode.com/u/XLspRnuLKy/" target="_blank" rel="noopener noreferrer">
              <img src={leetcodeLogo} alt="LeetCode" className='h-8 w-8' />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;