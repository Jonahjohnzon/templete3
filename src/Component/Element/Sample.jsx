import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import SampleTab from './Tabs';

const Sample = ({data,edata}) => {
    const [price, setprice] = useState(0)
    const [show, setShow] = useState(true)


  return (
    <div className=' text-green w-full  ' >
        <div className=' w-full flex flex-col items-center'>
            <div className={` bg-blue text-white flex flex-col sm:flex-row sm:justify-between sm:items-center px-3 sm:px-10 py-8 w-full rounded-t-md ${show?  "rounded-none":"rounded-b-md"}  transition-all duration-1000`}>
                <div className=' flex justify-between w-full items-center mb-3'>
                <h1 className=' text-lg sm:text-2xl  '>{edata.name}</h1>
                <div className=' w-10 group rounded-full mr-3  h-10 bg-white bg-opacity-10 hover:bg-opacity-20 cursor-pointer flex justify-center items-center  relative' onClick={()=>{setShow(!show)}}>
                        <div className=' absolute -top-12 hidden group-hover:block'>
                            <div className=' whitespace-nowrap text-xs font-bold text-white bg-[#47525E] px-4 py-2 rounded-md'>{show?"CLOSE SECTION":"OPEN SECTION"}</div>
                        </div>
                        <FaAngleDown className={` font-bold ${show?"rotate-0":"-rotate-90"} transition-all duration-500`}/></div>
                </div>
                <div className=' flex items-center'>

                    <div className=' flex flex-col items-end'>
                        <p className=' font-semibold text-xs'>SUBTOTAL</p>
                        <p className=' text-lg sm:text-xl'>${price}.00</p>
                    </div>
                </div>
            </div>
            <div className={` mb-14 w-full overflow-hidden border-[1px] border-blue border-opacity-20  ${show? "max-h-[1000px]":"max-h-[0px]"} transition-all duration-500   bg-white rounded-b-md   `} >
                <ul className=' sm:flex font-bold hidden    px-10 justify-between py-5'>
                    <li className=' w-[50%]'>Description</li>
                    <div className=' w-[50%] flex justify-between'>
                    <li className=' w-full flex justify-start'>Item</li>
                    <li className=' w-full flex justify-start'>Quantity</li>
                    <li className=' w-full flex justify-end'>Price</li>
                    </div>
                </ul>
                {
                    data.map((e,i)=>{
                        return(
                            <div key={i}>
                            <SampleTab info={e} setprice={setprice} checks={e.check} price={price}/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    </div>
  )
}

export default Sample