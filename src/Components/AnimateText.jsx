//ANIMATETEXT.JSX
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimateText = ({ onAnimationComplete }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const scrollingText = "A CREATIVE DEVELOPER • A CREATIVE DEVELOPER • A CREATIVE DEVELOPER • A CREATIVE DEVELOPER • A CREATIVE DEVELOPER • A CREATIVE DEVELOPER • ";

  const handleCapsuleClick = () => {
    setIsClicked(true);
    // Show portfolio after animation completes
    setTimeout(() => {
      setShowPortfolio(true);
      onAnimationComplete && onAnimationComplete();
    }, 1000); // 1 second animation duration
  };

  return (
    <div className='relative overflow-hidden min-h-screen'>
      {/* Background - always gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-200 via-indigo-200 to-indigo-300" />
      
      {/* White background that appears after click */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="fixed inset-0 bg-white z-5"
          />
        )}
      </AnimatePresence>

      {/* Scrolling background text - always moving */}
      <div className='fixed inset-0 flex items-center justify-center pointer-events-none'>
        <motion.div
          animate={{ x: [0, -50 + "%"] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear", repeatType: "loop" }}
          className='text-8xl md:text-9xl lg:text-[8rem] font-semibold text-black/90 whitespace-nowrap'
        >
          {scrollingText.repeat(2)}
        </motion.div>
      </div>

      {/* Welcome capsule - clickable */}
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <motion.button
          onClick={handleCapsuleClick}
          className="relative bg-primary shadow-xl text-black px-8 py-4 font-medium text-lg tracking-wider cursor-pointer hover:shadow-2xl transition-shadow duration-300"
          initial={{scale: 1,borderRadius: 100}}
          animate={isClicked ? { scale: 12.5,borderRadius: 0} : {scale: 1,borderRadius: 100}}
          transition={{duration: 1,ease: "easeInOut"}}
          disabled={isClicked}
        >
          <motion.span 
            animate={isClicked ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            WELCOME
          </motion.span>
        </motion.button>
      </div>

      {/* Portfolio content overlay */}
      {/* <AnimatePresence>
        {showPortfolio && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed inset-0 z-30 overflow-y-auto"
          >
            Portfolio will be rendered here by parent
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default AnimateText;