import React,{useEffect, useRef, useState} from 'react'
import {motion,useInView} from 'framer-motion'

const Background = () => {
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
    <div className=' w-full flex justify-center text-xl min-h-[600px]  items-center text-blue py-32 bg-silver' ref={ref}>
    {show&&<motion.div variants={slide} initial='hidden' animate='show' className=' w-[90%]  sm:w-[70%] xl:w-[55%] 3xl:w-[40%]'>
        <h1 className=' text-5xl sm:text-6xl font-bold  mb-10'>BACKGROUND</h1>
        <motion.p  variants={children}  className=' mb-5'>Big Corporation has had many years of success growing their business across the US and Canada. While there are many opportunities for internal growth, the company seeks to explore international markets. It is believed that Asia offers the best market for Big Corp's expansion - due to the lack of similar offerings and any serious competitors. </motion.p>
        <motion.p  variants={children}   className=' mb-5'>During this initial engagement we will test whether this theory is true. We will look at the opportunity, the risks, the costs and the potential growth that is available. </motion.p>
        <motion.p  variants={children} >{'We will also prepare the way for an expansion into Asia with the help of our team of experts in this field. {{company_name}} has helped over 20 public companies successfully expand into parts of Asia over the past decade. We have a detailed knowledge of the major markets and have experts available for all other smaller developing markets. Our expertise, our proprietary data and our knowledge of Big Corp will enable this project to succeed. '}</motion.p>
    </motion.div>}
</div>
  )
}

export default Background