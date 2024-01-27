import React,{useEffect, useRef, useState} from 'react'
import Tab from './Tab'
import {motion,useInView} from 'framer-motion'

const Goals = () => {
    const [show, setshow] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref)
    const slide={
        hidden:{
          y:-10,
          opacity:0
        },
        show:{
          y:0,
          opacity:1,
          transition:{
            duration:0.1,
            delay:0.3,
            stiffness:400,
            when:'beforeChildren',
            staggerChildren:0.1
          }
        }
       
      }
      const children={
        hidden:{
         opacity:0,
         y:-20,
        },
        show:{
          opacity:1,
          y:0
        }}

        useEffect(()=>{
            if(isInView){
              setshow(true)
            }
              },[isInView])
  return (
    <div className=' w-full flex flex-col min-h-[1000px] justify-center text-xl items-center text-blue py-32 ' ref={ref}>
         {show&&<motion.div variants={slide} initial='hidden' animate='show'  className=' w-[90%] sm:w-[70%] xl:w-[55%] 3xl:w-[44%] pb-32'>
        <h1 className=' text-5xl sm:text-6xl font-bold  mb-20 text-center'>GOALS</h1>
         <motion.div  variants={children} className=' mb-5' >
            <Tab   name={"1. Is Asia the right choice?"}  type={"a"}/>
            </motion.div>
       <motion.div variants={children} className=' mb-5'>
            <Tab   name={"2. Which Asian markets should Big Corp prioritise?"}  type={"b"}/>
            </motion.div>
       <motion.div  variants={children}>
            <Tab  name={"3. Build out a robust initial launch plan"}  type={"c"}/>
            </motion.div>
        </motion.div>}
        <div>
            <div style={{backgroundImage:"url('/photo.jpeg')"}} className=' h-[300px] xl:h-[550px] w-[100vw] bg-cover bg-center relative'>
                <div className=' bg-blue w-full h-full bg-opacity-40'></div>
            </div>
        </div>
    
    </div>
  )
}

export default Goals