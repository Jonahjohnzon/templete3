import React,{useEffect, useRef, useState} from 'react'
import {motion,useInView} from 'framer-motion'

const About = () => {
    const [show, setshow] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref)
    const slide={
      hidden:{
        y:-20,
        opacity:0
      },
      show:{
        y:0,
        opacity:1,
        transition:{
          type:'tween',
          duration:0.1,
          delay:0.2,
          stiffness:400,
          when:'beforeChildren',
          staggerChildren:0.1
        }
      }
     
    }
    useEffect(()=>{
  if(isInView){
    setshow(true)
  }
    },[isInView])
  return (
    <div className=' flex justify-center  relative min-h-[200px]' style={{background:"url('/bg2.jpeg')"}}>
        <div className=' absolute w-full h-full bg-blue bg-opacity-80 z-10' ref={ref}></div>
        {show&&<motion.div  variants={slide} initial='hidden' animate='show' className=' py-32 w-[90%] sm:w-[70%] xl:w-[50%] 3xl:w-[40%] text-center text-white relative z-20 ' >
            <h1 className=' mb-14 text-6xl font-bold'>ABOUT US</h1>
            <p className=' text-xl text-start'>Acme Consulting has been in operation since 2012, helping clients large and small with strategic expansion, accelerating business outcomes, and executing on large-scale initiatives. Our team has a wealth of experience and is ready to jump in.</p>
        </motion.div>}
    </div>
  )
}

export default About