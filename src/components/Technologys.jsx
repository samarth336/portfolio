import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';     // React.js Icon
import { SiMongodb, SiFirebase, SiFlutter, SiTypescript, SiDart, SiPython } from 'react-icons/si'; // MongoDB, Firebase, Flutter, TypeScript, Dart Icons
import { FaNodeJs } from 'react-icons/fa';  // Node.js Icon
import { DiJavascript1, DiJava } from 'react-icons/di'; // JavaScript, Java Icons
import { motion } from "framer-motion";
import genai from '../assets/genai.jpeg';  // Import GenAI image

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 1.5 }} 
        className='my-20 text-center text-4xl'>
        Technologies & Tools
      </motion.h1>

      <motion.div 
        whileInView={{ opacity: 1, x: 0 }} 
        initial={{ opacity: 0, x: -100 }} 
        transition={{ duration: 1.5 }} 
        className='flex flex-wrap items-center justify-center gap-8'>
        
        {/* Python */}
        <motion.div variants={iconVariants(4)} initial='initial' animate="animate" className='w-32 h-32 rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center'>
          <SiPython className='text-6xl text-blue-600' />
          <p className='text-center text-xl mt-2'>Python</p>
        </motion.div>


        {/* JavaScript Icon */}
        <motion.div variants={iconVariants(2)} initial='initial' animate="animate" className='w-32 h-32 rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center'>
          <DiJavascript1 className='text-6xl text-yellow-500' />
          <p className='text-center text-xl mt-2'>JavaScript</p>
        </motion.div>

        {/* React.js Icon */}
        <motion.div variants={iconVariants(2.5)} initial='initial' animate="animate" className='w-32 h-32 rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center'>
          <RiReactjsLine className='text-6xl text-cyan-400' />
          <p className='text-center text-xl mt-2'>React.js</p>
        </motion.div>
        
        {/* Node.js Icon */}
        <motion.div variants={iconVariants(5)} initial='initial' animate="animate" className='w-32 h-32 rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center'>
          <FaNodeJs className='text-6xl text-green-400' />
          <p className='text-center text-xl mt-2'>Node.js</p>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Technologies;
