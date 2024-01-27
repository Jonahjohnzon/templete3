import React,{useEffect, useRef, useState} from 'react'
import {motion,useInView} from 'framer-motion'

const Proposal = () => {
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
      y:0,
      transition:{
        type:'tween',
        duration:0.5,
      }
    }}
  return (
    <div className=' w-full flex justify-center text-xl min-h-[1000px] items-center text-blue py-40' ref={ref}>
        {show&&<motion.div variants={slide} initial='hidden' animate='show' className=' w-[90%] sm:w-[70%] xl:w-[55%] 3xl:w-[40%]'>
            <h1 className=' text-5xl sm:text-6xl font-bold  mb-10'>PROPOSAL</h1>
            <motion.h2  variants={children} className=' text-3xl sm:text-4xl text-yellow font-bold mb-5 '>Dear Rebecca & team</motion.h2>
            <motion.p  variants={children} className=' mb-5 '>Thank you for the opportunity to meet with you to discuss your needs last Thursday. We always enjoy working with you and your team and look forward to getting started on this exciting new phase for Big Corporation. </motion.p>
            <motion.p  variants={children}  className=' mb-5'>As always, if you have any questions about the below please do not hesitate to reach out to me directly. </motion.p>
            <motion.p  variants={children}  className=' mb-5'>Best,</motion.p>
            <motion.p  variants={children} className=' text-yellow border-b-[1px] w-fit border-blue mb-1'>Elizabeth Stephen</motion.p>
            <motion.b  variants={children} className=' font-bold'>​Partner, Acme Consulting</motion.b>
        </motion.div>}
    </div>
  )
}

export default Proposal