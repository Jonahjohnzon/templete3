import React, { useState } from 'react'
import { GoChevronDown,GoChevronUp } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import Tilt from 'react-parallax-tilt';

const PriceTab = ({data,i,select, setselect}) => {
    const [users, setusers] = useState(1)
   const answer = data.price * users
  return (

    <div className={` flex flex-col w-full items-center `} >
            <Tilt  tiltEnable={(i == 1 && select == 1)? true:false} tiltReverse transitionSpeed={3000}   className={` flex flex-col w-full items-center    `}  perspective={2000} trackOnWindow={true} gyroscope tiltMaxAngleX={20} tiltMaxAngleY={25}  > 
    <div className={`  ${i == 1? "bg-blue":"bg-white"} select-none ${((i == 1 &&  select == 1 ) || select == i)? "mb-14":"mb-4 "} border-[1px] border-blue border-opacity-15 p-5   text-green cursor-pointer ${select == i? "scale-125":"scale-100 hover:scale-110 "} w-[80%] sm:w-44 xl:w-64  rounded-md relative  transition-all ease-in-out duration-300 `}  onClick={()=>setselect(i)}>
{i == 1&&<div className=' absolute -top-3 w-full left-0 flex justify-center'><div className='  bg-yellow rounded-2xl px-2 py-2 w-fit text-xs font-bold'><p>Recommended</p></div></div>}
        <div className={` flex flex-col my-5 items-center ${i == 1 ?"text-white":"text-blue"}`}>
            <h3 className=' mb-5 text-sm font-medium'>{data.title}</h3>
            {data?.old && <del className='text-[9px]'>${data.old.toFixed(2)}</del>}
            <h1 className=' text-4xl'>${answer.toFixed(2)}</h1>
            <div className=' text-sm mb-5'>/{data.period}</div>
            <div className=' flex items-start mb-5'>
                <p className={` mr-2 pb-1 text-sm border-b-2 w-5 text-center ${select == i? "border-opacity-80":"border-opacity-20"}  border-b-green`}>{users}</p>
                <div className=' mr-2 text-sm'>
                    <div className={`${(select == i && users < 10)? "opacity-80":"opacity-20"}`} onClick={()=>{
                        if(select == i && users < 10)
                        {
                        setusers((e)=>e+1)}}}><GoChevronUp /></div>
                    <div className={`${select == i && users > 1? "opacity-80":"opacity-20"}`} onClick={()=>{
                        if(select == i && users > 1)
                        {
                        setusers((e)=>e-1)}}}><GoChevronDown /></div>
                </div>
                <p className=' text-sm'>Users</p>
            </div>
            <input type='submit' value={select == i? "✓ Selected":"Select"} className={` text-xs w-full py-2 hover:shadow-inner  rounded-md ${select == i? " bg-yellow":"bg-white border-2 border-opacity-5 text-blue border-blue"}  font-bold`}/>
        </div>
    </div>
    </Tilt>
    <div className=' w-[70%]'>
    {
        data.data.map((e,i)=>{
            return(
                <div className=' mb-1 flex items-center  w-[100%] sm:w-fit '>
                   <FaCheck  className=' mr-2 text-yellow  '/> <div className=' text-sm'>{e}</div>
                </div>
            )
        })
    }
    </div>
    </div>
   
  )
}

export default PriceTab