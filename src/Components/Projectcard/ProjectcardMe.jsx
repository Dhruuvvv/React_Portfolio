import React from 'react';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Animation from "../../Animation/Animation";
import { motion } from 'framer-motion';

const ProjectcardMe = () => {
  const baseClass = 'h-[55vh] w-[45vw] bg-slate-500 rounded-3xl outline-none shadow-slate-500 transition-all duration-300 group max-sm:w-[80vw] max-sm:h-[30vh] max-lg:w-[80vw] max-lg:h-[30vh]';

  return (
    <>
      <Animation>
        <motion.section
          className={`${baseClass} bg-[url('/img2.png')] bg-no-repeat bg-cover bg-center overflow-hidden`}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <div className="h-full flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base font-normal text-white flex justify-between p-7 bg-gradient-to-b from-slate-700 rounded-3xl max-sm:p-4 max-sm:text-lg max-lg:p-12 max-lg:text-3xl"
            >
              It's Mee <BsArrowUpRightCircleFill size={45} className="bg-black rounded-full text-white cursor-pointer" />
            </motion.div>
            <div className="bg-gradient-to-t from-slate-700 text-white pb-10 px-8 rounded-3xl text-xl max-sm:pb-6 max-sm:px-4 max-sm:overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl max-sm:text-xs max-sm:leading-relaxed max-sm:line-clamp-4 max-lg:text-3xl max-lg:line-clamp-3 max-lg:leading-relaxed"
              >
                Discover my personal space! Explore my journey, interests, and passions through this interactive and vibrant portfolio showcase.
              </motion.div>
            </div>
          </div>
        </motion.section>
      </Animation>
    </>
  );
};

export default ProjectcardMe;