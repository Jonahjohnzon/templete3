import React, { useState } from 'react'
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";


import {motion} from 'framer-motion'

const Tab = ({name, type}) => {
    const [show, setshow] = useState(false)
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
          duration:0.6,
          delay:0.1,
          stiffness:400,
          when:'beforeChildren',
          staggerChildren:0.1
        }
      }
     
    }
  return (
    <div>
    <div className=' w-full  bg-blue text-green rounded-md cursor-pointer text-white transition-all ease-in-out duration-300' onClick={()=>setshow(!show)} >
        <div className=' flex text-2xl lg:text-4xl font-extralight  items-center px-3 py-4 justify-between '><p >{name}</p> {show?<span className='font-light w-[4%]'><AiOutlineCaretDown className=' text-lg text-yellow' /></span>:<span className=' font-light w-[7%]  lg:w-[4%]'><AiOutlineCaretRight className=' text-lg text-yellow' />
</span>}</div>
    </div>
    {(type == "a" && show) &&<motion.div  variants={slide} initial='hidden' animate='show'  className=' bg-white shadow-sm rounded-md w-full p-10 border-[1px] border-blue border-opacity-20'>
   { "We know that Big Corporation has a range of options for further investment for growth - from acquisition, to investment in online, and more. Further, there are opportunities in other markets in the Americas and Europe. {{company_name}} will work with the Big Corp team to ensure that Asia is the right choice for them at this time. "}
    </motion.div>}
    {(type == "b" && show) &&<motion.div  variants={slide} initial='hidden' animate='show'  className=' bg-white shadow-sm rounded-md w-full p-10 border-[1px] border-blue border-opacity-20'>
    Asia is huge. While Big Corp has already identified a number of markets that they think would be worthwhile within Asia, we will do an initial evaluation across all major markets and a number of mid-tier markets too. We have experience rolling out test cases in smaller markets in the region (Vietnam, Taiwan, etc) before doing a larger roll out to major markets. 
    </motion.div>}
    {(type == "c" && show) &&<motion.div  variants={slide} initial='hidden' animate='show'  className=' bg-white shadow-sm rounded-md w-full p-10 border-[1px] border-blue border-opacity-20'>
     <p className=' mb-5'>There are many issues to be thought through with regards to a launch into Asia - from local law and regulation, to competition, to market size, market fit, growth of market, language issues, hiring issues, and more</p>
     <p>{"{{company_name}} will be with you every step of the way to help ensure that all of the knowledge is right at your finger tips and that every opportunity is available for you within the market(s) that you have decided to focus on. "}</p>
    </motion.div>}

    </div>
  )
}

export default Tab