import React from 'react'
import {motion} from 'framer-motion'
import Textcard from '../Components/Projectcard/Textcard'
import Projectcard from '../Components/Projectcard/Projectcard'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Bottomlink from '../Components/Footer/Bottomlink'

const Home = () => {
  return (
    <>
      <section className='outline-none w-full overflow-x-hidden overflow-y-hidden bg-gradient-to-b from-white to-gray-100 dark:bg-gradient-to-b dark:from-slate-900 dark:to-black'>
        <Navbar />
        <div className='h-[90vh] flex flex-col justify-center items-center gap-5'>
          <motion.p
            initial={{opacity:0,y:50}}
            animate={{opacity:1, y:0}}
            transition={{duration:1,ease:"easeOut", delay: 0.2}}
            className='text-7xl font-normal text-center text-black dark:text-white max-sm:text-5xl max-lg:text-6xl'
          >
            Let's craft exceptional digital experiences together.
          </motion.p>
          <motion.p
            initial={{opacity:0,y:50}}
            animate={{opacity:1, y:0}}
            transition={{duration:1,ease:"easeOut",delay:0.4}}
            className='text-2xl font-normal text-center text-gray-600 dark:text-gray-300 max-sm:text-lg max-lg:text-xl py-4'
          >
            Explore my design services, from user interface and experience to prototyping and testing.
          </motion.p>
          <motion.div
            initial={{opacity:0,y:50}}
            animate={{opacity:1, y:0}}
            transition={{duration:1,ease:"easeOut",delay:0.6}}
            className='flex gap-4 items-center max-sm:gap-3 max-sm:grid max-sm:grid-cols-2'
          >
            <h1 className='text-base font-normal text-indigo-600 dark:text-indigo-400 max-sm:text-center max-sm:text-base'>
              Expertise
            </h1>
            <Textcard text={"Web Design"} className="hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white" />
            <Textcard text={"Web Dev"} className="hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white" />
            <Textcard text={"App Dev"} className="hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white" />
          </motion.div>
        </div>
        <motion.div 
          initial={{opacity:0,y:50}}
          animate={{opacity:1, y:0}}
          transition={{duration:1,ease:"easeOut",delay:0.8}}
          className='flex flex-col items-center'
        >
          <Textcard text={"Projects"} className="hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white" />
          <div className='grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-lg:grid-cols-1 max-xl:grid-cols-1 mt-6'>
            <Projectcard 
              projectName={'Password generator'} 
              image={`bg-[url('/passgen.png')]`} 
              cn={`from-indigo-800 text-white`} 
              cn2={`from-purple-800 text-white`} 
              disc={'Create strong, secure passwords with ease. Customize length, numbers, and special characters to meet your needs. Stay safe online with unique passwords every time!'}
            />
            <Projectcard 
              projectName={'To-Do List'} 
              image={`bg-[url('/todolist.png')]`} 
              cn={'from-indigo-300'} 
              cn2={`from-indigo-400 via-indigo-300 text-black`} 
              disc={'Organize your tasks effortlessly. Add, edit, and track your to-dos with a simple, intuitive interface. Boost productivity and never miss a deadline!'}
            />
            <Projectcard 
              projectName={'Online Mock Test System'} 
              image={`bg-[url('/omts.png')]`} 
              cn={`from-zinc-600 text-white `}
              cn2={`from-zinc-600 via-zinc-500 text-white`} 
              disc={'Prepare smarter with our Online Mock Test System. Practice with timed quizzes, track your progress, and improve your skills for exams anytime, anywhere!'}
            />
            <Projectcard
              projectName={'Task Management'}
              image={`bg-[url('/taskmg.png')]`} 
              cn={`from-slate-600 text-white`}
              cn2={`from-slate-600 via-slate-500  text-white`}
              disc={'Streamline your workflow with our Task Management App. Prioritize, assign, and track tasks seamlessly to keep your projects on schedule and teams aligned!'}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{opacity:0,y:50}}
          animate={{opacity:1, y:0}}
          transition={{duration:1,ease:"easeOut",delay:1.0}}
        >
          <Footer />
          <Bottomlink />
        </motion.div>
      </section>
    </>
  )
}

export default Home