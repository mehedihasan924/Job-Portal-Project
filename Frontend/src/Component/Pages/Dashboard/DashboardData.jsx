import React, { useEffect, useState } from 'react';
import { FaPuzzlePiece, FaSign, FaUserAlt } from 'react-icons/fa';

const DashboardData = () => {

    const [jobs, setJobs]=useState([]);
    const [isloading, setIsleoading]=useState(true);
    useEffect(()=>{
      setIsleoading(true);
      fetch(`http://localhost:3000/myjobs/mdhasanmehedi924@gmail.com`)
      .then(res=>res.json())
      .then((data)=>{
        setJobs(data);
        setIsleoading(false);
      });
  },[])

    return (
        <div>
               <div className=' grid lg:grid-cols-3 gap-5 px-5 mt-[50px]'>
                <div className=' p-5 bg-white'>
                  <div className='post-icon'> <FaSign /> </div>
                  <h1 className='text-3xl font-bold '>All Post </h1>
                  <p className='text-lg font-bold '> Total : <span className=' pl-1 text-red-600'>{jobs.length} </span> </p>
                </div>
                <div className=' p-5 bg-white'>
                  <div className='post-icon'> <FaUserAlt /></div>
                  <h1 className='text-3xl font-bold '>All Users </h1>
                  <p className='text-lg font-bold '> Total : </p>
                </div>
                <div className=' p-5 bg-white'>
                  <div className='post-icon'> <FaPuzzlePiece /></div>
                  <h1 className='text-3xl font-bold '>All Admin </h1>
                  <p className='text-lg font-bold text-red-600'> Mehedi Hasan</p>
                </div>
              </div>  
              <div className=' grid lg:grid-cols-3  gap-5  p-5 mt-[20px]'>
                <div className=' lg:col-span-2 p-5 bg-white '>
                  <h1> Chart</h1>
                  {/* <Chart />   */}
                </div>
                <div className='bg-white p-5'>
                  <h1 className='text-3xl font-bold mb-[50px]'>  Section </h1>
                  {/* <Social_visitors/> */}
                </div>               
            </div> 
        </div>
    );
};

export default DashboardData;