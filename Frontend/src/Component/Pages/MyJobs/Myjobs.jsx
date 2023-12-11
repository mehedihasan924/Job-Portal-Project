import React, { useEffect, useState } from 'react';

const Myjobs = () => {
    
    const [jobs, setJobs]=useState([]);
    const [searchText, setSearchText]=useState("");
    const [isloading, setIsleoading]=useState(true);

    useEffect(()=>{
        setIsleoading(true);
        fetch(`http://localhost:3000/myjobs/mdhasanmehedi924@gmail.com`)
        .then(res=>res.json())
        .then((data)=>setJobs(data));
    },[])

    const handleSearch=()=>{
        const filter=jobs.filter((job)=>job.jobtitle.toLowerCase().indexof(searchText.toLowerCase())!== -1)
      setJobs(filter);
      setIsleoading(false)
    }

    console.log(searchText);
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <div className='my-jobs-container'>
                <h1 className='text-center p-4'>My Jobs: {jobs.length}</h1>
                <div className='search-box text-center p-2 mb-2'>
                    <input
                    onChange={(e)=>setSearchText(e.target.value)}
                    type="text" name="search"  id="search" className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full'/>
                    <button onClick={handleSearch} className='bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4 '> Search</button>
                </div>
            </div> 

            {/* table */}
            <section>
                <div>
                    
                </div>
            </section>
        </div>
    );
};

export default Myjobs;