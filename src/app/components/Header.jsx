'use client'

import React, {useRef} from "react";
import logo from "./Assets/logo.png";
import Image from "next/image";
import * as motion from "motion/react-client";

const Header = () => {
  const logoRef = useRef(null);
  return (

      <div className="flex flex-row justify-between items-center w-[100vw] p-6 fixed top-0 left-0 z-10000 bg-transparent backdrop-blur-sm">
        <motion.div ref={logoRef} className="logo" initial={{
          rotate: 0,
          scale: 1,
        }} whileTap={{
          rotate: 0,
          scale: 1.1,
        }} whileHover={{
          rotate: 360,
          scale: 1.2,
        }}>
          <Image src={logo} alt="logo" width={50} height={50} className="rounded-[50%]" />
        </motion.div>
        <div className="nav">
          <div className="flex flex-row gap-6 justify-between align-center">
            <motion.div className="nav-item cursor-pointer" initial={{
              scale: 1,
              y: 0,
            }} whileHover={{
              scale: 1.2,
              y: -5,
            }}>Home</motion.div>
            <motion.div className="nav-item cursor-pointer" initial={{
              scale: 1,
              y: 0,
            }} whileHover={{
              scale: 1.2,
              y: -5,
            }}>About</motion.div>
            <motion.div className="nav-item cursor-pointer" initial={{
              scale: 1,
              y: 0,
            }} whileHover={{
              scale: 1.2,
              y: -5,
            }}>Contact</motion.div>
            <motion.div className="nav-item " initial={{
              scale: 1,
              y: 0,
            }} whileHover={{
              scale: 1.2,
              y: -5,
            }}>Login</motion.div>
          </div>
        </div>
      </div>
 
  );
};

export default Header;
