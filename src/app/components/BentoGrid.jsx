'use client'
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";
const bentoItems = [
  { title: "Games", image: "/Images/games.jpg", colspan: 1, rowspan: 3 },
  { title: "SaaS", image: "/Images/saas.jpg", colspan: 2, rowspan: 1 },
  { title: "Tools", image: "/Images/tools.jpg", colspan: 1, rowspan: 2 },
  { title: "Others", image: "/Images/others.jpg", colspan: 1, rowspan: 2 },
];
const spanClasses = {
  1: "sm:col-span-1",
  2: "sm:col-span-2",
  3: "sm:col-span-3",
  4: "sm:col-span-4",
};

const rowClasses = {
  1: "sm:row-span-1",
  2: "sm:row-span-2",
  3: "sm:row-span-3",
  4: "sm:row-span-4",
};
export default function BentoGrid() {
  const bentoItemsRefs = useRef([]);
  const [isHovering, setIsHovering] = useState([]);
  useEffect(() => {
   for (let i = 0; i < bentoItems.length; i++) {
    
    setIsHovering(
      (prev) => {
        const newState = [...prev];
        newState[i] = false;
        return newState; 
      }
    )
   }
  }, []);
  return (
    <div className="flex items-center justify-center gap-6 p-6">
      <div className="grid grid-cols-3 grid-rows-4 sm:grid-cols-3 sm:grid-rows-3 gap-6 w-full h-fit sm:h-[70dvh]">

      {bentoItems.map((item, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onMouseEnter={() => setIsHovering((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            })}
            onMouseLeave={() => setIsHovering((prev)=>{
              const newState = [...prev];
              newState[index] = false;
              return newState;
            })}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.1 }}
            className={`relative flex flex-col items-center justify-center 
              rounded-2xl overflow-hidden shadow-lg cursor-pointer col-span-3 row-span-1 
              ${spanClasses[item.colspan]} 
              ${rowClasses[item.rowspan]}`}          >
            <div className="relative w-full h-full">
              {/* Base image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Edge blur overlay */}
              <motion.div
                className="absolute inset-0"
                initial={{ backdropFilter: "blur(0px)" }}
                animate={{ backdropFilter: "blur(0px)" }}
                whileHover={{ backdropFilter: "blur(0px)" }}
                style={{
                  background:
                    'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%)',
                  mixBlendMode: 'multiply',
                  backdropFilter: "blur(8px)", // Explicitly defined
                  transition: { duration: 0.1 }, // Smooth transition
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></motion.div>
            </div>

            <div className="absolute flex flex-col items-center justify-center inset-0 bg-black/40 flex items-center justify-center text-white text-xl font-semibold">
              {item.title}
              { isHovering[index] &&
              <motion.div initial={{
                opacity: 0,
                scale: 0,
              }}animate={{
                opacity: 1,
                scale: 1,
              }} className="desc text-xs w-[80%] text-justify text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam tempore cum aspernatur perferendis magnam culpa ea molestias quasi debitis, incidunt harum, voluptates natus laudantium. Saepe in veritatis illo eligendi similique.           
                   </motion.div>}
            </div>
          </motion.div>
        );
      })}</div>
    </div>
  );
}
