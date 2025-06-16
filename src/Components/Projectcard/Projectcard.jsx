import React, { useState } from 'react';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Animation from "../../Animation/Animation";
import { motion } from 'framer-motion';

const Projectcard = ({ projectName, image, cn, cn2, disc }) => {
  const baseClass = 'h-[55vh] w-[45vw] bg-slate-500 rounded-3xl outline-none shadow-slate-500 transition-all duration-300 group max-sm:w-[80vw] max-sm:h-[30vh] max-lg:w-[80vw] max-lg:h-[30vh]';

  return (
    <Animation>
      <motion.section
        className={`${baseClass} ${image} bg-no-repeat bg-cover bg-center overflow-hidden transition-all duration-300`}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <div className='h-full flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`font-normal flex justify-between p-7 bg-gradient-to-b rounded-3xl text-xl max-sm:p-4 max-sm:text-lg max-lg:p-12 max-lg:text-3xl ${cn}`}
          >
            {projectName} <BsArrowUpRightCircleFill size={45} className="bg-black rounded-full text-white cursor-pointer max-sm:size-35" />
          </motion.div>
          <div 
            className={`min-h-[20vh] flex justify-end items-end bg-gradient-to-t ${cn2} pb-10 px-8 rounded-b-3xl text-center max-sm:min-h-[15vh] max-sm:pb-4 max-sm:px-3 max-lg:min-h-[20vh] max-lg:pb-6 max-lg:px-4 max-sm:overflow-hidden max-lg:overflow-hidden ${cn2}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl max-sm:text-xs max-sm:leading-relaxed max-sm:line-clamp-4 max-lg:text-3xl max-lg:line-clamp-3 max-lg:leading-relaxed"
            >
              {disc}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Animation>
  );
};

export default Projectcard;