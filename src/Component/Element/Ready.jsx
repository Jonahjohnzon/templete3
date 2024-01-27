import React,{useEffect, useRef, useState} from 'react'
import {motion,useInView} from 'framer-motion'

const Ready = () => {
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
    <div className=' bg-yellow py-10 sm:py-16 flex flex-col items-center' >
        <div style={{backgroundImage:"url('/shake.gif')"}} className=' mb-10  bg-center w-28 h-28 rounded-full '></div>
        <p className=' text-3xl sm:text-[45px] font-bold text-center text-blue w-[90%] sm:w-[50%] lg:w-[80%] 3xl:w-[40%] mb-20'>Click below to accept and sign this proposal</p>
        <p className=' hidden sm:block text-white text-2xl font-bold mb-10 bg-blue bg-opacity-30 px-20 py-7 rounded-md'>Accept & Sign</p>
        <p className=' hidden sm:block text-sm mb-10' ref={ref}>ACCEPTED BY</p>
        {show &&<motion.div variants={slide} initial='hidden' animate='show' className='hidden p-5 pt-10 sm:flex items-start w-[80%] sm:w-[50%] xl:w-[30%] 3xl:w-[22%] bg-white rounded-md justify-between flex-col'>
        <div className='hidden sm:block'><h1 className=' text-3xl italic pb-10 font-bold'>Jane Doe</h1></div>
        <div className=' w-full hidden sm:flex items-center justify-between pt-5 border-t-[1px] border-t-blue border-opacity-20'><p>Jane Doe</p><p></p>08/09/2022</div>
        </motion.div>}
    </div>
  )
}

export default Ready