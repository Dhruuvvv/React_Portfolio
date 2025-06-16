import React from 'react'
import {motion} from 'framer-motion'
import Navbar from '../Components/Navbar/Navbar'
import Textcard from '../Components/Projectcard/Textcard'
import Footer from '../Components/Footer/Footer'
import Bottomlink from '../Components/Footer/Bottomlink'
import ProjectcardMe from '../Components/Projectcard/ProjectcardMe'
import Skills from '../Components/Skills/Skills'

const About = () => {
  return (
    <>
      <section className='outline-none w-[100vw] bg-gradient-to-b from-white to-gray-100 dark:bg-gradient-to-b dark:from-slate-900 dark:to-black min-h-screen'>
        <Navbar />
          <div className='flex flex-col gap-5 text-center'>
            <div className='flex flex-col gap-7'>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ y: 50 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className='flex text-7xl font-bold h-[80vh] justify-center items-center max-lg:text-6xl max-sm:text-5xl max-sm:h-[65vh] text-black dark:text-white'
              >
                  Hey 👋🏼 I'm Dhruuv
              </motion.p>
              <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ y: 50 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="font-light text-2xl text-indigo-600 dark:text-indigo-400"
              >
                Web and App Developer
              </motion.h1>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ y: 50 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="text-xl font-light max-sm:text-base text-gray-600 dark:text-gray-300 px-3"
              >
                Welcome to my portfolio of captivating digital experiences. Explore my work and let's create something extraordinary together.
              </motion.p>
            </div>
            <div className='grid grid-cols-1 gap-5 place-items-center py-10 max-sm:grid-cols-1 max-lg:grid-cols-1 max-xl:grid-cols-1'>
              <ProjectcardMe />
            </div>
            <div className="py-36 flex flex-col gap-5 max-sm:py-14">
              <div className="flex justify-center items-center">
                  <Textcard text={"About"} className="hover:bg-indigo-300 dark:hover:bg-indigo-700 hover:text-indigo-800 dark:hover:text-indigo-100" />
              </div>
              <div className="flex flex-col gap-2">
                <motion.p
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ y: 50 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="text-4xl font-normal w-[50vw] mx-auto max-sm:text-2xl max-lg:text-3xl text-black dark:text-white"
                >
                  My expertise includes building responsive UIs, managing databases,
                  and ensuring robust application performance.
                </motion.p>
                <motion.p
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ y: 50 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  className="text-3xl font-normal w-[50vw] mx-auto text-gray-600 dark:text-gray-300 max-sm:text-xl max-lg:text-2xl"
                >
                  Passionate about tech innovation and problem-solving, I deliver
                  scalable and efficient web applications.
                </motion.p>
              </div>
            </div>
          </div>
          <Skills />
          <Footer />
          <Bottomlink />
      </section>
    </>
  )
}

export default About