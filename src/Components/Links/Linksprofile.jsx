import React from 'react'

const Linksprofile = () => {
  return (
    <>
      <div className='flex gap-3 px-8 text-sm max-sm:text-xs font-light max-sm:gap-2 text-black dark:text-white'>
        <a 
          href='https://www.instagram.com/_.dhruuv.__' 
          target='_blank' 
          className='hover:text-indigo-600 dark:hover:text-indigo-400'
        >
          Instagram
        </a>
        <a 
          href='https://github.com/Dhruuvvv/' 
          target='_blank'
          className='hover:text-indigo-600 dark:hover:text-indigo-400'
        >
          Github
        </a>
        <a 
          href='https://www.linkedin.com/in/dhruv-jariwala-310b90260/' 
          target='_blank'
          className='hover:text-indigo-600 dark:hover:text-indigo-400'
          >
          Linkedin
        </a>
      </div>
    </>
  )
}

export default Linksprofile