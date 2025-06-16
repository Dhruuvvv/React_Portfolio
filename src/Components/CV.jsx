import React from 'react'
import { HiOutlineDownload } from "react-icons/hi";


const CV = ({name,text}) => {
  return (
    <div className={`outline-none rounded-full top-10 px-2`}>
        <a href='' download="sample.pdf" className='flex items-center text-lg'>
            <div className={`${name}`}>
              {text}
            </div>
            <HiOutlineDownload size={25} />
        </a>
    </div>
  )
}

export default CV