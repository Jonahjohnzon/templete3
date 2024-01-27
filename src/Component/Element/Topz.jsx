import React, { useState,useRef, useEffect } from "react";
import PriceTab from "./PriceTab";
import Sample from "./Sample";
import {motion,useInView} from 'framer-motion'

const Topz = () => {
  const [pos, setPos] = useState(true);
  const [select, setselect] = useState(1);
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
     y:-10,
    },
    show:{
      opacity:1,
      y:0
    }}
  const MonthlyInfo = [
    {
      title: "Basic",
      price: 6.00,
      period: "month",
      data: ["Add a feature here", "Add a feature here"],
    },
    {
      title: "Standard",
      price: 8.00,
      period: "month",
      data: ["Add a feature here", "Add a feature here","Add a feature here"],
    },
    {
      title: "Premium",
      price: 12.00,
      period: "month",
      data: [
        "Add a feature here",
        "Add a feature here",
        "Add a feature here",
        "Add a feature here"
      ],
    },
  ];
  const YearlyInfo = [
    {
      title: "Basic",
      price: 57.60,
      period: "year",
      old:72.00,
      data: ["Basic support", "Up to 5GB per month"],
    },
    {
      title: "Standard",
      price: 76.0,
      period: "year",
      old:90.00,
      data: ["24h support", "Up to 10GB per month"],
    },
    {
      title: "Premium",
      price: 115.20,
      old:144.00,
      period: "year",
      data: [
        "Priority 24h support",
        "Unlimited storage",
        "AI security monitoring",
      ],
    },
  ];
  const data = [
    {
      name:"External research & strategy sessions",
      data:[
      {
        check:false,
    description:"Research (Consultant)",
    item:150,
    quantity: "50 Hour",
    count:false,
    price:7500},
    {
      check:false,
      description:"Research (Partner)",
    item:300,
    quantity: "30 Hour",
    count:false,
    price:9000},
    {
      check:true,
      description:"Initial Strategy (Three sessions)",
    item:1500,
    count:false,
    quantity: "3 Unit",
    price:4500}]},

    {
      name:"Internal Interviews",
      data:[
      {
        check:false,
    description:"Executive Team",
    item:1000,
    count:false,
    quantity: "30 Hour",
    price:3000},
    {
      check:false,
      description:"2 Country Managers",
    item:100,
    count:false,
    quantity:"20 Hour",
    price:2000}]},
    {
      name:"Initial Report & First Workshop",
      data:[
      {
        check:false,
    description:"Initial Report & Presentation",
    item:100,
    count:false,
    quantity:"6 Hour",
    price:600},
    {
      check:false,
      description:"Stakeholder Workshop (with our internal experts)",
    item:8000,
    count:true,
    quantity: "1 Unit",
    price:8000}]},
    {
      name:"First Stage of Implementation",
      data:[
      {
        check:false,
    description:"This is only an indicative quote. A full quote will be given by April.",
    item:300,
    count:false,
    quantity: "100 Hour",
    price:30000}]}
]
  return (
    <div className=" w-full bg-green py-20 text-blue flex-col items-center  pt-40 flex justify-center"  >
      <div className=" w-[95%] text-center sm:text-start sm:w-[90%] xl:w-[70%] 2xl:w-[50%] flex flex-col items-center mb-16">
        <main className=" flex flex-col items-center">
          <h1 className=" font-bold font-Black text-5xl text-center sm:text-6xl mb-5">
          <span className=" font-light">INDICATIVE</span> INVESTMENT
          </h1>
          <h3 className="   italic text-lg  sm:text-xl mb-20">Note: As requested, this is a draft quote for STAGE ONE. The final proposal price may vary if needs / conditions change. </h3>
          <h4 className=" text-4xl font-light mb-10">Packages</h4>
          <div className=" flex items-center  cursor-pointer relative bg-[#F2F6F7] p-[2px] mb-4  hover:bg-[#E6ECF0] rounded-md overflow-hidden">
            <div
              className=" absolute z-20 shadow-md border-[1px] border-blue border-opacity-20 bg-white h-full top-0  rounded-md transition-all ease-in-out duration-300"
              style={
                pos
                  ? { left: "0%", width: "40%" }
                  : { left: "40%", width: "60%" }
              }
            ></div>
            <section
              className="  px-3 flex items-center rounded-md py-4 text-lg font-bold text-blue relative z-30"
          
              onClick={() => setPos(true)}
            >
              Monthly
             
            </section>
            <section
              className="  px-3 pl-10 rounded-md py-4 text-lg  font-bold text-blues  relative z-30"
              onClick={() => {
                setPos(false);
              }}
           
            >
              Yearly{" "}
              <span className=" ml-2 bg-yellow text-xs px-3 py-2 rounded-md text-green font-bold">
                20% OFF
              </span>
            </section>
          </div>
        </main>
      </div>
      <div className=" flex flex-col sm:flex-row items-center  justify-between w-[90%] xl:w-[70%] 3xl:w-[50%] mb-20">
        {pos&&MonthlyInfo.map((e, i) => {
          return (
            <div key={i} className=" w-full  mb-20 sm:mb-0">
            
              <PriceTab data={e} i={i} select={select} setselect={setselect} />
            </div>
          );
        })}
          {pos||YearlyInfo.map((e, i) => {
          return (
            <div key={i} className=" w-full  mb-20 sm:mb-0">
            
              <PriceTab data={e} i={i} select={select} setselect={setselect} />
            </div>
          );
        })}
      </div>
      <div className=" min-h-[600px]  w-[90%] xl:w-[70%] 2xl:w-[60%] 3xl:w-[50%] " ref={ref}>
      {show&&<motion.div variants={slide} initial='hidden' animate='show' className="">
        {
          data.map((e,i)=>{
            return(
              <motion.div variants={children}  className=" w-full mb-5" key={i}>
                  <Sample data={e.data} edata={e}/>
              </motion.div>
            )
          })
        }
            
      </motion.div>}</div>
      <div className=' bg-blue text-white w-[90%] text-xs sm:text-base sm:w-[25%] rounded-md p-5'>
                <div >
         
                    <div  className=' mb-5 pb-5 border-white border-opacity-15 border-b-[1px] flex justify-between items-center'>
                        <h1>Total Excluding Tax</h1>
                        <p>$64,600.00</p>
                    </div>
                    <div  className=' flex justify-between items-center'>
                        <h1 className=' text-xl font-bold'>Total</h1>
                        <p className='text-xs sm:text-base'>$64,600.00</p>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default Topz;
