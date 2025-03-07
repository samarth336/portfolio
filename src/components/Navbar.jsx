import React from 'react';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import leetcodeLogo from '../assets/leetcode.png';
import samplePDF from '../assets/Resume.pdf';

const Navbar = () => {
  return (
    <nav className='px-6 py-4 flex items-center justify-between bg-gray-900 text-white shadow-md flex-wrap'>
      {/* Left: Download Resume Button */}
      <a 
        href={samplePDF} 
        download="Resume.pdf" 
        className="flex items-center text-white font-medium px-4 py-2 rounded-full bg-gray-800 hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg text-sm whitespace-nowrap"
      >
        <FaDownload className="mr-2 text-sm" />
        <span>Download Resume</span>
      </a>

      {/* Right: Social Media Icons */}
      <div className='flex items-center gap-4 md:gap-6 text-lg md:text-2xl'>
        <a href="https://www.linkedin.com/in/patilsamarth" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300 transition'>
          <FaLinkedin />
        </a>
        <a href="https://github.com/samarth336/" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300 transition'>
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/XLspRnuLKy/" target="_blank" rel="noopener noreferrer">
          <img src={leetcodeLogo} alt="LeetCode" className='h-6 w-6 md:h-8 md:w-8' />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
