import React from 'react'
import {motion} from 'framer-motion'
import Navbar from '../Components/Navbar/Navbar'
import { Link } from "react-router-dom";
import CV from '../Components/CV';
import Linksprofile from '../Components/Links/Linksprofile';

const Contact = () => {
  return (
    <>
      <section id='contact' className='w-screen min-h-screen outline-none bg-gradient-to-b from-white to-gray-100 dark:bg-gradient-to-b dark:from-slate-900 dark:to-black'>
        <Navbar />
        <div className='min-h-screen flex flex-col'>
          <div className='flex flex-col items-center justify-center flex-grow'>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ y: 50 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className='text-7xl font-normal text-center max-sm:text-5xl max-lg:text-6xl text-black dark:text-white'
            >
                Let's work together.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ y: 50 }}
              transition={{ duration: 1, ease: "easeOut", delay:0.2 }}
              className='text-7xl font-normal text-center text-gray-600 dark:text-gray-300 max-sm:text-5xl max-lg:text-6xl py-2'
            >
                <Link to={"/contact"} className="hover:opacity-70">Get in touch.</Link>
            </motion.p>
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ y: 50 }}
              transition={{ duration: 1, ease: "easeOut", delay:0.3}}
              className='text-base font-light rounded-full bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800 px-3 py-1 shadow-md text-indigo-800 dark:text-indigo-100 hover:bg-indigo-300 dark:hover:bg-indigo-700 hover:text-indigo-800 dark:hover:text-indigo-100'
            >  
              <CV name={`px-3 py-2 text-lg`} text={"Download"} />
            </motion.div>
          </div>
          <div className='flex justify-between items-center px-5 py-5'>
            <h1 className='text-sm font-light text-black dark:text-white'>@ Dhruuv 2025</h1>
            <Linksprofile />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact