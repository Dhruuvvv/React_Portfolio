import React from 'react'
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-[35vw] w-[100vw] '>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='text-4xl font-normal text-center text-black dark:text-white'
        >
          Let's work together.
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ y: 50 }}
          transition={{ duration: 1, ease: "easeOut", delay:0.2 }}
          className='text-4xl font-normal text-center text-gray-600 dark:text-gray-300 cursor-pointer'
        >
          <Link to={"/contact"} className="hover:opacity-70">
            Get in touch.
          </Link>
        </motion.p>
      </div>
    </>
  )
}

export default Footer