import React,{useEffect, useRef, useState} from 'react'
import {motion,useInView} from 'framer-motion'

const Outcomes = () => {
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
    
    const children={
      hidden:{
       opacity:0,
       y:-20,
      },
      show:{
        opacity:1,
        y:0
      }}
  return (
    <div className=' flex justify-center min-h-[500px] text-blue bg-silver py-40 ' ref={ref}>
         {show&&<motion.div variants={slide} initial='hidden' animate='show'  className=' w-[90%] sm:w-[85%] xl:w-[60%] 3xl:w-[50%]'>
            <h1 className='text-5xl sm:text-6xl font-bold mb-20 text-center '>OUTCOMES</h1>
            <div>
                <motion.div variants={children} className=' flex flex-col sm:flex-row justify-between w-full pt-5 border-t-[1px] border-t-blue border-opacity-5 mb-10'>
                    <h2 className=' sm:w-[40%] text-3xl sm:text-4xl font-bold'>1. Information & Advice</h2>
                    <p className='  sm:w-[60%] text-lg sm:text-xl'>{"Big Corp will have the information and the advice needed to make an informed decision. While {{first_name}} will be the partner leading the engagement, you will have access to any other specialists or partners that you need to advise you on this matter."} </p>
                </motion.div>
                <motion.div variants={children} className=' flex flex-col sm:flex-row justify-between w-full pt-5 border-t-[1px] border-t-blue border-opacity-5 mb-10'>
                    <h2 className=' sm:w-[40%] text-3xl sm:text-4xl font-bold'>2. Decision </h2>
                    <div className=' sm:w-[60%] text-lg sm:text-xl'>
                        
                    <p>{"{{company_name}} will work with you to ensure that a clear decision is made for FY2020 across: "} </p>
                    <div className=' pl-10'><p><span className=' text-yellow'>a.</span> Is Asia the Right Market? </p></div>
                    <div  className=' pl-10' ><p><span className=' text-yellow'>b.</span> If yes, which markets should we target in Asia?  </p></div>
                    </div>
                </motion.div>
                <motion.div variants={children} className=' flex-col sm:flex-row flex justify-between w-full py-5 border-y-[1px] border-y-blue border-opacity-5 mb-10'>
                    <h2 className=' sm:w-[40%] text-3xl sm:text-4xl font-bold'>3. Plan </h2>
                    <p className=' sm:w-[60%] text-lg sm:text-xl'>{"Regardless of what decision is made, the early stages of an excellent launch plan will have been made and will continue to be the intellectual property of Big Corp. If you decide not to move ahead in FY2025, you will have the ability to use this work to inform future decisions around this opportunity - as well as potentially launch into certain markets incredibly quickly if an exciting opportunity emerges. "} </p>
                </motion.div>
            </div>
        </motion.div>}
    </div>
  )
}

export default Outcomes