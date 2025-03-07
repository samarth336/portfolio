import React from 'react';
import { CONTACT } from '../constants';
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='text-gray-300 py-20'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='text-4xl font-extrabold text-center mb-12'
      >
        Get in Touch
      </motion.h1>
      <div className='max-w-4xl mx-auto px-6'>
        <div className='flex flex-col items-center gap-6'>
          {/* Address Button */}
          <motion.a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className='flex items-center justify-center w-60 px-4 py-2 hover:bg-gray-600 transition-colors'
          >
            <FaMapMarkerAlt className='text-xl text-red-300 mr-2' />
            <span className='text-sm font-medium'>{CONTACT.address}</span>
          </motion.a>

          {/* Phone Button */}
          <motion.a
            href={`tel:${CONTACT.phoneNo}`}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className='flex items-center justify-center w-60 px-4 py-2 hover:bg-gray-600 transition-colors'
          >
            <FaPhone className='text-xl text-green-300 mr-2' />
            <span className='text-sm font-medium'>{CONTACT.phoneNo}</span>
          </motion.a>

          {/* Email Button */}
          <motion.a
            href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${CONTACT.email}`}
            target="_blank"
            rel="noopener noreferrer"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className='flex items-center justify-center w-60 px-4 py-2 hover:bg-gray-600 transition-colors'
          >
            <FaEnvelope className='text-xl text-gray-300 mr-2' />
            <span className='text-sm font-medium'>{CONTACT.email}</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
