import React,{useEffect, useRef, useState} from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import {motion,useInView} from 'framer-motion'

const Ceo = () => {
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
          }
        }
       
      }
      useEffect(()=>{
        if(isInView){
          setshow(true)
        }
},[isInView])
  return (
    <div className=' w-full pb-20 relative' style={{backgroundImage:"url('/bg.avif')"}}>
        <div className=' absolute z-20 bg-blue h-full w-full bg-opacity-90'></div>
        <div className=' relative z-30 text-white  flex flex-col items-center pt-40 '>
            <div className=' mb-10'>
                <div className=' flex justify-center items-center w-32 h-32 bg-cover bg-center  rounded-full' style={{backgroundImage:"url('/profile.avif')"}}></div>
            </div>
        <div className='  min-h-[300px] flex justify-center text-green' ref={ref}>
        {show&&<motion.div variants={slide} initial='hidden' animate='show' className=' w-[100%] sm:w-[90%]  2xl:w-[70%] 3xl:w-[55%] flex flex-col items-center'> 
            <div className=' flex w-full mb-20 '>
                <div className=' flex flex-col items-center justify-between w-[20%]  sm:w-[10%]'>
                <div>
                    <div className=' w-10 h-10 flex justify-center items-center bg-yellow rounded-full'>
                <FaQuoteLeft />
                </div>
                </div>
                <div className=' h-full w-1 bg-yellow'></div>
                </div>
                <div className=' w-full'>
                    <p className=' text-xl sm:text-3xl'>Acme consulting gave our firm unparalleled service and advice for our global expansion - we saved millions of dollars and completed the initial rollout faster than we thought possible</p>
                </div>
             
            </div>
            <div className=' text-4xl text-center'>
                    <p className=' font-bold mb-5'>Jessica Johannes</p>
                    <p className=' text-xl'>CEO, Amaze Inc.</p>
                </div>
        </motion.div>}
    </div>
        </div>
    </div>
  )
}

export default Ceo