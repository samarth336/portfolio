import React from 'react';
import { HERO_CONTENT } from '../constants'; // Importing content from constants.js
import profilepic from '../assets/kevinRushProfile.jpg'; // Replace with your own profile image path
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-0 lg:mb-26 mt-4'>
      <div className='flex flex-wrap lg:flex-nowrap'>
        {/* Left side: Text content */}
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='pb-16 text-6xl font-medium tracking-tight lg:mt-16 lg:text-6xl'
            >
              SAMARTH<br /> PATIL
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'
            >
              Innovative Developer Full Stack Technologies
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='my-2 max-w-xl py-6 font-light tracking-tighter'
            >
              {HERO_CONTENT} {/* Your portfolio content goes here */}
            </motion.p>
          </div>
        </div>

        {/* Right side: Profile image */}
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-end lg:p-8 mt-14'>
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilepic} // Your profile image here
            alt="profile"
            className='lg:max-w-sm max-w-xs rounded-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
