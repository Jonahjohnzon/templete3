import React,{useEffect, useRef, useState} from 'react'
import {motion,useInView} from 'framer-motion'

const Process = () => {
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
    <div className=' flex justify-center min-h-[1000px]' ref={ref}>
        {show&&<motion.div variants={slide} initial='hidden' animate='show' className=' text-blue w-[95%] sm:w-[80%] xl:w-[55%] 3xl:w-[45%]  px-5'>
            <h1 className=' text-5xl sm:text-6xl font-bold mb-20 text-center'>PROCESS</h1>
            <motion.div variants={children} className=' flex flex-col sm:flex-row w-[100%] mb-20'>
                <figure className=' sm:w-[40%] flex justify-center items-start'><img src='/a.avif' className=' w-[70%] sm:w-32'/></figure>
                <div className=' w-full'>
                    <h1 className=' font-bold text-3xl text-yellow mb-5'>1. Research</h1>
                    <p className=' text-xl'>{"[Company_name] is well known for our research methodology. We will do a market analysis, competition analysis, opportunity analysis and a lightweight risk analysis. We request a small team of two to three analysts from Big Corporation be made available to work with us on relevant aspects of this. "}</p>
                </div>
            </motion.div>
            <motion.div variants={children} className='flex-col sm:flex-row flex w-[100%] mb-20'>
                <figure className=' sm:w-[40%] flex justify-center items-start'><img src='/b.avif' className='  w-[70%] sm:w-32'/></figure>
                <div className=' w-full'>
                    <h1 className=' font-bold text-3xl text-yellow mb-5'>2. Interviews</h1>
                    <p className=' text-xl mb-5'>{"Understanding the strengths and weaknesses of Big Corporation's internal structures will be key to [company_name] being able to deliver a good outcome that will work for the multiple stakeholders within Big Corp. "}</p>
                    <p className=' text-xl mb-5'>{"Further, this will allow our team to rapidly test out theories and discover problems with assumptions."}</p>
                    <p className=' text-xl'>{"The senior executive team interviews will be handled by {{first_name}}, the {{company_name}} {{job_title}} managing this engagement."}</p>
                </div>
            </motion.div>
            <motion.div variants={children} className='flex-col sm:flex-row flex w-[100%] mb-20'>
                <figure className=' sm:w-[40%] flex justify-center items-start'><img src='/c.avif' className='w-[70%] sm:w-32'/></figure>
                <div className=' w-full'>
                    <h1 className=' font-bold text-3xl text-yellow mb-5'>3. Strategy Sessions</h1>
                    <p className=' text-xl mb-5'>{"While steps one and two will be done in parallel, the strategy sessions will likely begin to take place towards the end of the research and interview cycle. "}</p>
                    <p className=' text-xl mb-5'>{"We will likely need three sessions of three hours in length. "}</p>
                </div>
            </motion.div>
            <motion.div variants={children} className='flex-col sm:flex-row flex w-[100%] mb-20'>
                <figure className=' sm:w-[40%] flex justify-center items-start'><img src='/d.avif' className='w-[70%] sm:w-32'/></figure>
                <div className=' w-full'>
                    <h1 className=' font-bold text-3xl text-yellow mb-5'>4. Report & Workshop </h1>
                    <p className=' text-xl mb-5'>{"The report will be distributed to the team and then discussed in an in-depth workshop. "}</p>
                    <p className=' text-xl mb-5'>{"Shortly after this workshop Big Corporation will either come to a decision, or if a second round of information is needed {{company_name}} will provide that second round of information free of charge. "}</p>
                </div>
            </motion.div>
            <motion.div variants={children} className='flex-col sm:flex-row flex w-[100%] mb-20'>
                <figure className=' sm:w-[40%] flex justify-center items-start'><img src='/e.avif' className=' w-[70%] sm:w-32'/></figure>
                <div className=' w-full'>
                    <h1 className=' font-bold text-3xl text-yellow mb-5'>5. Initial launch plan </h1>
                    <p className=' text-xl mb-5'>{"If the go ahead is given we will work to build out an initial launch plan. "}</p>
                    <p className=' text-xl mb-5'>{"Note: The investment for this plan is a rough guideline. "}</p>
                </div>
            </motion.div>
        </motion.div>}
    </div>
  )
}

export default Process