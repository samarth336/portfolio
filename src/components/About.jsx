import React from 'react';
import aboutimage from '../assets/about.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>
      <div className='flex flex-wrap'>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: -100 }} 
          transition={{ duration: 0.5 }} 
          className='w-full lg:w-1/2 lg:p-8'
        >
          <div className='flex items-center justify-center'>
            <img src={aboutimage} className='w-[70%] rounded-3xl opacity-[0.8]' alt="About me" />
          </div>
        </motion.div>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: 100 }} 
          transition={{ duration: 0.5 }} 
          className='w-full lg:w-1/2'
        >
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'>
              I am a software engineer passionate about building applications that truly help users solve their problems. My expertise lies in developing innovative, user-focused solutions using technologies like the MERN stack. I’ve worked on a range of projects, from Fact checking AI-powered tools.
              <br />
              What excites me most is creating unique features in my projects and pushing the boundaries of technology to make a positive impact. I am particularly curious about the future of AI and its potential to transform lives. I aim to develop solutions that not only innovate but also contribute to society meaningfully.
              <br />
              I look forward to collaborating with like-minded individuals to deliver impactful projects that solve real-world challenges. For me, every project is an opportunity to learn, grow, and make a difference.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
