import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar/Navbar';
import { Link } from "react-router-dom";
import Bottomlink from '../Components/Footer/Bottomlink';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_PUBLIC_KEY
    )
      .then((result) => {
        setStateMessage('Message sent successfully!');
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); 
      }, (error) => {
        setStateMessage('Something went wrong, please try again later.');
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000);
      });

    e.target.reset();
  };

  return (
    <>
      <section id='contact' className='w-screen min-h-screen outline-none bg-gradient-to-b from-white to-gray-100 dark:bg-gradient-to-b dark:from-slate-900 dark:to-black'>
        <Navbar />
        <div className='min-h-screen flex flex-col'>
          <div className='flex flex-row items-center justify-center flex-grow max-sm:flex-col max-sm:px-4 max-lg:px-6'>
            {/* Left Section: Text */}
            <div className='w-1/2 mt-20 flex flex-col items-center justify-center max-sm:w-full max-sm:mt-10 max-sm:mb-6 max-lg:mt-12'>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ y: 50 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className='text-7xl font-normal text-center max-sm:text-4xl max-lg:text-5xl text-black dark:text-white'
              >
                Let's work together.
              </motion.p>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ y: 50 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className='text-7xl font-normal text-center text-gray-600 dark:text-gray-300 max-sm:text-4xl max-lg:text-5xl py-2'
              >
                <Link to={"/contact"} className="hover:opacity-70">Get in touch.</Link>
              </motion.p>
            </div>

            {/* Right Section: Contact Form */}
            <div className='w-1/2 flex flex-col items-center justify-center mt-28 max-sm:w-full max-sm:mt-0 max-sm:pt-4 max-lg:mt-12'>
              <div className='bg-white dark:bg-slate-800 p-8 max-sm:p-6 max-lg:p-6 rounded-lg shadow-lg w-full max-w-md max-sm:max-w-full max-lg:max-w-sm'>
                <h2 className='text-2xl font-semibold text-center text-black dark:text-white mb-6 max-sm:text-xl max-lg:text-xl'>Send Me a Message</h2>
                <form onSubmit={sendEmail} className='space-y-4'>
                  <input
                    type='text'
                    name='user_name' // Must match the template variable
                    placeholder='Your Name'
                    className='w-full px-4 py-2 max-sm:py-1.5 max-lg:py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-slate-700 dark:text-white dark:border-slate-600 text-base max-sm:text-sm max-lg:text-sm'
                    required
                  />
                  <input
                    type='email'
                    name='user_email' // Must match the template variable
                    placeholder='Your Email'
                    className='w-full px-4 py-2 max-sm:py-1.5 max-lg:py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-slate-700 dark:text-white dark:border-slate-600 text-base max-sm:text-sm max-lg:text-sm'
                    required
                  />
                  <textarea
                    name='message' // Must match the template variable
                    placeholder='Your Message'
                    rows='4'
                    className='w-full px-4 py-2 max-sm:py-1.5 max-lg:py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-slate-700 dark:text-white dark:border-slate-600 text-base max-sm:text-sm max-lg:text-sm'
                    required
                  ></textarea>
                  <button
                    type='submit'
                    className='w-full bg-indigo-600 text-white py-2 max-sm:py-1.5 max-lg:py-1.5 rounded-lg hover:bg-indigo-700 transition duration-300 text-base max-sm:text-sm max-lg:text-sm'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                  {stateMessage && <p className='text-center text-sm mt-2'>{stateMessage}</p>}
                </form>
              </div>
            </div>
          </div>
          <Bottomlink />
        </div>
      </section>
    </>
  );
};

export default Contact;