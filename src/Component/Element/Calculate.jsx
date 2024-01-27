import React from 'react'

const Calculate = ({amount, setamount}) => {
    
  return (
    <div className='  w-full px-5 text-start h-full lg:overflow-hidden'>
        <div className=' flex flex-col items-start'>
        <h1 className=' text-2xl mb-5'>Calculate</h1>
        <p className=' mb-5 w-full'>Fill out the assumptions below to match your individual situation</p>
        <div className=' mb-4'>
            <p className=' text-xs font-bold mb-2'>(A) AVERAGE SALARY</p>
            <section className=' flex items-center rounded-md overflow-hidden border-green border-opacity-30 w-fit border-[1px]'>
            <label htmlFor='as' className='  px-3 opacity-50 cursor-text text-xs'>$</label>
            <input type='text' id='as' className=' w-full h-10 outline-none'/>
            
            </section>
        </div>
        <div className=' mb-4'>
            <p className=' text-xs font-bold mb-2'>(B) MONTHLY ADMIN HOURS PER EMPLOYEE</p>
            <section className=' flex items-center rounded-md overflow-hidden border-green border-opacity-30 w-fit border-[1px]'>
            <input type='text' id='hrs' className=' w-full h-10 outline-none'/>
            <label htmlFor='hrs' className='  px-3 opacity-50 cursor-text text-xs'>hrs</label>
            </section>
        </div>
        <div className=' mb-4'>
            <p className=' text-xs font-bold mb-2'>(C) SOFTWARE SETUP COST</p>
            <section className=' flex items-center rounded-md overflow-hidden border-green border-opacity-30 w-fit border-[1px]'>
            <label htmlFor='s' className='  px-3 opacity-50 cursor-text text-xs'>$</label>
            <input type='text' id='s' className=' w-full h-10 outline-none'/>
            </section>
        </div>
        <div className=' mb-4'>
            <p className=' text-xs font-bold mb-2'>(D) SUBSCRIPTION COST</p>
            <section className=' flex items-center overflow-hidden rounded-md border-green border-opacity-30 w-fit border-[1px]'>
            <label htmlFor='yr' className='  px-3 opacity-50 cursor-text text-xs'>$</label>
            <input type='text' id='yr' className=' w-full h-10 outline-none'/>
            <label htmlFor='yr' className='  px-3 opacity-50 cursor-text text-xs'>/yr</label>
            </section>
        </div>
        </div>
    </div>
  )
}

export default Calculate