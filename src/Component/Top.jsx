import React from "react";
import { IoSearch } from "react-icons/io5";


const Top = () => {
  return (
    <div className="relative [100vw]  overflow-hidden text-white ">
      <div className=" absolute bg-blue xl:opacity-90 z-20 w-[100vw]  h-full"></div>
      <div className=" w-[100vw] ">
        <video autoPlay loop muted className=" w-[100vw]  z-10 absolute top-0">
          <source src="/acctng.mp4" type="video/mp4" />
        </video>
      </div>
      <div className=" relative z-40 w-full h-full flex justify-center items-center">
        <div className=" flex flex-col items-center py-60">
            <figure className=" mb-10">
            <IoSearch  className=" text-7xl"/>
            </figure>
            <h1 className=" text-center text-5xl sm:text-7xl font-bold mb-10">Consulting Proposal</h1>
            <h4 className=" text-center text-3xl xl:text-4xl font-bold mb-20">Asian Expansion Engagement</h4>
            <h6 className=" text-center text-xl font-bold mb-2">{"Prepared for {{Client name}}"}</h6>
            <p className=" text-center text-xl mb-10">​by [Add your name] —  [Add your email address]</p>
            <p className=" text-center text-xl">29 Feb 2020</p>
            <div><img src="/down.gif" className=" w-16"/></div>
        </div>
      </div>
    </div>
  );
};

export default Top;
