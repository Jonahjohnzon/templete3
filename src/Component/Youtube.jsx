import React from 'react'
import { IoSearch } from "react-icons/io5";

const Youtube = () => {
  return (
    <div className=' flex justify-center py-32 bg-silver text-blue'>
        <div className=' w-[95%] sm:w-[70%] 2xl:w-[40%] flex justify-center flex-col items-center'>
        <figure className=" mb-10">
            <IoSearch  className=" text-7xl"/>
            </figure>
            <h1 className=' text-5xl sm:text-6xl font-bold mb-10'> OUR COMPANY</h1>
            <div >
            <iframe  className=' w-[100vw] xl:w-[1140px] h-[400px] sm:h-[500px] xl:h-[641px]' src="https://www.youtube.com/embed/_ppjvqUZicg" title="INTRODUCING QWILR"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default Youtube