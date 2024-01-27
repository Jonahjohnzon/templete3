import React,{useEffect, useRef, useState} from 'react'
import {motion,useInView} from 'framer-motion'
import Calculate from './Calculate'


const Calculator = () => {
    const [amount, setamount] = useState(8654)
    const fix = 8654
    const [no, setno] = useState(5)
    const [cal, setCal] = useState(false)
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
    <div className=' w-full bg-silver  py-20 pb-40 flex justify-center min-h-[500px]  text-blue ' ref={ref}>
        {show&&<motion.div  variants={slide} initial='hidden' animate='show' className=' w-[95%] sm:w-[85%] xl:w-[70%] 3xl:w-[45%] text-center'>
        <motion.h1 variants={children}  className=' text-4xl sm:text-6xl mb-20 font-bold font-Black'><span className=' font-light'>ESTIMATED</span> SAVINGS</motion.h1>
        <motion.div variants={children} className=' h-[500px] sm:h-[700px]  flex shadow-sm w-full justify-between items-center z-10 relative overflow-hidden rounded-xl bg-center bg-cover'  style={{backgroundImage:"url('/bg.jpeg')"}}>
        <p className='  bg-white text-xs px-5 border-[1px] border-green bordershadow-sm-opacity-20 py-3 font-semibold cursor-pointer rounded-md absolute top-10 left-5 z-50' onClick={()=>{
          setCal(!cal)
        }}>{cal?"HIDE CALCULATOR":"SHOW CALCULATOR"}</p> 
          <div className={` h-full bg-white  ${cal?"w-[400px]":"w-0"} pt-28 overflow-x-hidden transition-all duration-300 relative z-10`}>
            {cal&&<Calculate amount={amount} setamount={setamount}/>}
          </div>
  <div className='  w-full h-full  rounded-lg relative'>

<div className={` w-full h-full bg-opacity-70 absolute  top-0   bg-blue z-10`}></div>

                <div className='  flex flex-col justify-center w-full h-full items-start p-5 relative z-40'>
                    <div className=' h-full w-[100%] sm:w-[50%] self-center flex justify-center flex-col items-center text-white'>
                        <h1 className=' text-white font-bold text-5xl sm:text-8xl mb-5 flex items-start'><span className=' text-2xl sm:text-5xl pt-3'>$</span>{amount.toLocaleString()}</h1>
                        <p className=' text-base sm:text-xl mb-20'>Potential savings after one year</p>
                        <div className=' flex w-full text-xs mb-2 justify-between items-center'>
                            <p className=' font-bold  '>TEAM MEMBER</p>
                            <p className=' w-10 pb-2 text-center border-b-[1px] border-b-white border-opacity-20'>{no}</p>
                        </div>
                        <div className=' w-full'>
                     <input
  type='range'
  className=' w-full focus:outline-none accent-yellow rounded-lg bg-white bg-opacity-20 h-2 appearance-none cursor-pointer'
  step={1}
  min={5}
  max={100}
  value={no}
  style={{ "--thumb-size": "30px" }} 
  onChange={(e) => {
    const newValue = parseInt(e.target.value, 10);
    const difference = newValue - no;
    setno(newValue);
   setamount((prev) => prev + difference * fix);
  }}
/>
                        </div>
                        </div>

                </div>
            </div>
          
        </motion.div>
        </motion.div>}
    </div>
  )
}

export default Calculator