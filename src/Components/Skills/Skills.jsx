import React from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiKotlin, SiPhp, SiDotnet, SiCplusplus, SiC } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Textcard from "../../Components/Projectcard/Textcard";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="outline-none flex flex-col justify-center items-center py-10">
      <Textcard text={"Skills"} className="hover:bg-indigo-300 dark:hover:bg-indigo-700 hover:text-indigo-800 dark:hover:text-indigo-100"/>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="grid grid-cols-4 gap-10 p-10 max-sm:gap-8 max-sm:px-5 max-sm:py-5 max-sm:grid max-sm:grid-cols-3"
      >
        <FaHtml5 size={70} className="text-orange-600 dark:text-orange-400" />
        <IoLogoCss3 size={70} className="text-blue-600 dark:text-blue-400" />
        <IoLogoJavascript size={70} className="text-yellow-500 dark:text-yellow-400" />
        <FaReact size={70} className="text-cyan-500 dark:text-cyan-400" />
        <RiTailwindCssFill size={70} className="text-teal-500 dark:text-teal-400" />
        <FaGithub size={70} className="text-black dark:text-white" />
        <VscVscode size={70} className="text-blue-700 dark:text-blue-500" />
        <SiKotlin size={70} className="text-purple-700 dark:text-purple-500" />
        <SiPhp size={70} className="text-indigo-700 dark:text-indigo-500" />
        <SiDotnet size={70} className="text-purple-600 dark:text-purple-400" title="ASP.NET Core MVC" />
        <SiCplusplus size={70} className="text-blue-800 dark:text-blue-600" />
        <SiC size={60} className="text-blue-900 dark:text-blue-700" />
      </motion.div>
    </section>    
  );
};

export default Skills;