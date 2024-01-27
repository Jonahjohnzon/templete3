import React,{useEffect, useRef, useState} from 'react'
import {motion,useInView} from 'framer-motion'

const Team = () => {
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
    const data = [
        {
    image:"/a.jpeg",
    name:"Holly Duncan",
    position:"​Founder & CEO",
    des:"With 17 years in the industry and multiple awards for her extensive career achievements, Holly started Acme Corp to bring businesses into the modern era."
    },
    {
        image:"/b.jpeg",
        name:"Jessica Halsh",
        position:"​Sales Director",
        des:"Jessica brings a wealth of experience from an unconventional path into sales, joined Acme Corp after selling her luxury watch marketplace in 2015."
        }
    ]
  return (
    <div className=' flex justify-center pb-40 min-h-[500px] text-blue text-xl' ref={ref}>
        {show&&<motion.div variants={slide} initial='hidden' animate='show' className=' w-[90%] sm:w-[80%] xl:w-[60%] 3xl:w-[45%]'>
            <h1 className=' text-center  pt-40 pb-20 text-6xl font-bold'>OUR TEAM</h1>
            <motion.p variants={children} className=' mb-5 '>{"This engagement will be lead by {{first_name}} {{last_name}}, {{job_title}}"}</motion.p>
            <motion.p variants={children} className=' mb-20'>{"We will be leveraging the full experience of our network of advisors, both internal to {{company_name}} & trusted experts we know and trust."}</motion.p>
            <motion.div variants={children} className=' flex flex-col sm:flex-row justify-between'>
            {
                data.map((e,i)=>{
                    return(
                        <div className=' sm:w-[47%] xl:w-[45%] mb-10 sm:mb-0 flex flex-col items-start' key={i}>
                            <div style={{backgroundImage:`url(${e.image})`}} className=' mb-10 bg-cover bg-center w-32 h-32 rounded-full'/>
                            <h1 className=' text-4xl font-bold text-yellow mb-3'>{e.name}</h1>
                            <h2  className=' text-4xl font-light mb-5 text-yellow'>{e.position}</h2>
                            <p className=' mb-5'>{e.des}</p>
                            <div className=' text-white rounded-full text-base font-bold px-7 py-5 cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300 bg-blue'>Read more</div>
                        </div>
                )
                })
            }
            </motion.div>
        </motion.div>}
    </div>
  )
}

export default Team