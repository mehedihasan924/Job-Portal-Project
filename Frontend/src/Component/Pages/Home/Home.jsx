/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import Banner from '../../Banner/Banner'
import { Card } from '../../Card/Card';
import Jobs from '../Jobs/Jobs';
import Sidebar from '../../Sidebar/Sidebar';
import NewsLetter from '../../NeswLetter/NewsLetter';

const Home = () => {
  // Banner component state set input change data
  const [query, setQuery]=useState("");
  const handleInputChange=(event)=>{
      setQuery(event.target.value);
      // console.log(event.target.value)
  }
// Pgination Items Data Load
const [isloading, setIsloading]=useState(false);
const [currentPage, setCurrentPage]=useState(1);
const itemsParPage=6;

//Function for the next Page
const nextPage=()=>{
  if(currentPage < Math.ceil(filterItems.length/ itemsParPage)){
      setCurrentPage(currentPage +1 );
  }
}
//Function  for the preveou
const previous=()=>{
  if(currentPage>1 ){
    setCurrentPage(currentPage -1 );
  }
}

// Categories data load
const [selectedCategory, setSelectedCategoey]=useState(null)

const [jobs , setJobs]=useState([])
  useEffect(()=>{
    setIsloading(true);
    fetch("http://localhost:3000/myjobs/mdhasanmehedi924@gmail.com")
    .then(res=>res.json())
    .then(data=>{setJobs(data)
      setIsloading(false)
    }   
    )
  }, [])
// filter jobs by title
const filterItems=jobs.filter((job)=> job.jobTitle.toLowerCase().indexOf(query.toLowerCase())!==-1)

//====Redio Filtering===
const haldleChange=(event)=>{
    setSelectedCategoey(event.target.value)
}
//====Menu Button Filtering====
const haldleClick=(event)=>{
   setSelectedCategoey(event.target.value)
}
//=====Main Function====
const filteredData=(jobs, selected, query)=>{
    
     let filteredJobs=jobs;

//====filtering Input Items====
    if(query){
      filteredJobs=filterItems;
    }
//====Calculate the index range
const calculatePageRange=()=>{
   const startIndex=(currentPage -1)*itemsParPage;
   const endIndex=startIndex + itemsParPage;
   return {startIndex, endIndex}
}

// categories filtering 
    if(selected){
      filteredJobs= filteredJobs.filter(({ jobLocation,postingDate, experienceLevel,employmentType,salaryType,maxPrice})=> 
      ( 
        jobLocation.toLowerCase()===selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        postingDate>= selected ||
        experienceLevel.toLowerCase()===selected.toLowerCase()||
        salaryType.toLowerCase()===selected.toLowerCase() ||
        employmentType.toLowerCase()===selected.toLowerCase()
      )
      );
     }

//Slice the data based on current page
   const {startIndex, endIndex}=calculatePageRange();
    filteredJobs=filteredJobs.slice(startIndex, endIndex)

  //poprs patano hoyase
    return filteredJobs.map((data, i)=><Card key={i}  data={data}/> )
   }

   
   const result=filteredData(jobs, selectedCategory, query);


  return (
    <div >
       <Banner query={query} handleInputChange={handleInputChange}> </Banner>
      {/* Main content */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-3 lg:px-24 px-2 py-12'>
         {/* Left Site */}
        <div className='rounded p-4 bg-white'> 
          < Sidebar
            haldleChange={haldleChange}
            haldleClick={haldleClick}
            />
         </div>
        {/* Meddile Site */}
        <div className='col-span-2 rounded-sm p-1 bg-white'>  
          {
            isloading ? ( <p>Loading...</p>): result.length> 0 ? (<Jobs  result={result}/>) :<>
            <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
            <p>No Data found !</p>
            </>
          } 
         {/* {Pagination Here} */}
          {
            result.length> 0 ? (
              <div className='flex justify-center mt-4 space-x-8'>
                <button onClick={previous} className='hover:underline'>Previous</button>
                <span className='mx-2'>Page { currentPage} of { Math.ceil(filterItems.length/itemsParPage) }</span>
                <button onClick={nextPage} disabled={currentPage===Math.ceil(filterItems.length/itemsParPage)} className='hover:underline' >Next </button>
              </div>
            ): ""
          }
         </div>  

         {/* Right side */}
        <div className='rounded p-4 bg-white'>
        <NewsLetter/>
           </div>
      </div>

    </div>
  )
}


export default Home