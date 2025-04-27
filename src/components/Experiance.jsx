import React from 'react'
import {EXPERIENCES } from '../constants'
import { motion } from "framer-motion"
export default function Experiance() {
   return (
      <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}}
        transition={{duration:0.5}} className='my-20 text-center text-4xl'>Experiance</motion.h1>
        <div>
          {EXPERIENCES.map((EXPERIENCES, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
             <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
               <h3 className=' mb-2 text-2xl font-semibold'>{EXPERIENCES.role}</h3>
               <h1 className=' mb-2 font-semibold'>{EXPERIENCES.company}</h1>
               <p className='mb-4 text-neutral-400 w-[50vw]'>{EXPERIENCES.description}</p>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white-900'>{EXPERIENCES.year}</span>
             </motion.div>
            </div>
          ))}
  
          <div></div>
        </div>
      </div>
    );
}
