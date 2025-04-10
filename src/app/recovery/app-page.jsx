'use client'
import Image from "next/image";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import Lenis from "lenis";
import { use, useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "framer-motion";
import { Bangers } from "next/font/google";
import BentoGrid from "./components/BentoGrid";
import ProjectShowcase from "./components/ProjectShowCase";
const quickSand = Bangers({
  subsets: ['latin'],
  weight: ['400'],
}); 
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  const heroRef = useRef(null);
  const bentoRef = useRef(null);

  const { scrollYProgress: bentoScrollProgress } = useScroll({
    target: bentoRef,
    offset: ["start end", "start 30%"],
  });

  const { scrollYProgress: bentoScrollProgress2 } = useScroll({
    target: bentoRef,
    offset: ["start end", "start center"],
  })

  const { scrollYProgress: bentoScrollProgress3 } = useScroll({
    target: bentoRef,
    offset: ["end end", "end 30%"],
  });
  const scale = useTransform(bentoScrollProgress, [0, 1], [1, 3]);
  const opacity = useTransform(bentoScrollProgress, [0,1], [1,0])
  const opacity2 = useTransform(bentoScrollProgress2, [0,1], [0,1])
  const scale2 = useTransform(bentoScrollProgress2, [0,1], [0.5,1])
  const scale3 = useTransform(bentoScrollProgress3, [0,1], [1,0])
  const opacity3 = useTransform(bentoScrollProgress3, [0,1], [1,0])
  
  useEffect(() => {
    console.log(scale2, scale3, opacity2, opacity3)
  },[bentoScrollProgress2, bentoScrollProgress3])
  
  return (
    <div className=" items-center flex flex-col text-center w-[100%]">
      <motion.div ref={heroRef} style={{
        scale: scale,
        opacity: opacity,
      }} className="hero-section z-[-1] fixed top-0 h-screen items-center justify-center flex flex-col">
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[180%] skew-y-12 absolute",
        )}
      />
        <motion.div className=" title text-6xl font-bold z-2">
          Introducing <span className={"ts-labs text-blue-300 animate-pulse "+quickSand.className}>TS LABS</span>
        </motion.div>
        <motion.div className="short-desc w-[90%] max-w-[800px] text-xs mt-3 text-gray-400">
        Bridging innovation and technology, TS Labs delivers cutting-edge AI APIs, engaging games, powerful management tools, and scalable SaaS solutions to transform businesses and entertainment.
        </motion.div>
        {/* Wobbling Text with an interval! Showing Scroll Down */}
        <motion.div   animate={{
          y: [0,-20,0,-10,0,-5,0]
  }}
  transition={{
    duration: 0.8, // Duration of the wobble effect
    ease: "easeInOut",
    repeat: Infinity, // Infinite looping wobble
    repeatDelay: 1, // Delay between each loop
  }} className="wobbling-text mt-10 absolute top-[90dvh]">
          <span className="text-xs text-gray-400">Scroll Down</span>
        </motion.div>
      </motion.div>


      <div className="h-screen">

      </div>

      <div className="">
        <motion.div className="sticky" style={{
        opacity: opacity3,
      
      }}>
        <motion.div style={{
        opacity: opacity2 || opacity3,
        scale: scale2 || scale3,
      }} ref={bentoRef} className=" mb-10 bento-grid-section">
        <div className="title mb-10 text-3xl">
          Discover Our Services
        </div>
        <BentoGrid></BentoGrid>      
      </motion.div>
      </motion.div>
            <div className=" flex flex-col items-center text-center mt-[200px]">
        <div className="title text-3xl">
          Meet our top projects
          
        </div>
        <ProjectShowcase></ProjectShowcase>
      </div>
      </div>
      





      
    </div>
  );
}
