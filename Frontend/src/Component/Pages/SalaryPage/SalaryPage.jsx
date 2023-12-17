import React, { useEffect, useState } from 'react';
import Pageheader from './Pageheader';

const SalaryPage = () => {

    const [searchText, setSearchText]=useState("");
    const [salary, setSalary]=useState([]);

    useEffect(()=>{
            fetch("./public/salary.json")
            .then(res=>res.json())
            .then((data)=>{
             setSalary(data)
        });
    }, [searchText])
            console.log(salary);

   const handleSearch=()=>{
    const filter=salary.filter((job)=> job.title.toLowerCase().indexOf(searchText.toLowerCase())!==-1);
    setSalary(filter); 
    }

    

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-[100px]'>
            <Pageheader title={"Estimate salary"} path={"Salary"}></Pageheader>
           <div className='mt-5'>      
                <div className='search-box text-center p-2 mb-2'>
                    <input 
                     onChange={(e)=>setSearchText(e.target.value)}          
                     type="text" name="search"  id="search" className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full'/>
                    <button onClick={handleSearch} className='bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4 '> Search</button>
                </div>      
           </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center '>
                {
                    salary.map((data)=>
                        <div key={data.id} className='shadow px-4 py-8 bg-slate-50 rounded'>
                            <h4 className='font-bold text-xl'>{data.title}</h4>
                            <p className='my-2 font-medium text-blue text-lg'>{data.salary}</p>
                            <div className='flex flex-wrap gap-4'>
                                <a href="/" className='underline'> {data.status}</a>
                                <a href="/" className='underline'> {data.skills}</a>
                            </div>
                        </div>
                    )
                }
            </div>



        </div>
    );
};

export default SalaryPage;