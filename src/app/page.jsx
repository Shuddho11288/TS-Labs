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
import Header from "./components/Header";
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
    return () => {
      lenis.destroy();
    };
  }, []);
  const heroRef = useRef(null);
  const bentoRef = useRef(null);
  const heroAnimationRef = useRef(null);
  const bentoSectionAnimationRef = useRef(null);
  const projectSectionAnimationRef = useRef(null);
  const { scrollYProgress: HeroScrollProgress } = useScroll({
    target: heroAnimationRef,
    offset: ["start end", "end end"],
  });

  const { scrollYProgress: bentoSectionScrollProgress } = useScroll({
    target: bentoSectionAnimationRef,
    offset: ["start end", "end end"],
  });

  const { scrollYProgress: bentoScrollProgress2 } = useScroll({
    target: bentoRef,
    offset: ["start end", "start center"],
  })

  const { scrollYProgress: bentoScrollProgress3 } = useScroll({
    target: bentoRef,
    offset: ["end end", "end 30%"],
  });
  const {scrollYProgress: ProjectShowcaseScrollProgress} = useScroll({
    target: projectSectionAnimationRef,
    offset: ["start end", "end end"],
  })
  const projectScale = useTransform(ProjectShowcaseScrollProgress, [0, 1], [10, 1]);
  const heroScale = useTransform(HeroScrollProgress, [0, 1], [1, 8]);
  const heroOpacity = useTransform(HeroScrollProgress, [0, 1], [1, 0]);
  const bentoTranslateX = useTransform(bentoSectionScrollProgress, [0, 1], ['0%', '-140%']);
  const opacity2 = useTransform(bentoScrollProgress2, [0,1], [0,1])
  const scale2 = useTransform(bentoScrollProgress2, [0,1], [0.5,1])
  const scale3 = useTransform(bentoScrollProgress3, [0,1], [1,0])
  const opacity3 = useTransform(bentoScrollProgress3, [0,1], [1,0])
  
  useEffect(() => {
    console.log(scale2, scale3, opacity2, opacity3)
  },[bentoScrollProgress2, bentoScrollProgress3])
  
  return (
    <div className="relative h-[2000dvh] max-w-[100dvw] flex flex-col items-center text-center">
      <Header/>
      <div className="w-full overflow-y-hidden sticky top-0">
      <motion.div ref={heroRef} style={{
        scale: heroScale,
        opacity: heroOpacity,
      }} className="hero-section h-screen items-center justify-center flex flex-col">
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
      </div>
      


      <div ref={heroAnimationRef} className="h-screen">

      </div>

      
        <motion.div className="sticky top-0 h-screen flex flex-col items-center justify-center" style={{
          translateX: bentoTranslateX,
      }}>
        <motion.div style={{
        opacity: opacity2 || opacity3,
        scale: scale2 || scale3,
      }} ref={bentoRef} className=" bento-grid-section">
        <div className="title mb-10 text-3xl">
          Discover Our Services
        </div>
        <BentoGrid></BentoGrid>      
      </motion.div>
      </motion.div>

      {/* <div  className="bento-section-animator h-screen">

      </div> */}


        <div className="w-full h-screen sticky top-0 overflow-hidden flex flex-col items-center justify-center">
                      <motion.div initial={{
              
            }} style={{
              opacity: useTransform(ProjectShowcaseScrollProgress, [0,1], [0,1]),
              scale: projectScale,
              translateY: '30px',
              overflowY: 'hidden',
            }}ref={bentoSectionAnimationRef}>
        <motion.div initial={{
          
        }} className="title text-3xl">
          Meet our top projects
          
        </motion.div>
        <ProjectShowcase></ProjectShowcase>
      </motion.div>
        </div>


      <div ref={projectSectionAnimationRef}  className="ProjectShowCaseAnimator h-screen">

      </div>
     
      





      
    </div>
  );
}
