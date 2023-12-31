import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { IoMdArrowRoundBack } from "react-icons/io";
import CreatableSelect from 'react-select/creatable';
const UpdateJob = () => {
    const {id}=useParams()
     console.log(id);
        const {_id, jobTitle, companyName,minPrice, maxPrice , salaryType, jobLocation,postingDate ,experienceLevel, companyLogo, employmentType,description , postedBy, skills}=useLoaderData()
          
        const {
            register, 
            handleSubmit, 
            reset,     
            formState: {errors}    
            } = useForm();
   
       const onSubmit = (data) =>{ 
           data.skills=selettedOption;      
           // console.log(data);
   
           fetch(`http://localhost:3000/update-job/${id}`,{
               method:"PATCH",
               headers:{"content-type":"application/json"},
               body:JSON.stringify(data)
           })
           .then(res=>res.json())
           .then((result)=>{
               console.log(result);
               if(result.acknowledged===true){
                 
               }
               reset();
           });
       }
    const success=()=>{
        Swal.fire({
            title: "Successfully Posted job!",
            text: "You clicked the button!",
            icon: "success"
          });
    }


       const[ selettedOption, setSelectedOption] =useState(null);
       const options=[
           {value:"Javascript", label:"Javascript"},
           {value:"C++", label:"C++"},
           {value:"HTML", label:"HTML"},
           {value:"CSS", label:"CSS"},
           {value:"React", label:"React"},
           {value:"Node.js", label:"Node.js"},
           {value:"Mongodb", label:"Mongodb"}
       ]    
    return (
        <div className='max-w-screen-full container mx-auto xl:px px-4'>
        {/* Form */}
        <div className='bg-[#f9f9f9] py-10 px-4  lg:px-16'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

            {/* Frist Row  */}
                <div className='flex  flex-col lg:flex-row  items-center justify-between gap-8'>
                     <div className='lg:w-1/2 w-full '>
                        <label className=' block mb-2 text-lg'> Job Title</label>
                        <input type="text" 
                        placeholder="Web Developer" 
                        defaultValue={jobTitle}
                        {...register("jobTitle", )} className='block  w-full  border-1 flex-1 bg-white py-1.5  pl-3 text-gray-900 placeholde:text-gray-400 focus:outline-none sm:textsm sm:leading-6 ' />
                    </div>
                    <div className='lg:w-1/2 w-full '>
                        <label className=' block mb-2 text-lg'> Company Name</label>
                        <input type="text" placeholder="EX : Microsoft"
                          defaultValue={companyName}
                        {...register("companyName", )} className='block  w-full  border-1 flex-1 bg-white py-1.5  pl-3 text-gray-900 placeholde:text-gray-400 focus:outline-none sm:textsm sm:leading-6 ' />
                    </div>
                </div>

                {/* 2nd Row */}
                <div className='flex  flex-col lg:flex-row  items-center justify-between gap-8'>
                     <div className='lg:w-1/2 w-full '>
                        <label className=' block mb-2 text-lg'> Minimum salary</label>
                        <input type="text" placeholder="$20k" {...register("minPrice", )}
                        defaultValue={minPrice}
                        className='block  w-full  border-1 flex-1 bg-white py-1.5  pl-3 text-gray-900 placeholde:text-gray-400 focus:outline-none sm:textsm sm:leading-6'/>
                    </div>
                    <div className='lg:w-1/2 w-full '>
                        <label className=' block mb-2 text-lg'> Maximum Salary </label>
                        <input type="text"  placeholder="$150k" {...register("maxPrice", )} 
                        defaultValue={maxPrice}
                        className='block  w-full  border-1 flex-1 bg-white py-1.5  pl-3 text-gray-900 placeholde:text-gray-400 focus:outline-none sm:textsm sm:leading-6 ' />
                    </div>
                </div>

                  {/* 3nd Row */}
                  <div className='flex  flex-col lg:flex-row  items-center justify-between gap-8'>
                     <div className='lg:w-1/2 w-full '>
                        <label className=' block mb-2 text-lg'>Salary Type </label>
                            <select {...register("salaryType")} className='create-job-input'>
                                <option value={salaryType}>{salaryType} </option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                    </div>
                    <div className='lg:w-1/2 w-full '>
                        <label className=' block mb-2 text-lg'> Job Location </label>
                        <input type="text" 
                         placeholder="Ex: New york" 
                         defaultValue={jobLocation}
                         {...register("jobLocation", )} className='block w-full border-1 flex-1 bg-white py-1.5  pl-3 text-gray-900 placeholde:text-gray-400 focus:outline-none sm:textsm sm:leading-6 ' />
                    </div>
                </div>
                  {/* 4th Row */}
                  <div className='flex  flex-col lg:flex-row  items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full '>
                            <label className=' block mb-2 text-lg'> Job Posting Data </label>
                            <input type="date" placeholder="Ex: 2023-11-04" {...register("postingDate", )} 
                             defaultValue={postingDate}
                            className='block  w-full  border-1 flex-1 bg-white py-1.5  pl-3 text-gray-900 placeholde:text-gray-400 focus:outline-none sm:textsm sm:leading-6 '/>
                        </div>
                       <div className='lg:w-1/2 w-full '>
                         <label className=' block mb-2 text-lg'>Experience Level </label>
                            <select {...register("experienceLevel")}

                                 className='create-job-input'>
                                <option value={experienceLevel}> {experienceLevel} </option>
                                <option value="NoExperience">No Experience</option>
                                <option value="Intership">Intership</option>
                                <option value="Work remotely">Work remotely</option>
                            </select>
                       </div>               
                </div>
                    {/* 5nd Row */}
                 <div>
                   <label className=' block mb-2 text-lg'>Required Skill Sets: </label>
                    <CreatableSelect
                    defaultValue={skills}            
                    onChange={setSelectedOption}
                    options={options}
                    isMulti
                    className='create-job-input'
                    />
                 </div>

               {/* 6th Row */}
               <div className='flex  flex-col lg:flex-row  items-center justify-between gap-8'>
                    <div className='lg:w-1/2 w-full '>
                            <label className=' block mb-2 text-lg'>Company Logo</label>
                            <input type="url" placeholder="Upload Logo" 
                            {...register("companyLogo", )}
                            defaultValue={companyLogo} 
                            className='block w-full border-1 flex-1 bg-white py-1.5  pl-3 text-gray-900 placeholde:text-gray-400 focus:outline-none sm:textsm sm:leading-6 '/>   
                        </div>
                       <div className='lg:w-1/2 w-full '>
                         <label className=' block mb-2 text-lg'>Employment Type </label>
                            <select {...register("employmentType")}     className='create-job-input'>
                                <option value={employmentType}>{employmentType} </option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                       </div>               
                </div>

                 {/* 7th Row */}
                 <div className='w-full'>
                  <label className=' block mb-2 text-lg'>Job Description: </label>
                  <textarea  
                //   defaultValue={"A book or other written or printed work, regarded in terms of its content rather than its physical form." } 
                  className='w-full pl-3 py-1.5 focus:outline-none'
                  rows={6}
                  defaultValue={description} 
                  placeholder='Job Description'
                 {...register("description")}
                  />
                 </div>

                 {/* last Row */}
                 <div>
                  <label className=' block mb-2 text-lg'>Job Posted By </label>
                  <input 
                  type="email"
                  placeholder='Your email'
                  {...register("postedBy")}
                  defaultValue={postedBy}
                  className='create-job-input'
                                  
                   />
                 </div>
            <div  className='flex gap-4'> 
                <input type="submit" onClick={success} className='block mt-12 bg-blue text-white font-semibold  px-8 py-2 rounded-sm' />
             <Link to={"/myjobs"}>  <button className='block flex items-center gap-2 mt-12 bg-blue text-white font-semibold  px-8 py-2 rounded-sm'> <IoMdArrowRoundBack /> Back</button></Link> 

            </div>
             
            </form>
        </div>
    </div>
    );
};

export default UpdateJob;