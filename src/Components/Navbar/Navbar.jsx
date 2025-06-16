import React from 'react'
import { Link } from "react-router-dom";
import Darkmode from '../Darkmode';
import CV from '../CV';

const Navbar = () => {
  const navbarClass = "text-md font-light py-1.5 max-sm:py-3 px-2 items-center m-1";

  return (
    <>
      <nav className='flex justify-center items-center'>
        <div className='flex outline-none rounded-full fixed top-10 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg z-50 dark:bg-darkgrey/30 dark:text-white' style={{background: "rgba(255, 255, 255, 0.2)"}}>
          <ul className='flex gap-1.5 cursor-pointer items-center px-2'>
            <Link to={"/home"} className={`${navbarClass}`}>
                Home
            </Link>
            <Link to={"/about"} className={`${navbarClass}`}>
                About
            </Link>
            <Link to={"/contact"} className={`${navbarClass}`}>
                Contact
            </Link>
            <Darkmode className={`${navbarClass}`} />
            <CV className={`${navbarClass}`} />
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar