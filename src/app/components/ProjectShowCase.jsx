'use client'
import React from 'react';
import { motion, useDomEvent } from 'motion/react';
// Main Project Showcase Component
const ProjectShowcase = () => {
  

const projects = [
  {
    "id": 1,
    "title": "NGL Bomber",
    "description": "Bombs someone's NGL by spamming messages.",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d6/44/b6/d644b631-81e9-feb3-ff61-37777a3b7697/7.png/300x0w.jpg",
      "colspan": "1",
      "rowspan": "4"
  },
  {
    "id": 2,
    "title": "Head Tail Cricket",
    "description": "A multiplayer cricket game with engaging head or tail challenges.",
    "icon": "/images/htc.png",
            "colspan": "1",
      "rowspan": "3"
  },
  {
    "id": 3,
    "title": "TS API",
    "description": "One stop API for every AI features!",
    "icon": "https://ts-ai-api-shuddho.onrender.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg.55dd8553.jpeg&w=3840&q=75",
            "colspan": "2",
      "rowspan": "3"
  },
  {
    "id": 4,
    "title": "Smooth AI",
    "description": "Smooth AI lets you chat in a smooth UI",
    "icon": "/images/sai.png",
            "colspan": "3",
      "rowspan": "1"
  }
]
const spanClasses = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
};

const rowClasses = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
  4: "row-span-4",
};



    // Project Card Component
    const ProjectCard = ({ project, className }) => (
    <motion.div 
      className={"w-full bg-gray-800 rounded-xl flex flex-col"+className}
      style={{
        backgroundImage: `url(${project.icon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      onClick={()=>{
        // set whole thing to be positioned absolute and take full page!

      }}
    >
      <div className="desc p-6 w-full rounded-xl place-self-end bg-linear-to-b from-[#00000000] to-[#000000dd]">
        <h3 className='mt-3 text-left ml-3 text-xl font-bold'>{project.title}</h3>
        <p className='text-xs text-justify m-3'>{project.description}</p>
      </div>

    </motion.div>
    );

  return ( <div className='flex flex-row items-center justify-center w-screen h-fit p-6 mt-4'>
  <div className='grid gap-6 grid-cols-2 grid-rows-2 w-fit h-fit'
  >
    {projects.map(project => (
      <ProjectCard 
      key={project.id} 
      project={project} 
      className={`col-span-2 row-span-2 sm:col-span-1 sm:row-span-1`}
    />
    ))}
  </div></div>)
}

export default ProjectShowcase;
// MAGIC
