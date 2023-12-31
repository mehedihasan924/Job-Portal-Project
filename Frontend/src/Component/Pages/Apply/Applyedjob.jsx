import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Applyedjob = () => {

     const [jobs, setJobs]=useState([]); 
    const [isloading, setIsleoading]=useState(true);

    useEffect(()=>{
        setIsleoading(true);
        fetch(`http://localhost:3000/apply`)
        .then(res=>res.json())
        .then((data)=>{
          setJobs(data);
          setIsleoading(false);
        });
    },[])

    const [currentPage,setCurrentPage]=useState(1);
    const itemsPerpage=4;

     const indexOfLastItem=currentPage*itemsPerpage;
     const indexOfFirsttItem=indexOfLastItem- itemsPerpage;
     const currentJobs=jobs.slice(indexOfFirsttItem, indexOfLastItem);

     const handlDelete=(id)=>{
      console.log(id);
      fetch(`http://localhost:3000/apply/${id}`, {
        method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=> {
        if(data.acknowledged===true){
          Swal.fire({
            title: "Successfully deleted job!",
            text: "You clicked the button!",
            icon: "success"
          });
            reset()
        }
      });
    }
    return (
        <div>
         <section className="py-3 bg-blueGray-50">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto ">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-blueGray-700">All Jobs</h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <Link to="/post-job">
                      <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Post a New Job</button>                    
                    </Link>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    No.
                                  </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                  Title
                                  </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                  Company Name
                                  </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                  Salary
                                  </th>                   
                    <th className="px-6 bg-blueGray-50 text-blue-Gray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                  Delete                                
                                  </th>
                    </tr>
                  </thead> 

                    {
                      isloading ?(<div className='flex  items-center justify-center h-20'> <p> Loading...</p></div>):
                      ( 
                        <tbody>
                        {
                            currentJobs.map(( job, index)=>( 
                              <tr key={index}>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                              {index+1}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                             {job.jobTitle}
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {job.companyName}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            ${job.minPrice}-${job.maxPrice}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <button onClick={()=>handlDelete(job._id)} className='bg-red-700 rounded-sm py-2 px-6 text-white'> Delete </button>
                              
                            </td>
                              </tr>
                            ))
                          }                                   
                        </tbody>
                       )
                    }
                </table>
              </div>
            </div>
          </div>
          <footer className="relative pt-8 pb-6 mt-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
                  </div>
                </div>
              </div>
            </div>
          </footer>
          </section>
        </div>
    );
};

export default Applyedjob;