import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Jobdetails = () => {
    const {id}=useParams()
    const [jobs , setJobs]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/all-jobs/${id}`)
        .then(res=>res.json())
        .then(data=>{setJobs(data)     
    } )
  }, [])


  const [file, setFile] = useState(null)
  
  const handleApply=async(jobs)=>{
    const { value: file } = await Swal.fire({
        title: "Select Your CV",
        input: "file",
        inputAttributes: {
          "accept": "image/*",
          "aria-label": "Upload your CV"
        }
      });
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          Swal.fire({
            title: "Your uploaded CV",
            imageUrl: e.target.result,
            imageAlt: "The uploaded picture"
          });
        };
        reader.readAsDataURL(file);
        setFile(file)       
      }
  
  }
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 lg:px-[100px] px-[50px] '> 
            <h1 className='text-xl font-bold py-3'>Job Title:{jobs.jobTitle}</h1>     
            {
              file ?  <button  className="btn btn-active btn-secondary">Alredy Appled  </button>  : <button onClick={handleApply} className="btn btn-active btn-primary"> Apply Now  </button>
            } 
        <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-5'>
              <div>
                <h1 className='text-xl font-bold lg:pb-5'> Benefits</h1> 
                <ol className='leading-10'>
                  <li className='text-lg font-medium flex gap-2'>Company Name :<span> {jobs.companyName }</span></li>
                  <li className='text-lg font-medium flex gap-2'>Salary : <span>{jobs.minPrice}- {jobs.maxPrice} </span></li>
                  <li className='text-lg font-medium flex gap-2'> SalaryType: <span>{jobs.salaryType } </span></li>
                  <li className='text-lg font-medium flex gap-2'> Job Location : <span>{jobs.jobLocation } </span></li>
                  <li className='text-lg font-medium flex gap-2'> Posted Date : <span>{jobs.postingDate} </span></li>
                  <li className='text-lg font-medium flex gap-2'> Employment Type: <span>{jobs.employmentType} </span></li>
                </ol>
              </div>
              <div className='lg:px-5'>
                  <h1 className='text-xl font-bold lg:pb-5'> OutLine</h1>
                  <p>{jobs.postingDate} </p>
                  <p> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins. </p>
                  
               
                </div>
                <div className='lg:px-5 lg:pb-5'>
                  <h1 className='text-xl font-bold'> Future Growth</h1>
                  <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins. </p>
                  <br />
                  <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins. </p>
                </div>
          </div>
        </div>
    );
};

export default Jobdetails;