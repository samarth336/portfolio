import React from 'react';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'; // Import the download icon
import leetcodeLogo from '../assets/leetcode.png'; // Import LeetCode logo image
import codeforces from '../assets/codeforces.png'; // Import Codeforces logo image
import samplePDF from '../assets/Resume.pdf'; // Import the PDF file

const Navbar = () => {
  return (
    <nav className='px-8 py-6 flex items-center justify-between'>
      {/* Download Resume Button */}
      <div className='flex items-center'>
        <a 
          href={samplePDF} 
          download="Resume.pdf" 
          rel="noopener noreferrer" 
          className="flex items-center text-white font-medium px-3 py-1.5 rounded-full hover:bg-black transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          <FaDownload className="mr-2 text-sm" /> {/* Smaller Download Icon */}
          <span className="text-sm">Download Resume</span> {/* Smaller text */}
        </a>
      </div>

      {/* Social Media Icons Section */}
      <div className='flex items-center gap-6 text-white text-2xl'>
        <a href="https://www.linkedin.com/in/patilsamarth" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300 transition duration-300'>
          <FaLinkedin />
        </a>
        <a href="https://github.com/samarth336/" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300 transition duration-300'>
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/XLspRnuLKy/" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300 transition duration-300'>
          <img src={leetcodeLogo} alt="LeetCode" className='h-8 w-8' /> {/* Adjusted size */}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
