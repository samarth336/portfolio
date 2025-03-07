import React from 'react';
import { FaGithub, FaAws } from 'react-icons/fa'; // GitHub, AWS Icons
import { SiPostman, SiFigma } from 'react-icons/si'; // Postman, Figma Icons
import { motion } from "framer-motion";

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

const Tools = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 1.5 }} 
        className='my-20 text-center text-4xl'>
        Tools
      </motion.h1>

      <motion.div 
        whileInView={{ opacity: 1, x: 0 }} 
        initial={{ opacity: 0, x: -100 }} 
        transition={{ duration: 1.5 }} 
        className='flex flex-wrap items-center justify-center gap-8'>
        
        {/* GitHub Icon */}
        <motion.div variants={iconVariants(3)} initial='initial' animate="animate" className='w-32 h-32 rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center'>
          <FaGithub className='text-6xl text-gray-500' />
          <p className='text-center text-xl mt-2'>GitHub</p>
        </motion.div>

        {/* Postman Icon */}
        <motion.div variants={iconVariants(4)} initial='initial' animate="animate" className='w-32 h-32 rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center'>
          <SiPostman className='text-6xl text-orange-500' />
          <p className='text-center text-xl mt-2'>Postman</p>
        </motion.div>
        
        {/* Figma Icon */}
        <motion.div variants={iconVariants(6)} initial='initial' animate="animate" className='w-32 h-32 rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center'>
          <SiFigma className='text-6xl text-blue-500' />
          <p className='text-center text-xl mt-2'>Figma</p>
        </motion.div>
        
        {/* AWS Icon */}
        <motion.div variants={iconVariants(5)} initial='initial' animate="animate" className='w-32 h-32 rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center'>
          <FaAws className='text-6xl text-yellow-500' />
          <p className='text-center text-xl mt-2'>AWS</p>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Tools;
