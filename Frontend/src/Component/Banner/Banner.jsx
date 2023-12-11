/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {FiMapPin, FiSearch} from 'react-icons/fi'
import { useCountdown } from './useCountdown';
import Timer from './Timer';
const Banner = ({query ,handleInputChange}) => {

    const THREE_DAYS_IN_MS = 14 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  
    const [days, hours, minutes, seconds] = useCountdown(dateTimeAfterThreeDays);

  return (
    <div className='max-w-screen-lg container mx-auto xl:px-24 px-4 md:py-20 py-14'>
        <h1 className='text-5xl text-black font-bold mb-3 '> Find your <span className='text-primary'>new jobs </span> today </h1>
        <p> Thousands of jobs in the computer engineering technology sectors are waiting for you.</p>
        {/* Timer */}
        <div className="flex space-x-2 md:space-x-7">
          <Timer value={days} name="Days" />
          <Timer value={hours} name="Hours" />
          <Timer value={minutes} name="Minutes" />
          <Timer value={seconds} name="Seconds" />
        </div>


        <form> 
            <div className='flex justify-start  md:flex-row  flex-col  md:gap-0 gap-4'>
                <div className='flex md:rounded-s-md rounded  shadow-sm fing-1 ring-inset ring-gray-300 focus-withing:ring-2 focus-withing:ring-inset focus-withing:ring-indigo-600 md:w-1/2 w-full'>
                    <input type="text" name='title' id='title' placeholder='What position are you loking for?' className='block flex-1  border-2 bg-tranasparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 ' 
                     onChange={handleInputChange} 
                     value={query} />
                    <FiSearch className='absolute mt-2.5  ml-2 text-gray-400 '/>             
                </div>
                <div className='flex md:rounded-s-md rounded  shadow-sm fing-1 ring-inset ring-gray-300 focus-withing:ring-2 focus-withing:ring-inset focus-withing:ring-indigo-600 md:w-1/3 w-full'>
                    <input type="text" name='title' id='title' placeholder='Location' className='block flex-1  border-2 bg-tranasparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 ' 
                     onChange={handleInputChange} 
                     />
                    <FiMapPin className='absolute mt-2.5  ml-2 text-gray-400 '/>             
                </div>
                <button type='submit' className='bg-blue  py-2 px-8 text-white  md:rounded-s-none  rounded'> Search</button>
            </div>
        </form>
    </div> 
  )
}

export default Banner;