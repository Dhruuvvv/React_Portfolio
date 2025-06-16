import React from 'react'

const Textcard = ({text, className}) => {
  return (
    <div className={`text-base font-light rounded-2xl bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800 px-5 py-2 shadow-md text-indigo-800 dark:text-indigo-100 ${className}`}>
      {text}
    </div>
  )
}

export default Textcard